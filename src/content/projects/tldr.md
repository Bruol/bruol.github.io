---
title: "TLDR; Lectures"
description: "Searchable lecture transcripts and summaries, built at the VIScon hackathon."
category: "Applied AI"
role: "Team project · VIScon hackathon"
tags: ["Python", "Whisper.cpp", "Django", "SQLite", "Cloudflare Workers"]
order: 7
links: [{"label": "GitHub repository", "url": "https://github.com/Bruol/tldr-queens_of_the_dragathon"}, {"label": "Live lecture archive", "url": "https://tldr.bruol.me/"}]
period: "2023"
---

Our VIScon 2023 hackathon project uses **FFmpeg → Whisper.cpp → overlapping transcript chunks → summaries**. Students can search lectures, adjust summary detail, download transcripts, and return to the video.

Originally Django and SQLite on Fly.io, it now runs as a read-only Cloudflare archive. Django exports the pages at build time; a Worker serves them and handles search. The old Fly app is retired.
