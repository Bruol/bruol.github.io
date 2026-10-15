---
title: "Unikraft for Raspberry Pi 5"
description: "A physical-hardware platform port: AArch64 boot, memory management, interrupts, timers, GPIO, and cache-safe kernel reloads."
category: "Systems & networks"
role: "ETH semester project · Platform implementation and evaluation"
tags: ["AArch64", "C", "Unikraft", "OpenOCD", "GDB"]
order: 3
links: [{"label": "GitHub repository", "url": "https://github.com/Bruol/unikraft"}, {"label": "Project paper", "url": "/other/Porting_Unikraft_to_Raspberry_Pi_5.pdf"}]
period: "2026"
---

## Bringing a unikernel onto real hardware

Unikraft assembles an application with the operating-system components it needs. Its platform layer provides the hardware-specific foundation. My semester project implemented that foundation for the Raspberry Pi 5, taking an image from the firmware handoff through boot, memory initialization, console output, interrupts, and scheduler wake-ups.

The result is a functional **single-core** platform on physical hardware. The [project report](/other/Porting_Unikraft_to_Raspberry_Pi_5.pdf) documents the implementation and board-level tests; the [repository](https://github.com/Bruol/unikraft) contains the code in my Unikraft fork. This is a platform port built on Unikraft, rather than authorship of the wider operating system.

## Boot and memory

Execution begins at EL2 and drops to EL1 to meet Unikraft’s expectations. Bootstrap code creates an identity-mapped address space, reads the firmware-provided device tree, and describes usable RAM to the common paging and allocation subsystems. RAM cannot simply be treated as one contiguous block: firmware reservations and the board’s memory layout affect which regions are safe to hand to the allocator.

The temporary boot mappings are then replaced by Unikraft’s managed page tables. Runtime mapping, unmapping, permission changes, and virtual-to-physical translation use the common paging infrastructure. Keeping platform-specific initialization separate from that shared code was an important integration decision.

## Interrupts, time, and I/O

The port initializes a PL011 console for early diagnostics and normal output, integrates the GICv2-compatible interrupt controller, and uses the Arm non-secure physical generic timer for scheduler wake-ups. Basic RP1 GPIO support covers direction, levels, and pull configuration.

RP1 is a distinct I/O controller reached through the firmware-configured PCIe connection. The implementation relies on that existing configuration rather than claiming a complete PCIe enumeration or general peripheral stack.

## Reloading without a power cycle

A large part of low-level work is the edit–build–load–observe loop. Simply placing a new kernel in RAM through GDB is unsafe once the previous kernel has enabled caches and address translation. Dirty data-cache lines can overwrite newly loaded bytes, and stale instructions or translations can survive into the replacement image.

I implemented a resident warm-reload trampoline. Before GDB loads the replacement kernel and device tree, it cleans and invalidates data caches, invalidates the instruction cache and TLB, and disables caches and the MMU. OpenOCD and GDB can then reload the image into a processor state that matches the new kernel’s boot assumptions.

This makes repeated deployment possible without physically power-cycling the board. The debugging mechanism is part of the port’s practical usability, alongside the boot code itself.

## Evaluation and boundaries

The report records successful C and C++ hello-world boots, memory allocation and integrity checks, runtime page-mapping and protection tests, repeated warm reloads, and **1,000 consecutive scheduler sleeps of 10 ms**. These are functional tests of the implemented mechanisms, rather than a general performance comparison against Linux or other platforms.

Multicore operation and broader peripheral support remain outside the project’s scope. The contribution is a working, inspectable base for running Unikraft on this board and continuing hardware experiments.
