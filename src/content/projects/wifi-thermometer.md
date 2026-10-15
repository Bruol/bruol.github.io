---
title: "Wi-Fi thermometer"
description: "An ESP8266 temperature sensor with a local LCD readout and MQTT publication for networked monitoring."
category: "Hardware"
role: "Personal electronics project"
tags: ["ESP8266", "DS18B20", "MQTT", "LCD", "Arduino"]
order: 26
links: [{"label": "GitHub repository", "url": "https://github.com/Bruol/wifi_thermometer"}]
---

## Useful locally and over the network

The Wi-Fi thermometer combines an ESP8266, a DS18B20 temperature sensor, and an I²C character display. It shows the measured temperature on the device and publishes readings to an MQTT broker, allowing the same sensor to serve a local display and a remote interface.

## The measurement path

The firmware uses OneWire and DallasTemperature to read the sensor. It formats the temperature with one decimal place for the LCD and two decimal places for the published payload. Those are formatting choices, not claims about sensor accuracy.

During the initial Wi-Fi connection loop, it continues updating the local display. After connecting to the broker, the main loop requests measurements, updates the LCD, and publishes the reading. The repository also contains browser pages and MQTT client resources used around the device.

## A learning project with visible boundaries

The README describes a 16 × 2 display, while the checked-in firmware constructs a 20 × 4 LCD instance. That is a useful reminder to use the actual wiring and source configuration when reproducing a hardware project.

The sketch is a straightforward prototype: network settings are compiled in, and the loop does not implement a comprehensive reconnection or message-buffering strategy. Its value is the complete path from a physical measurement through an embedded controller to a local readout and MQTT message.
