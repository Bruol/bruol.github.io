---
title: "HCI high-fidelity prototype"
description: "Two interactive habit-tracking dashboards for exploring different ways to present progress and daily actions."
category: "Products & interfaces"
role: "Collaborative HCI course prototype"
tags: ["React Native", "Expo", "UI Kitten", "Interaction design"]
order: 21
links: [{"label": "GitHub repository", "url": "https://github.com/Bruol/hifi-prototype"}]
---

## Two versions of the same daily task

This HCI course project implements two high-fidelity habit-tracking dashboards in React Native. A development selection screen lets the evaluator open either version. Both use the same sample habit data, making the interaction and presentation the focus of comparison.

The repository is a collaborative course artifact; several source files explicitly credit Fabius Grünhagen. This entry describes the prototype I participated in, without claiming sole authorship of its implementation.

## Lists versus a focused next action

The Sun dashboard presents pending and completed habits in lists. Selecting a habit opens a confirmation flow, and completing it moves it between the lists and updates its displayed streak. The Moon dashboard keeps a focused habit alongside smaller cards for other habits, using a different hierarchy for the same daily workflow.

Both versions include progress feedback, reversal of completion, and a confetti animation when the final pending habit is completed. UI Kitten supplies interface components and icons, React Navigation provides the screen structure, and Expo supports running the prototype on a device.

## Making a study interaction concrete

An interactive prototype exposes questions that a static mockup can hide: what happens after tapping a habit, how a user undoes an action, and whether completing the last item feels different from completing the first. The sample state allows those sequences to be explored consistently.

The code also marks intentional limits. Date selection and habit editing display “not implemented” messages, and habits are held in local component state. This is an interaction prototype, not a complete account-based habit service. The [repository](https://github.com/Bruol/hifi-prototype) provides the original screens and setup instructions.
