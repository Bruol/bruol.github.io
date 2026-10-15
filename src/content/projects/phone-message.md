---
title: "Phone Message"
description: "An ESP32 voice-message device that uses a telephone keypad to select recordings from a microSD card."
category: "Hardware"
role: "Personal hardware and firmware project"
tags: ["ESP32", "C++", "I2S", "PlatformIO", "MicroSD"]
order: 19
links: [{"label": "GitHub repository and demo", "url": "https://github.com/Bruol/phoneMessage"}]
image: "/projects/phone-message/build.jpeg"
imageAlt: "Phone Message physical keypad build"
---

## A physical interface to recorded messages

Phone Message turns a keypad, a speaker, and stored voice notes into a standalone object. An ESP32 scans a 4 × 3 matrix keypad, reads recordings from a microSD card, and sends audio over I2S to an external DAC or amplifier.

![The physical Phone Message build with its keypad and enclosure](/projects/phone-message/build.jpeg)

*The physical build, photographed in the project repository.*

## Selecting and playing a message

The current firmware supports direct-dial recordings and categorized short notes. Long-note metadata maps a two- or three-digit number to a file path. The device accumulates digits and confirms the entered number after a pause. Short-note categories let keypad digits select a random recording from a corresponding list.

A reset input clears the number and stops playback. A double press switches into keypad-controlled volume selection, and digit tones provide feedback while entering a number. Keeping mappings in metadata on the SD card allows the collection of recordings to change without rebuilding the firmware for each message.

## Keeping updates separate from normal use

Normal playback starts with Wi-Fi disconnected. Holding reset for five seconds requests an SD-card file-management mode on an existing Wi-Fi network. That mode stops audio and exposes file operations through ESPWebFileManager. Leaving it disconnects Wi-Fi, rescans the metadata, and returns to playback.

This separates the everyday interaction from maintenance. The physical object does not need a network connection to play its local recordings, while updating those recordings can avoid repeatedly removing the card.

## Build and scope

The project uses PlatformIO with the Arduino framework, the Keypad library, and ESP32-audioI2S. The [repository](https://github.com/Bruol/phoneMessage) documents the wiring, audio directory layout, metadata formats, and a build video. The firmware is the reference for current behavior; early README text also describes an older press-and-hold playback experiment.
