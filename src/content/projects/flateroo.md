---
title: "Flateroo"
description: "Fewer applications. More genuine connections. A flat-sharing app with thousands of users."
category: "Products & interfaces"
role: "Application and backend development"
tags: ["React Native", "Expo", "TypeScript", "PostgreSQL", "HLS", "Fly.io"]
order: 2
links: [{"label": "Flateroo", "url": "https://flateroo.com/"}]
period: "2024–2025"
image: "/projects/flateroo/find.jpg"
imageAlt: "Flateroo room discovery screen"
---

Finding a shared flat in Zurich can mean hundreds of applications before your first invitation to a casting—with ten or more people competing for the room. Rents are high, and bots can apply before you’ve finished reading the listing.

Flateroo aims to change that: send a few thoughtful applications, and let flats hear from real people who want to live there.

I co-built the app, which has thousands of users, working on the React Native client, backend, and custom video infrastructure. It supports video applications, video compression and streaming, and one-to-one and group chat.

<div class="phone-gallery">
<img src="/projects/flateroo/find.jpg" alt="Flateroo room discovery" loading="lazy" />
<img src="/projects/flateroo/video.jpg" alt="Flateroo video tours" loading="lazy" />
<img src="/projects/flateroo/chat.jpg" alt="Flateroo group chat" loading="lazy" />
</div>

Video processing runs separately from the API: uploads become HLS streams, and applications are sent once their videos are ready.
