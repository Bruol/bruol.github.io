---
title: "BGP RouteViews analysis"
description: "A Python analysis of BGP announcements, withdrawals, and update bursts."
category: "Systems & networks"
role: "ETH Computer Networks course project"
tags: ["Python", "BGP", "RouteViews", "YAML"]
order: 22
links: [{"label": "GitHub repository", "url": "https://github.com/Bruol/BGP-Project"}]
---

My ETH Computer Networks project parses RouteViews logs, groups updates by prefix, and counts announcements, withdrawals, and bursts. Updates less than 240 seconds apart form a burst; the script measures their frequency and duration and exports YAML.
