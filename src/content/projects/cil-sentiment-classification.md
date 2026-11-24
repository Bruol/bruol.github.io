---
title: "CIL text sentiment classification"
description: "Fine-tuning RoBERTa-large for text sentiment classification in ETH Zurich's Computational Intelligence Lab."
category: "Applied AI"
role: "ETH CIL course project with Coralie Sage, Fabius Grünhagen, and Finn Brunke"
period: "2025"
tags: ["Python", "PyTorch", "RoBERTa", "Hugging Face Transformers", "NLP"]
order: 13
links: []
---

With [Coralie Sage](https://www.linkedin.com/in/coraliesage/), [Fabius Grünhagen](https://gruefa.me/), and [Finn Brunke](https://www.linkedin.com/in/finn-brunke/) (team FLCF), I worked on the Spring 2025 Computational Intelligence Lab (`263-0008-00 S`) Kaggle text sentiment classification competition at ETH Zurich. Over 59 submissions, we fine-tuned `RoBERTa-large` in PyTorch using Hugging Face Transformers.

We ran ablations across unfrozen transformer layers (8 vs. 12), sequence lengths (128 vs. 256), dropout (`0.2`–`0.4`), and learning rates (`1e-5` and `2e-5`), alongside decision-threshold sweeps from `0.50` to `0.95` that peaked around `0.60`–`0.65`. Simpler setups generalized better: a linear classification head outperformed a deeper MLP (`88.6%` vs. `86.6%` private accuracy), while synthetic data and relabeling experiments degraded private accuracy from roughly `88%` to `81`–`83%`.

Our best configuration—`RoBERTa-large` with 8 unfrozen layers, sequence length 256, and a linear head—reached `88.6%` private accuracy (`0.8855`), well above the `76.2%` course passing baseline and close to the `89.0%` top-grade baseline (with the leading team at `92.6%`). Our selected final submission scored `87.4%` public (`88.2%` private), finishing 23rd out of 27 teams.
