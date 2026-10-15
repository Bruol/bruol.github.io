---
title: "CEMETS app"
description: "A conference companion for schedules, speakers, venues, slides, and saved events, delivered on the web and in a mobile shell."
category: "Products & interfaces"
role: "Application development · ETH CEMETS"
tags: ["TanStack Start", "Cloudflare Workers", "Expo", "Sanity", "Clerk"]
order: 9
links: [{"label": "CEMETS at ETH", "url": "https://cemets.ethz.ch/"}]
image: "/projects/cemets/app.jpg"
imageAlt: "CEMETS conference app screen montage"
---

## A conference in one place

The CEMETS app brings conference content into a shared interface: events, people, venues, presentation material, and a personal selection of saved events. The codebase contains a web application, an Expo mobile shell, and the Sanity Studio used to maintain conference content.

![A montage of CEMETS mobile application screens](/projects/cemets/app.jpg)

*Screens from the CEMETS app. The current implementation centralizes the experience in a shared web application.*

## One interface across delivery channels

The current architecture uses TanStack Start for the website, rendered through a Cloudflare Worker using Nitro. The Expo application’s main screen is a WebView loading that website. Sanity supplies the conference content through server-side reads.

This creates a clear publishing boundary: a website update can change the experience for existing mobile installations without requiring a new native binary for every content or interface change. The native shell remains responsible for its own platform integration and release cycle.

It is also a tradeoff. A WebView approach depends on web rendering and session behavior inside the native container, rather than providing every screen through native components. The repository documents the shared website as the central implementation.

## Content and access

Sanity schemas describe events, people, venues, slides, and their relationships. Editors manage that material in the Studio, while the application reads a conference snapshot on the server. The browser does not need to query Sanity directly.

Clerk handles attendee authentication. Server functions verify the session before returning conference data, and personalized browser storage is scoped to the signed-in user. Sign-out clears application storage. Those boundaries keep a previously loaded conference snapshot from silently becoming an authentication fallback.

## Connectivity and saved events

The client retains a conference snapshot and saved events in localStorage. An already-open, authenticated page can continue displaying its loaded data during a connection loss. A fresh launch still requires a connection to verify the session: this implementation does not promise a fully offline cold start.

That distinction is useful for a conference companion, where temporary network loss and a completely fresh device launch are different situations. The current code documents both the convenience of retained data and the limits of revocation while a device is offline.

The project combines a content publishing workflow, attendee access, mobile distribution, and deliberate handling of connectivity in one application.
