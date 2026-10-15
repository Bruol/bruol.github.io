---
title: "MQTT gas consumption counter"
description: "An ESP8266 sketch that converts gas-meter pulses into messages on a home MQTT broker."
category: "Hardware"
role: "Personal monitoring experiment"
tags: ["ESP8266", "Arduino", "MQTT", "Pulse counting"]
order: 24
links: [{"label": "GitHub repository", "url": "https://github.com/Bruol/mqtt-gas-counter"}]
---

## A meter pulse becomes an event

This Arduino sketch reads the pulse output associated with a gas-heating meter and publishes an MQTT message for each detected pulse. It uses an ESP8266 to bridge a physical signal into a networked monitoring system.

The firmware detects a falling edge on its input and requires at least one second since the previously accepted pulse. That simple guard reduces repeated triggers from a bouncing signal. The device publishes a startup status and then sends an impulse message to the counter topic for each accepted edge.

## Keeping the device small

Wi-Fi and PubSubClient provide the network connection. The sketch reports pulses rather than calculating a persistent lifetime total or storing a time series locally. Converting those pulses to a volume depends on the meter’s calibration, while accumulation and visualization belong in the system consuming the MQTT events.

The one-second guard also imposes a limit: it can discard legitimate pulses if they occur faster than that. The [repository](https://github.com/Bruol/mqtt-gas-counter) is a compact monitoring experiment, with connection settings supplied in the sketch and no claim of billing-grade metering or durable delivery across outages.
