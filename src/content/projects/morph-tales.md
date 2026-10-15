---
title: "Morph Tales"
description: "Unity features and an analytics pipeline for an augmented-reality game that introduces visitors to AI research."
category: "Products & interfaces"
role: "Software engineer · ETH Game Technology Center"
tags: ["Unity", "Firebase", "BigQuery", "Looker Studio"]
order: 4
links: [{"label": "ETH project page", "url": "https://ethz.ch/en/campus/getting-to-know/discover/tours/morph-tales.html"}, {"label": "Game Technology Center", "url": "https://gtc.inf.ethz.ch/"}]
period: "2023–2025"
---

## An AI experience on campus

Morph Tales is an ETH Zurich game that introduces visitors to artificial intelligence through an augmented-reality course. Players accompany a customizable “Morph” through four mini-games at physical stations, using tablets to connect the virtual character with the campus setting. The games draw on ETH research and make human–AI collaboration tangible for a broad audience. [ETH’s project page](https://ethz.ch/en/campus/getting-to-know/discover/tours/morph-tales.html) explains the experience and credits the Game Technology Center, AI Center, and Corporate Communications.

## My contribution

During my work at the Game Technology Center, I developed features in Unity and built a game analytics pipeline using Firebase, BigQuery, and Looker Studio. My contribution was to an existing collaborative installation, rather than the entire game.

The analytics work connected three different jobs: recording events from the game, querying accumulated data, and making it accessible in dashboards. Firebase supplied the collection layer, BigQuery the analytical layer, and Looker Studio the reporting interface. That separation let analysis and reporting evolve without making every dashboard question a change to the game client.

## Engineering across the installation

Unity feature work and analytics meet at the event boundary. Events need to correspond to meaningful actions in the experience so that later analysis can say something useful about play. The project gave me experience with both the visitor-facing interaction and the data flow used to understand an installation after deployment.
