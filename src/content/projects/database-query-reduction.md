---
title: "Database query-reduction research project"
description: "A hybrid SQL reducer that combines delta debugging and AST rewrites while preserving an external bug oracle."
category: "Systems & networks"
role: "Team research project with Kenji Yuri Nakano"
tags: ["Python", "SQLGlot", "SQLite", "Delta debugging"]
order: 11
links: []
---

## Making a failing query understandable

A generated SQL test can contain thousands of tokens while only a small fragment is needed to reproduce the interesting behavior. This project automatically reduces those tests, using an external oracle to decide whether a candidate still reproduces the bug.

The final query does not need to be semantically equivalent to the original. It needs to preserve the behavior the oracle recognizes. That distinction makes aggressive deletion possible while keeping the reduction tied to an executable check. This account is based on the implementation and project report; public artifacts are not linked.

## A hybrid reduction engine

The Python implementation combines statement-level delta debugging with AST-aware transformations using SQLGlot. Coarse deletion first removes large regions of setup. Later passes drop subtrees, replace expressions with NULL, simplify predicates, remove wrappers such as casts and aliases, and replace arithmetic expressions with their operands.

Each edit is reversible. The engine applies an edit to a live tree, renders the candidate, invokes the oracle, and either commits or reverts it. Passes repeat until a sweep accepts no further changes, subject to the configured search budget.

The oracle receives each candidate through a temporary file identified by TEST_CASE_LOCATION. Exit status zero means the interesting behavior remains. Timeouts reject a candidate and terminate its process group.

## Making repeated checks practical

Oracle execution and SQL rendering dominate cost. The reducer caches verdicts for identical candidate strings, renders only changed statements where possible, and memoizes subtrees already found minimal in a given context. Parallel probes test independent deletion candidates, while the pass logic controls which edit is committed.

Context matters for memoization: a subtree that is necessary now may become removable after another part of the query changes. The engine therefore invalidates the relevant minimality assumptions after successful reducing sweeps.

SQL parser coverage was another practical constraint. A quote- and comment-aware normalization layer handles SQLite syntax that SQLGlot otherwise rejects or renders differently. The normalized, parsed query is checked against the oracle before reduction proceeds, because parsing itself can change the observed behavior.

## Evaluation and limits

On the 20-query benchmark described in the report, every output preserved the oracle behavior. The corpus shrank from **51,710 to 2,097 SQLGlot tokens**, a 95.9% reduction in aggregate. The per-query average reduction was 83.4%, and the median was 91.2%; these statistics differ because the large inputs contribute more to the corpus total.

The implementation uses a 2,500-oracle-call threshold to bound expensive searches. In one experiment, most reduction happened quickly and the last small improvement consumed much more time. Returning the latest accepted candidate makes that tradeoff explicit.

The output is not proven globally minimal. Parser limitations, the chosen transformation set, and the oracle budget restrict the search. The useful result is a much smaller reproducer whose interesting behavior is still checked.
