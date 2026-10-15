---
title: "SQL AST research project"
description: "A schema-aware C++ SQL generator and differential fuzzer for investigating behavioral differences between SQLite binaries."
category: "Systems & networks"
role: "Team research project with Kenji Yuri Nakano"
tags: ["C++20", "SQLite", "AST", "Differential testing", "gcov"]
order: 10
links: []
---

## Generating useful database tests

This research project builds SQL from an abstract syntax tree and compares its execution on a patched SQLite target with an unmodified reference. The central problem is generating inputs that are varied enough to explore behavior while remaining valid often enough to reach meaningful database operations.

Our implementation uses a schema-aware catalog and typed expression generation. The code is divided into SQL representation and emission, fuzzing orchestration, and execution utilities. This write-up is based on the project’s implementation and report; no public repository or downloadable report is linked here.

## The experiment pipeline

For each run, the fuzzer creates a random database schema and initial data, materializes the database using the reference binary, and generates one fuzzed SQL statement. It then copies the initial database so the reference and target execute against independent but identical starting states.

The executor captures stdout, stderr, exit status, signals, and timeout information. An oracle classifies crashes, timeouts, unexpected target errors, and output differences. Suspected failures retain the SQL, setup, initial database, outputs, and a JSON report for later review.

One fuzzed statement per run was a debugging decision: setup can still be large, but the operation under investigation is isolated. A fixed random seed makes generation reproducible within the implementation.

## AST and execution design

Structured generation covers inserts, updates, deletes, and selects, including expressions, joins, aggregates, predicates, and subqueries. SQLite features that are awkward to model as typed nodes also have a raw-statement path. The catalog lets expression generation refer to actual tables, columns, and affinities rather than inventing names blindly.

Execution uses fork and exec directly. A poll loop drains stdout and stderr, applies deadlines, and escalates from SIGTERM to SIGKILL when needed. Move-only RAII wrappers manage file descriptors and pipes. A separate replay phase can collect gcov coverage.

SQL keyword emission also records statistics. A compile-time checked keyword list and emission macro connect generated syntax to keyword-frequency reporting, reducing drift between the generator and its measurements.

## Evaluation and false positives

The report describes a 10,000-query run on an M4 MacBook Air with 16 GB of RAM. It flagged 431 cases: 426 output differences and five unexpected errors, with no crashes or timeouts in that run. These are **raw reports**, not 431 distinct SQLite bugs.

Manual review found repeated numeric-serialization differences, upsert/RETURNING behavior, malformed-JSON cases, and output-rendering differences. Queries using random() also produced false positives because the two executions could legitimately return different values. The target was a patched evaluation binary, so these results should not be read as newly discovered defects in current upstream SQLite.

The main lesson is that a differential fuzzer needs a carefully defined oracle as much as it needs broad input generation. Reproducible inputs and retained artifacts make those reports diagnosable.
