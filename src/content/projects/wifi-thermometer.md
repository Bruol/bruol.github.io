---
title: "Wi-Fi thermometer"
description: "An ESP8266 thermometer with an LCD display and MQTT output."
category: "Hardware"
role: "Personal electronics project"
tags: ["ESP8266", "DS18B20", "MQTT", "LCD", "Arduino"]
order: 26
links: [{"label": "GitHub repository", "url": "https://github.com/Bruol/wifi_thermometer"}]
---

An ESP8266 reads a DS18B20 sensor, shows the temperature on an I²C LCD, and publishes it over MQTT. The display keeps updating while the device first connects to Wi-Fi. Browser pages in the repository provide the remote view.
