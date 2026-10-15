---
title: "ESP32 e-ink experiments"
description: "A PlatformIO sandbox for bringing up a four-color Waveshare e-paper display on ESP32 hardware."
category: "Hardware"
role: "Hardware experiment"
tags: ["ESP32", "C++", "PlatformIO", "E-paper"]
order: 17
links: [{"label": "GitHub repository", "url": "https://github.com/Bruol/eink"}]
---

## Establishing a working display path

This repository is an e-ink hardware sandbox built with PlatformIO and the Arduino framework. The checked-in application exercises a Waveshare 2.9-inch four-color display using its supplied driver, painting code, fonts, and image data.

The distinction matters: this is hardware bring-up and experimentation around an existing vendor display stack, rather than a new display driver written entirely from scratch.

## The demo lifecycle

The setup routine initializes the board interface and panel, clears the screen, allocates a packed image buffer, displays a supplied four-color image, and draws geometric shapes and text. It then refreshes and clears the panel, puts it to sleep, frees the buffer, and shuts down the module interface. The main loop is empty; the demonstration runs through its sequence once at startup.

E-paper makes the update lifecycle visible. Drawing changes a buffer, displaying sends that buffer to the panel, and sleep is a separate step. The experiment is a starting point for learning those constraints before adding dynamic content or a networked application.
