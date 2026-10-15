---
title: "Database query-reduction research project"
description: "Turn a huge failing SQL test into a small reproducer."
category: "Systems & networks"
role: "Team research project with Kenji Yuri Nakano"
tags: ["Python", "SQLGlot", "SQLite", "Delta debugging"]
order: 11
links: []
---

With Kenji Yuri Nakano, I built a Python reducer combining statement-level delta debugging with SQLGlot AST rewrites. Each deletion or simplification stays only if an external oracle confirms the bug still reproduces.

Parallel checks, cached verdicts, and incremental rendering cut repeated work. Across 20 benchmark queries, it preserved every reproducer while shrinking **51,710 tokens to 2,097: 95.9% less SQL**. The outputs preserve the bug; they are not guaranteed globally minimal.
