---
title: "MQTT gas consumption counter"
description: "Gas-meter pulses, published over MQTT."
category: "Hardware"
role: "Personal monitoring experiment"
tags: ["ESP8266", "Arduino", "MQTT", "Pulse counting"]
order: 24
links: [{"label": "GitHub repository", "url": "https://github.com/Bruol/mqtt-gas-counter"}]
---

An ESP8266 detects falling edges from a gas meter and sends each accepted pulse to an MQTT broker. A one-second guard filters bouncing signals; the receiving system handles totals and volume conversion. Pulses faster than the guard can be missed.
