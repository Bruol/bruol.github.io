---
title: "Unikraft for Raspberry Pi 5"
description: "Booting Unikraft on real Raspberry Pi 5 hardware."
category: "Systems & networks"
role: "ETH semester project · Platform implementation and evaluation"
tags: ["AArch64", "C", "Unikraft", "OpenOCD", "GDB"]
order: 3
links: [{"label": "GitHub repository", "url": "https://github.com/Bruol/unikraft"}, {"label": "Project paper", "url": "/other/Porting_Unikraft_to_Raspberry_Pi_5.pdf"}]
period: "2026"
---

I ported Unikraft to the Raspberry Pi 5 for my ETH semester project: AArch64 boot, device-tree memory discovery, page tables, UART, interrupts, timers, and basic GPIO.

The most useful addition was **reloading kernels without power-cycling**. A trampoline clears stale cache and translation state before OpenOCD and GDB load the next image. Without it, the previous kernel’s state can corrupt the replacement.

Hardware tests covered C/C++ boots, memory integrity, page protection, repeated reloads, and 1,000 consecutive 10 ms scheduler sleeps. The port is single-core; multicore and broader peripheral support remain future work.
