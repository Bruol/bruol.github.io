---
title: "Cloudflare SMTP client"
description: "A small SMTP client built around the socket API available inside Cloudflare Workers."
category: "Tools & automation"
role: "Library author"
tags: ["TypeScript", "Cloudflare Workers", "SMTP", "STARTTLS"]
order: 15
links: [{"label": "GitHub repository", "url": "https://github.com/Bruol/cloudflare-smtp"}]
---

## SMTP from a Worker

This library sends plain-text email directly from Cloudflare Workers using cloudflare:sockets. It provides a small sendMail API around connection settings, sender and recipients, subject, and message text.

## The protocol boundary

The client supports plain SMTP, implicit TLS, and STARTTLS, with automatic transport selection based on the port and an explicit override when needed. STARTTLS upgrades the connection before authentication. The message builder handles UTF-8 header encoding and SMTP-oriented formatting, while the protocol client works with the runtime’s readable and writable streams.

The scope is deliberately small: plain-text messages in the Workers runtime. It is not a general Node.js mail library or a complete HTML-email and attachment system. The [repository](https://github.com/Bruol/cloudflare-smtp) documents installation and the API, and includes an npm publishing workflow using GitHub Actions trusted publishing.
