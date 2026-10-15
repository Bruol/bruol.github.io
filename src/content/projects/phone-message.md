---
title: "Phone Message"
description: "Dial a number. Hear a familiar voice."
category: "Hardware"
role: "Personal hardware and firmware project"
tags: ["ESP32", "C++", "I2S", "PlatformIO", "MicroSD"]
order: 19
links: [{"label": "GitHub repository and demo", "url": "https://github.com/Bruol/phoneMessage"}]
image: "/projects/phone-message/build.jpeg"
imageAlt: "Phone Message physical keypad build"
---

An ESP32 keypad selects voice notes from a microSD card and plays them through an I2S audio output. Numbers select long recordings; category keys play random short notes.

![Phone Message keypad build](/projects/phone-message/build.jpeg)

File mappings live on the card, so recordings can change without reflashing. Playback works offline; holding reset opens a Wi-Fi file manager for updates.
