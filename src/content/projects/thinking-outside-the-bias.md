---
title: "Thinking Outside the Bias"
description: "A modular evaluation framework for studying bias in model answers and exposed chain-of-thought reasoning."
category: "Applied AI"
role: "Research project with Coralie Sage and Finn Brunke"
tags: ["Python", "LLM evaluation", "BBQ", "StereoSet"]
order: 8
links: [{"label": "GitHub repository", "url": "https://github.com/Bruol/ThinkOutsideTheBias"}, {"label": "Research paper", "url": "https://github.com/Bruol/ThinkOutsideTheBias/blob/main/CS4NLP%20Project%20Report.pdf"}]
period: "2025"
image: "/projects/thinking-outside-the-bias/pipeline.png"
imageAlt: "Bias evaluation pipeline diagram"
---

## The research question

Does asking a language model to reason change the biases in its responses? Together with Coralie Sage and Finn Brunke, I investigated this question through a modular evaluation pipeline. The project studies both final-answer behavior and bias attributed to the reasoning that models expose.

The [repository](https://github.com/Bruol/ThinkOutsideTheBias) contains the implementation, experiment outputs, and plotting code. The [paper](https://github.com/Bruol/ThinkOutsideTheBias/blob/main/CS4NLP%20Project%20Report.pdf) describes the methodology, results, and limitations.

## Separating generation from judgment

The pipeline has two main model roles. **Model-E** produces an answer and, where available, reasoning. **Model-J** evaluates the generated material and returns structured bias judgments. Keeping those roles separate allows experiments to change the evaluated model, judge, dataset, or mitigation strategy independently.

![Diagram of the model evaluation and bias-judging pipeline](/projects/thinking-outside-the-bias/pipeline.png)

*The repository’s overview of the evaluation pipeline.*

The experiments use BBQ and StereoSet, which measure different aspects of stereotypical associations and answer behavior. The paper evaluates DeepSeek-R1-Distill-Llama70B, o4-mini, and Gemini 2.5 Flash, with GPT-4o as the main judge and a Gemini judge used for comparison. These names identify the experimental setup, not a claim about present-day model performance.

## Mitigation and reasoning length

The framework supports interventions before and after reasoning. Prompt-level bias-awareness instructions can be compared with methods that remove reasoning steps judged biased or inspect answer distributions across reasoning prefixes. Saving the outputs makes it possible to revisit scoring and plotting without regenerating every answer.

We also varied thinking budgets and examined observed reasoning length. In the reported experiments, changing a configured budget did not meaningfully change reasoning length or the measured outcomes. Looking across samples, longer reasoning was associated with higher normalized judge-assessed bias. That is an observed relationship in this setup, rather than evidence that making a model think longer necessarily causes bias.

## What the evaluation taught us

Changing the judge substantially changed scores and could alter comparisons between models. A judge model is therefore part of the measurement instrument, with its own behavior and limitations. It cannot be treated as neutral ground truth.

Likewise, final-answer accuracy and a judge’s assessment of reasoning capture different things. A model can choose an acceptable answer while the exposed explanation still attracts bias judgments. The framework makes those measurements separable and gives future experiments a way to test whether conclusions survive a change of judge or benchmark.

The contribution is both the study and the reusable experimental structure: dataset loading, interchangeable model interfaces, mitigation strategies, saved outputs, and analysis tooling.
