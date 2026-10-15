---
title: "GitHub profile and activity digest"
description: "A small GitHub API collector that turns recent repository activity into material for a readable profile digest."
category: "Tools & automation"
role: "Personal automation"
tags: ["Bun", "TypeScript", "GitHub API"]
order: 14
links: [{"label": "GitHub profile repository", "url": "https://github.com/Bruol/bruol"}]
---

## Remembering what I worked on

My [GitHub profile repository](https://github.com/Bruol/bruol) combines a public README with a TypeScript script for collecting recent development activity. The README presents projects in plain language; the script provides the underlying activity data.

## The collection step

The Bun script discovers repositories from the user account and its organizations, then fetches commits attributed to my GitHub username over a two-month window. Its pagination helper walks API responses in batches of up to 100 items. Repositories with matching commits are written to a JSON file together with a collection timestamp.

This separates raw activity from the editorial task of explaining what changed. The committed script collects data; it does not itself generate or publish the prose digest in the README. API failures are logged, so a produced file can also be incomplete and needs checking before it becomes the basis of a public summary.

It is a small tool, but a useful bridge between a scattered commit history and a short account of ongoing work.
