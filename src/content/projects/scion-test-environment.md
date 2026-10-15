---
title: "SCION Control Plane Test Environment"
description: "A container-based test environment for SCION control-plane algorithms."
category: "Systems & networks"
role: "Bachelor’s thesis · ETH Network Security Group"
tags: ["SCION", "Python", "Docker", "SEED Emulator", "Linux tc"]
order: 5
links: [{"label": "Bachelor’s thesis", "url": "/other/A_Comprehensive_Test_Environment_For_SCION_Control_Plane_Algorithms.pdf"}, {"label": "SEED Emulator", "url": "https://github.com/seed-labs/seed-emulator"}, {"label": "Traffic generator", "url": "https://github.com/Bruol/traffic_gen"}]
period: "2024"
---

For my bachelor’s thesis, I extended SEED Emulator with configurable links, gateway support, and traffic generation for SCION control-plane experiments.

Docker runs the network; Linux traffic control changes bandwidth, latency, and loss. A separate Python orchestrator schedules SCION, iperf, and web traffic from patterns or time-varying traffic matrices.

Combining token-bucket shaping with netem caused traffic to queue indefinitely in our tests. I switched to netem for all link properties, restoring packet drops and TCP backoff.
