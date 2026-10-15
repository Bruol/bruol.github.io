---
title: "bruol/short"
description: "A tiny Cloudflare Workers link service that stores aliases in KV and streams destination responses through the short URL."
category: "Tools & automation"
role: "Personal project"
tags: ["TypeScript", "Cloudflare Workers", "Workers KV", "Reverse proxy"]
order: 16
links: [{"label": "GitHub repository", "url": "https://github.com/Bruol/url-shortener-cf"}]
---

## Short links with a different delivery model

bruol/short provides a web form and JSON API for creating short aliases. It stores the alias-to-destination mapping in Workers KV and serves requests from a Cloudflare Worker.

The interesting detail is how a short URL is resolved. The current implementation **reverse-proxies the destination response**, keeping the short URL in the address bar instead of returning a conventional redirect. The stored destination can include a presigned object-storage URL; the Worker does not need a direct R2 binding to fetch it.

## Implementation choices

A creation request validates an HTTP or HTTPS destination, rejects a destination on the service’s own hostname, and checks custom aliases against a restricted pattern and reserved names. When no alias is supplied, the service generates one and checks for an existing mapping before storing it.

Reverse proxying is convenient for sharing a stable-looking URL, but it changes the behavior expected from a normal link shortener. Response headers, relative resources, upstream availability, and the destination’s assumptions about its origin all matter. It is particularly useful to understand that boundary before treating an arbitrary website as a proxy-compatible resource.

The [repository](https://github.com/Bruol/url-shortener-cf) contains the form, API, KV mapping logic, and proxy implementation in a small Workers application.
