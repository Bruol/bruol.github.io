---
title: "ESP32 e-ink experiments"
description: "An ESP32 experiment with a four-color Waveshare e-paper display."
category: "Hardware"
role: "Hardware experiment"
tags: ["ESP32", "C++", "PlatformIO", "E-paper"]
order: 17
links: [{"label": "GitHub repository", "url": "https://github.com/Bruol/eink"}]
---

An ESP32/PlatformIO experiment using Waveshare’s 2.9-inch display driver. The startup demo allocates a packed image buffer, draws shapes and text, refreshes the panel, and puts it to sleep. A starting point for learning the display’s update cycle.
