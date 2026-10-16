---
title: "Flateroo"
description: "A flat-sharing app with thousands of users, video applications, and flatmate chat."
category: "Products & interfaces"
role: "Application and backend development"
tags: ["React Native", "Expo", "TypeScript", "PostgreSQL", "HLS", "Fly.io"]
order: 2
links: [{"label": "Flateroo", "url": "https://flateroo.com/"}]
period: "2024–2025"
image: "/projects/flateroo/poster-photo.webp"
imageAlt: "Framed Flateroo Flat Mate Zürich poster against a concrete wall"
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

<figure>
<a href="/projects/flateroo/poster-photo.webp"><img src="/projects/flateroo/poster-photo.webp" alt="Framed Flat Mate Zürich poster with lime and pink typography against a concrete wall" width="1366" height="2048" loading="lazy" /></a>
</figure>

<figure>
<div class="design-gallery">
<a href="/projects/flateroo/brand-poster.jpg"><img src="/projects/flateroo/brand-poster.jpg" alt="Flateroo poster combining bold Flat Mate typography, purple and mint blocks, and a shared dining table" loading="lazy" width="1083" height="1500" /></a>
<a href="/projects/flateroo/campaign-poster.jpg"><img src="/projects/flateroo/campaign-poster.jpg" alt="Flateroo poster pairing the map interface with more images and videos, fewer bots and generic emails" loading="lazy" width="1083" height="1500" /></a>
</div>
<figcaption>Campaign posters from our Figma design file. Open either for a closer look.</figcaption>
</figure>
