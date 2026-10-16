---
title: "Phone Message"
description: "An ESP32 device that plays recorded voice messages selected on a telephone keypad."
category: "Hardware"
role: "Personal hardware and firmware project"
tags: ["ESP32", "C++", "I2S", "PlatformIO", "MicroSD"]
order: 19
links: [{"label": "GitHub repository and demo", "url": "https://github.com/Bruol/phoneMessage"}]
image: "/projects/phone-message/telephone.jpg"
imageAlt: "Orange telephone with a pink keypad and coiled cord"
---

<img src="/projects/phone-message/telephone.jpg" alt="Orange telephone with a pink keypad and coiled cord, beside a framed telephone poster" width="1536" height="2048" />

The ESP32 reads keypad input, selects voice notes from a microSD card and plays them through an I2S audio output. Numbers select long recordings; category keys play random short notes.

![Phone Message keypad build](/projects/phone-message/build.jpeg)

File mappings live on the card, so recordings can change without reflashing. Playback works offline; holding reset opens a Wi-Fi file manager for updates.
