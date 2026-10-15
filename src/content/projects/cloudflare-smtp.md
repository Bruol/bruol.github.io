---
title: "Cloudflare SMTP client"
description: "Send email directly from a Cloudflare Worker."
category: "Tools & automation"
role: "Library author"
tags: ["TypeScript", "Cloudflare Workers", "SMTP", "STARTTLS"]
order: 15
links: [{"label": "GitHub repository", "url": "https://github.com/Bruol/cloudflare-smtp"}]
---

A small TypeScript SMTP client using `cloudflare:sockets`. One `sendMail` call handles plain-text messages, UTF-8 headers, multiple recipients, and plain SMTP, implicit TLS, or STARTTLS.
