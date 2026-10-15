---
title: "Drifa generative poster"
description: "A p5.js poster that translates paired workout data into a composition of weighted bars."
category: "Products & interfaces"
role: "Personal creative-coding project"
tags: ["JavaScript", "p5.js", "Data visualization", "Generative design"]
order: 18
links: [{"label": "GitHub repository", "url": "https://github.com/Bruol/drifa-poster"}]
image: "/projects/drifa/poster.png"
imageAlt: "Drifa generative workout poster"
---

## Making a poster from shared activity

The Drifa poster is a browser-based composition generated from workout data. Rather than placing a conventional dashboard in a poster frame, the sketch turns matched sessions into a sequence of bars in two colors. The output is both a personal artifact and an experiment in using code as a layout tool.

![The Drifa generative workout poster, with black and orange bars](/projects/drifa/poster.png)

*The rendered poster included in the repository.*

## Data becomes geometry

The sketch loads two workout datasets and a set of matches, looks up sessions by identifier, and orders the paired results by date. It derives each participant’s estimated volume and uses those values to calculate the proportions of each bar. A weighting factor modifies one series, while a square-root mapping influences bar width.

These are design decisions with data consequences: the weighting changes the visual balance, and the width mapping changes how differences in magnitude appear. The result should be read as an authored composition, rather than an unqualified statistical comparison of two people’s training.

## A deterministic drawing pass

The p5.js setup creates a fixed 800 × 1,131 canvas with a high pixel density. The sketch waits for data, renders a loading or error state when needed, and redraws once the data is available. Using noLoop avoids continuous rendering for an image that changes only when its inputs do.

The [repository](https://github.com/Bruol/drifa-poster) contains the sketch, data-processing material, and the poster output. Code makes the composition reproducible while keeping its scale, spacing, color, and weighting open to revision.
