---
title: "Electomate"
description: "A retrieval-augmented voting-information project that connects questions about politics to party-program material."
category: "Applied AI"
role: "Contributor · OpenDemocracy"
tags: ["RAG", "Political information", "Questionnaires"]
order: 6
links: [{"label": "Electomate project", "url": "https://opendemocracy.ai/electomate"}]
period: "2024"
---

## Making political information explorable

I contributed to OpenDemocracy’s work on a retrieval-augmented voting-information application. The project combines a structured questionnaire with a way to ask questions about party programs. My involvement dates to 2024; the current [Electomate page](https://opendemocracy.ai/electomate) describes the initiative’s wider development since then.

The appeal of retrieval in this setting is that a question can lead to relevant manifesto material. A fixed questionnaire covers selected issues, while a document-based conversation lets someone explore the reasoning and details behind a party’s stated position.

## Two complementary interactions

The current public description distinguishes questionnaires and agreement calculations from chat with party manifestos. For the documented German questionnaire, party answers were prepared using the Real-o-Mat dataset and manifestos, with answers represented as yes, no, or neutral. Question weighting and partial agreement affect the matching calculation.

That separation matters technically: a score computed from structured answers and a generated explanation based on retrieved text have different failure modes. The score depends on the dataset and matching rules. The explanation depends on retrieving appropriate passages and representing them faithfully.

## Project scope

This entry records my participation in the RAG-powered application, rather than attributing every feature on today’s platform to my work. The public initiative presents Electomate as an information service, with transparency and source verification central to its purpose. The challenge is making political material easier to navigate while keeping the underlying evidence available for scrutiny.
