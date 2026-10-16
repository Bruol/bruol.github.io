---
title: "CesBot / CeMi"
description: "A research assistant for education literature, with citations linked to PDF passages."
category: "Applied AI"
role: "Sole engineer · ETH Chair of Education Systems"
tags: ["Next.js", "Convex", "RAG", "Microsoft Foundry", "Python"]
order: 1
links: []
period: "2025–present"
image: "/projects/cesbot/chat.png"
icon: "/projects/cesbot/icon.png"
imageAlt: "CeMi research chat with source citations"
---

I build and maintain CeMi at ETH’s Chair of Education Systems. It helps researchers and policy makers explore education literature, with citations that open the exact passage in a PDF. The project reached 1,000 users.

![CeMi answering a research question with clickable citations](/projects/cesbot/chat.png)

The pipeline runs from PDF extraction through chunking, embeddings, and Chroma retrieval to a cited answer. Python workers process queued documents with Docling or PyMuPDF. Convex tracks progress and stores page numbers and text locations, so citations survive every step.

Separate search tools handle concepts, exact phrases, authors, and years. Results are reranked using relevance and publication metadata, with a per-document cap to keep one paper from dominating. Next.js provides the interface; Azure / Microsoft Foundry supplies the models.

![A citation opening the source PDF with the relevant passage highlighted](/projects/cesbot/citation.png)

Document processing runs independently of chat requests and can be retried after failures. Retained page locations let users check retrieved evidence in the PDF viewer.
