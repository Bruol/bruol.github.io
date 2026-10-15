---
title: "bruol/short"
description: "A Cloudflare Workers URL shortener using KV storage and reverse proxying."
category: "Tools & automation"
role: "Personal project"
tags: ["TypeScript", "Cloudflare Workers", "Workers KV", "Reverse proxy"]
order: 16
links: [{"label": "GitHub repository", "url": "https://github.com/Bruol/url-shortener-cf"}]
---

A Cloudflare Worker stores aliases in KV and reverse-proxies the destination instead of redirecting. It streams the response while keeping the short URL visible, including for presigned storage links. A web form and JSON API create aliases.
