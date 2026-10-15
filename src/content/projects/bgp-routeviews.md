---
title: "BGP RouteViews analysis"
description: "A Python analysis of routing updates, announcements, withdrawals, and per-prefix update bursts."
category: "Systems & networks"
role: "ETH Computer Networks course project"
tags: ["Python", "BGP", "RouteViews", "YAML"]
order: 22
links: [{"label": "GitHub repository", "url": "https://github.com/Bruol/BGP-Project"}]
---

## Looking at routing changes over time

This course project analyzes BGP update logs and produces a set of requested measurements. The input is a text representation of RouteViews updates; the script extracts timestamps, update methods, and network prefixes, then groups updates by prefix.

The [repository](https://github.com/Bruol/BGP-Project) includes the project specification and a test case supplied by the ETH Computer Networks course team. My implementation is the Python analysis script.

## Counting events and finding bursts

The first measurements count all updates, announcements, withdrawals, and affected prefixes. Later stages examine bursts: consecutive updates for a prefix are grouped when their timestamp gap is below 240 seconds. The script calculates burst counts, maximum durations, averages, and counts above duration thresholds, then writes the results to YAML.

The grouping rule is important to interpreting the output. A “burst” here is defined by the assignment’s time-gap criterion, not by an inferred network incident or a universally applicable definition of routing instability.

## An offline analysis pipeline

The program separates parsing, per-prefix grouping, burst detection, and individual metric calculations. That makes the task a concrete exercise in turning a stream of protocol events into structured temporal measurements. It is an offline course implementation with fixed input paths, rather than a continuously running routing monitor.
