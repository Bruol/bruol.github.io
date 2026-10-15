---
title: "SCION Control Plane Test Environment"
description: "A Docker-based environment for studying routing algorithms with configurable topologies, changing links, and repeatable traffic."
category: "Systems & networks"
role: "Bachelor’s thesis · ETH Network Security Group"
tags: ["SCION", "Python", "Docker", "SEED Emulator", "Linux tc"]
order: 5
links: [{"label": "Bachelor’s thesis", "url": "/other/A_Comprehensive_Test_Environment_For_SCION_Control_Plane_Algorithms.pdf"}, {"label": "SEED Emulator", "url": "https://github.com/seed-labs/seed-emulator"}, {"label": "Traffic generator", "url": "https://github.com/Bruol/traffic_gen"}]
period: "2024"
---

## Why a controlled network matters

A routing algorithm operates in a network that changes: links become congested, available capacity shifts, and competing traffic affects measured performance. Comparing algorithms in a live network makes it difficult to distinguish the algorithm’s behavior from those background changes.

My bachelor’s thesis built a test environment for SCION control-plane algorithms with configurable topologies and conditions. It extends work around SEED Emulator and adds traffic generation so that experiments can include native SCION and IPv4 traffic. The [thesis](/other/A_Comprehensive_Test_Environment_For_SCION_Control_Plane_Algorithms.pdf) is the detailed reference for my contribution; [SEED Emulator](https://github.com/seed-labs/seed-emulator) is the upstream foundation.

## Topology and link configuration

The environment translates topology descriptions into container-based emulations. It incorporates the SCION IP Gateway for IPv4 traffic carried across SCION and provides controls for link properties. A graphical interface communicates with backend operations that inspect and update Linux traffic-control settings inside the relevant containers.

An instructive failure involved queue configuration. Combining a token-bucket filter for bandwidth with netem for latency and loss caused traffic to queue for extended periods in our tests. The implementation switched to netem for all link properties, producing drops under overload and allowing TCP to react. The choice came from observing the behavior of the assembled system, rather than assuming that individually reasonable settings would compose correctly.

## Generating traffic over time

The separate [traffic generator](https://github.com/Bruol/traffic_gen) takes a saved SEED emulation and a traffic-pattern specification. A pattern identifies source and destination autonomous systems, start offsets, duration, and tool-specific parameters. Supported modes include SCION’s bandwidth tester, iperf, and web traffic; IPv4 modes can use the SCION IP Gateway.

A matrix format describes traffic between AS pairs at successive time steps. This allows changing demand across an experiment instead of generating one constant flow. The orchestration layer prepares the emulation, schedules traffic processes, and collects their output.

Keeping orchestration outside individual traffic-generating containers supports coordinating multiple tools and workloads. It also avoids forcing every traffic mode into the same underlying implementation.

## What the environment enables

The result is infrastructure for evaluating algorithms under selected conditions. It combines topology generation, link changes, gateway configuration, and workload orchestration in a repeatable setup. That is distinct from demonstrating that a particular routing algorithm is universally better.

The thesis discusses throughput limitations and implementation boundaries. Container emulation and synthetic traffic remain approximations of a real network; their value here is control and the ability to repeat an experiment while changing a chosen variable.
