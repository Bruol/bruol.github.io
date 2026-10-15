---
title: "Japanese election data scraper"
description: "A Python scraper that turns Japanese constituency-election tables into structured data for comparison across years."
category: "Tools & automation"
role: "Data-collection project"
tags: ["Python", "Beautiful Soup", "CSV", "Japanese Wikipedia"]
order: 25
links: [{"label": "GitHub repository", "url": "https://github.com/Bruol/scrape_wiki_ja_election_data"}]
---

## Extracting a repeated structure

This project collects election results from Japanese Wikipedia and exports them into structured files. The source material is organized by prefecture, district, and election year, while the analysis needs comparable party percentages across those dimensions.

The scraper uses requests and Beautiful Soup. It starts from a list of prefecture-related district links, constructs successive district URLs, downloads the pages, and selects election tables using their shape and Japanese header markers. The code maps those tables to a fixed set of election years from 1996 to 2017.

## Turning rows into records

The extraction logic reads party names and vote percentages from table cells. For the selected party, it records that party’s share alongside a comparison party’s result; helper scripts support finding links and handling party names. The repository contains JSON and CSV outputs as well as the collection scripts.

The interesting work is in the assumptions between HTML and data: identifying the correct table, handling linked party names, associating a table with a year, and deciding what a missing party entry means. The implementation relies on fixed table layouts and ordering, so changed pages need validation before a new scrape is treated as comparable data.

The [repository](https://github.com/Bruol/scrape_wiki_ja_election_data) is a record of a focused data-collection task, rather than a maintained general-purpose election-data API.
