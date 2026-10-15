---
title: "SQL AST research project"
description: "A schema-aware SQL generator and differential fuzzer for SQLite."
category: "Systems & networks"
role: "Team research project with Kenji Yuri Nakano"
tags: ["C++20", "SQLite", "AST", "Differential testing", "gcov"]
order: 10
links: []
---

With Kenji Yuri Nakano, I built a C++ differential fuzzer for SQLite. It generates schema-aware SQL trees and runs each query against identical database copies using a patched target and a reference binary. Failures retain the query, setup, database, and outputs for debugging.

A 10,000-query evaluation produced 431 reports, including duplicates and false positives—not 431 distinct bugs. Queries using `random()` exposed an oracle problem: two valid executions can legitimately disagree.
