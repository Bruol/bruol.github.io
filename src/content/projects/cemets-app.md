---
title: "CEMETS app"
description: "Conference schedules, speakers, slides, and saved events."
category: "Products & interfaces"
role: "Application development · ETH CEMETS"
tags: ["TanStack Start", "Cloudflare Workers", "Expo", "Sanity", "Clerk"]
order: 9
links: [{"label": "CEMETS at ETH", "url": "https://cemets.ethz.ch/"}]
image: "/projects/cemets/app.jpg"
imageAlt: "CEMETS conference app screen montage"
---

I built a shared conference interface with TanStack Start on Cloudflare Workers, Sanity for editing content, and Clerk for attendee access. An Expo WebView delivers the same interface on mobile, so website updates reach existing installations.

![CEMETS conference app screens](/projects/cemets/app.jpg)

Loaded schedules and saved events survive a temporary connection loss. A fresh launch still needs internet to verify the session.
