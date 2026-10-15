---
title: "Thinking Outside the Bias"
description: "Does more reasoning change a language model’s bias?"
category: "Applied AI"
role: "Research project with Coralie Sage and Finn Brunke"
tags: ["Python", "LLM evaluation", "BBQ", "StereoSet"]
order: 8
links: [{"label": "GitHub repository", "url": "https://github.com/Bruol/ThinkOutsideTheBias"}, {"label": "Research paper", "url": "https://github.com/Bruol/ThinkOutsideTheBias/blob/main/CS4NLP%20Project%20Report.pdf"}]
period: "2025"
image: "/projects/thinking-outside-the-bias/pipeline.png"
imageAlt: "Bias evaluation pipeline diagram"
---

With Coralie Sage and Finn Brunke, I built a Python framework that separates the model answering a question from the model judging its bias. We tested reasoning models on BBQ and StereoSet, comparing prompting strategies and reasoning budgets.

![Bias evaluation pipeline](/projects/thinking-outside-the-bias/pipeline.png)

The clearest lesson: **changing the judge changed the scores—and sometimes the model rankings**. Longer observed reasoning also correlated with higher judged bias, but changing the configured thinking budget barely changed reasoning length. Neither result supports treating an LLM judge as ground truth.
