---
title: "Personal website"
description: "A small Astro site for my profile, CV, and a durable, source-linked reference to my projects."
category: "Products & interfaces"
role: "Personal project"
tags: ["Astro", "Tailwind CSS", "Markdown", "Static site"]
order: 13
links: [{"label": "GitHub repository", "url": "https://github.com/Bruol/bruol.github.io"}]
---

## A home for the work

This website started as a Hugo site using PaperMod and now uses Astro. Its purpose is to give my work a stable home: a short introduction, contact links, a CV, and project write-ups that can carry more detail than a résumé.

The [repository](https://github.com/Bruol/bruol.github.io) contains both the current implementation and traces of that earlier structure. The current pages live under src; historical Hugo content is not the active page system.

## Keeping delivery simple

Astro renders the pages ahead of time. Tailwind supplies the existing interface styling, and a shared layout handles metadata, navigation, theme selection, and the common page shell. The site uses system fonts and retains a light/dark preference in localStorage.

The projects section uses a schema-validated Markdown collection. Each project has its own URL, summary, topic, role, technology tags, source links, and article body. The collection drives both the index and the individual pages, so navigation and metadata come from the same content.

## A reference rather than a link list

Project descriptions explain the problem, implementation, and important limitations, with longer accounts for research and product work and shorter notes for focused utilities. The index can be searched by words and filtered by topic in the browser. Its underlying links and articles are static, so browsing does not depend on an application backend.

The design extends the site’s existing neutral palette and restrained typography. The extra structure belongs to the content: source links, an article table of contents, and screenshots where the interface or physical object helps explain the work.
