---
title: "Flateroo"
description: "A flat-sharing platform with video tours, applications, and real-time conversations between prospective flatmates."
category: "Products & interfaces"
role: "Application and backend development"
tags: ["React Native", "Expo", "TypeScript", "PostgreSQL", "HLS", "Fly.io"]
order: 2
links: [{"label": "Flateroo", "url": "https://flateroo.com/"}]
period: "2024–2025"
image: "/projects/flateroo/find.jpg"
imageAlt: "Flateroo room discovery screen"
---

## The product

Finding a room in a shared flat involves more than comparing rent and floor area. People also need to understand the space, introduce themselves, and find out whether they could live well together. Flateroo combines room discovery with video, applications, and conversations around the people in a flat.

I worked on the React Native application and its supporting backend and video infrastructure. The [public Flateroo site](https://flateroo.com/) is the product reference; the images below come from the app’s English App Store assets.

<div class="phone-gallery">
<img src="/projects/flateroo/find.jpg" alt="Flateroo App Store screenshot showing room discovery" loading="lazy" />
<img src="/projects/flateroo/video.jpg" alt="Flateroo App Store screenshot presenting video tours" loading="lazy" />
<img src="/projects/flateroo/chat.jpg" alt="Flateroo App Store screenshot presenting group chat" loading="lazy" />
</div>

*Room discovery, video tours, and group conversations in the mobile application.*

## Application and data model

The mobile client uses React Native and Expo. A Node.js / TypeScript backend supports the product, with PostgreSQL and Prisma for structured data. The repository includes listings, room applications, application states, and video-processing states. Those distinctions matter because a user action and the completion of a media job happen at different times.

Real-time chat connects the discovery and application workflow to conversations with potential flatmates. Video is part of the same product journey: users need an upload to become a usable tour or application attachment, rather than a raw file that happens to exist in storage.

## Video-processing pipeline

The repository separates the main application backend from a transcoding service. That service downloads the uploaded object from S3-compatible storage through a MinIO client, processes it into HLS output, and writes the resulting objects back to storage. The database records processing state, and an application can move to its sent state after its associated video finishes transcoding.

HLS provides a segmented streaming format for mobile playback. Compared with serving only the original upload, the cost is more infrastructure: processing jobs, temporary files, output manifests and segments, and explicit handling of failure and completion.

Separating transcoding from the main request path also gives it its own deployment and resource requirements. The backend repository contains Docker and Fly.io deployment configurations, while analytics events mark processing stages and failures.

## Engineering decisions

The main boundary is between transactional product state and asynchronous media work. A database update cannot by itself guarantee that an uploaded video has been downloaded, converted, and made playable. Explicit states connect those systems and give the client something meaningful to display while processing continues.

A shared TypeScript stack helps connect the mobile application, backend, and processing service, while PostgreSQL keeps relationships such as applications and listings explicit. React Native makes the mobile interface a shared implementation across platforms, with native media behavior still requiring device testing.

The project spans user-facing interaction, relational data, real-time communication, and media delivery. Its technical interest lies in making these parts support one continuous housing-search workflow.
