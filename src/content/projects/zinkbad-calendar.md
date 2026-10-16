---
title: "Zinkbad Club calendar"
description: "A scraper that adds a nearby club’s events to my calendar through an ICS feed."
category: "Tools & automation"
role: "Personal project"
tags: ["TypeScript", "Express", "Web scraping", "ICS", "Fly.io"]
order: 20
links: [{"label": "GitHub repository", "url": "https://github.com/Bruol/zinkbad_calendar"}]
---

I lived near Zinkbad Club and got tired of checking its website for events. So I built a TypeScript scraper that serves the program as an ICS subscription.

My calendar refreshes the feed automatically. Each request fetches the latest listings; Express turns their dates, titles, and links into calendar entries.
