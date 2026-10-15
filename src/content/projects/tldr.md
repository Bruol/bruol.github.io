---
title: "TLDR; Lectures"
description: "A hackathon lecture summarizer that turns recordings into searchable transcripts and summaries at multiple levels of detail."
category: "Applied AI"
role: "Team project · VIScon hackathon"
tags: ["Python", "Whisper.cpp", "Django", "SQLite", "Cloudflare Workers"]
order: 7
links: [{"label": "GitHub repository", "url": "https://github.com/Bruol/tldr-queens_of_the_dragathon"}, {"label": "Live lecture archive", "url": "https://tldr.bruol.me/"}]
period: "2023"
---

## From a recording to a useful entry point

TLDR; Lectures was built at the VIScon 2023 hackathon. The idea was to make lecture recordings easier to revisit: transcribe the recording, summarize its content, and give students a searchable way to find the relevant lecture and return to its source video.

The repository preserves both the original processing code and the web application. It also documents a later move from the original Django deployment on Fly.io to a read-only archive on Cloudflare Workers. The [live archive](https://tldr.bruol.me/) is the current destination; the old Fly.io application has been retired.

## Transcription and summarization

The transcription scripts extract audio from lecture videos with FFmpeg and run Whisper.cpp to produce text. The summarization code tokenizes a transcript into overlapping chunks, with defaults of 2,000 word tokens and 200 tokens of overlap. It sends chunks to the model, retains intermediate summaries, and uses those outputs in further processing.

Chunking handles recordings that are too long to send as a single prompt. Overlap reduces abrupt context loss at boundaries, while saved intermediate files avoid repeating every API call when iterating on later stages. The tokenizer in this code is NLTK’s word tokenizer, so these counts should not be confused with a model’s own subword-token budget.

The web application organizes results by course and lecture, offers summary-detail controls, and connects summaries to video links and transcript downloads. Search provides a practical entry point into that archive.

## Original application and current archive

The original application uses Django templates and SQLite, with Docker and Fly configuration retained in the repository. The current archive runs Django only during export: a build script renders public content and generates a topic index, then a Worker serves the static assets and implements search.

This is a useful change in operational requirements. An archived hackathon project can keep its public material accessible without maintaining a Python application server. Updating content now requires rebuilding and deploying the archive, and the deployed version is read-only.

## Boundaries

Transcription errors propagate into summaries, and a summary can omit details that matter to a particular question. Links back to recordings and downloadable transcripts help readers check what was said. The project is an experiment in navigating lecture material, rather than a substitute for the lectures themselves.
