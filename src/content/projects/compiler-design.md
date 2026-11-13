---
title: "Oat compiler in OCaml"
description: "A compiler from a small typed language down to x86-64, built over six assignments."
category: "Systems & networks"
role: "ETH Compiler Design course project with Fabius Grünhagen"
period: "2023"
tags: ["OCaml", "LLVM IR", "x86-64", "Menhir", "Dataflow analysis"]
order: 27
links: []
---

With Fabius Grünhagen, I built a compiler for ETH's Compiler Design course. Each assignment added a stage. First came an x86-64 subset simulator and assembler, then an LLVM IR to x86 backend. After that we wrote a frontend for Oat, a small imperative language, and added type checking, structs, and function pointers.

The final assignment added a dataflow framework. On top of it we built alias analysis, dead-code elimination, constant propagation, and a liveness-based register allocator that had to beat the default greedy one.
