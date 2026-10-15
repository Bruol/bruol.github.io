---
title: "Flateroo"
description: "Find a room. Meet the people you might live with."
category: "Products & interfaces"
role: "Application and backend development"
tags: ["React Native", "Expo", "TypeScript", "PostgreSQL", "HLS", "Fly.io"]
order: 2
links: [{"label": "Flateroo", "url": "https://flateroo.com/"}]
period: "2024–2025"
image: "/projects/flateroo/find.jpg"
imageAlt: "Flateroo room discovery screen"
---

I worked on Flateroo’s React Native app, backend, and video infrastructure: room discovery, applications, and real-time flatmate chat.

<div class="phone-gallery">
<img src="/projects/flateroo/find.jpg" alt="Flateroo room discovery" loading="lazy" />
<img src="/projects/flateroo/video.jpg" alt="Flateroo video tours" loading="lazy" />
<img src="/projects/flateroo/chat.jpg" alt="Flateroo group chat" loading="lazy" />
</div>

A separate service downloads uploads from S3-compatible storage, transcodes them to HLS, and uploads the playable output. PostgreSQL tracks processing and application states, so an application is sent only after its video is ready. Separating that work from the Node.js API keeps slow media jobs out of user requests.
