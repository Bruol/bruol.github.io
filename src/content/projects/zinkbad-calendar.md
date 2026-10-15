---
title: "Zinkbad Club calendar"
description: "An event scraper that puts the program of a nearby club into a calendar I already use."
category: "Tools & automation"
role: "Personal project"
tags: ["TypeScript", "Express", "Web scraping", "ICS", "Fly.io"]
order: 20
links: [{"label": "GitHub repository", "url": "https://github.com/Bruol/zinkbad_calendar"}]
---

## The club down the road

I lived close to Zinkbad Club, but finding out when it had events was more annoying than it needed to be. I wanted its program to appear alongside everything else in my calendar, without repeatedly checking the website or copying dates by hand.

So I built a service that reads the club’s event listings and exposes them as an ICS calendar feed. Subscribing to the feed lets a calendar application refresh the events on its own schedule. The service does not need direct write access to my personal calendar.

## From a website to a calendar

A TypeScript scraper extracts the event title, start and end times, description, location, and source link. A separate calendar generator turns the parsed events into iCalendar entries using the ics library. Express serves the resulting file at /calendar.ics, with a JSON event endpoint for inspecting what the scraper found.

The repository includes Docker and Fly.io deployment support. The application fetches the source website on every request, with no server-side cache or scheduled scraping job. That keeps the service simple and makes each response reflect the current source page, while also making response time and availability depend on that page.

## What “automatic” means here

The automation is a subscription pipeline: club website → scraper → ICS feed → calendar app. The calendar client decides when to poll, so an updated source page does not imply an instant update on every device. HTML changes and time interpretation are also ongoing maintenance concerns for any scraper-based calendar.

The project solves a small local annoyance by adapting information to an existing habit: checking my calendar.
