---
title: "CesBot / CeMi"
description: "A research assistant that turns education-systems literature into answers with inspectable, page-level evidence."
category: "Applied AI"
role: "Sole engineer · ETH Chair of Education Systems"
tags: ["Next.js", "Convex", "RAG", "Microsoft Foundry", "Python"]
order: 1
links: []
period: "2025–present"
image: "/projects/cesbot/chat.png"
imageAlt: "CeMi research chat with source citations"
---

## Context and responsibility

At ETH’s Chair of Education Systems, I am responsible for the end-to-end development of a research-focused retrieval-augmented generation assistant. The interface is called **CeMi**. It helps researchers and policy makers explore vocational education and training, education–employment linkages, and related CES publications. My CV records a user base of 1,000; this is a project milestone rather than a live usage counter.

The central requirement is traceability: an answer should lead back to a particular passage in a particular document. That affects the ingestion pipeline, retrieval model, database schema, and interface. The application is private, so this write-up shows its interface without linking to the service.

![CeMi answering a question about vocational education and training, with clickable citations](/projects/cesbot/chat.png)

*An answer from the running application. Citations connect claims to retrieved passages; the conversation sidebar is cropped out.*

## From PDFs to searchable evidence

The system separates document processing from interactive chat. Convex tracks document states such as uploaded, queued, processing, processed, and error. A Python service consumes document-processing jobs from an Azure Storage Queue; the processing code supports Docling and PyMuPDF paths. Extracted chunks retain the filename, page number, ordering information, and, where available, bounding boxes and character offsets.

That metadata survives storage and indexing. Convex workflows coordinate ingestion, embedding batches, and synchronization with Chroma. Small chunks can be merged before embedding, while document and chunk records retain their relationship. OpenAlex integration adds bibliographic information such as authors, publication year, citation counts, and source type.

The resulting pipeline is:

1. Register a document and queue its processing.
2. Extract content and retain page and location metadata.
3. Store chunks, merge small fragments where appropriate, and generate embeddings in batches.
4. Synchronize the vector index and expose searchable document metadata.
5. Retrieve evidence for the assistant and resolve citations back to the PDF.

Keeping these stages separate makes processing failures visible and lets ingestion progress independently of a user’s chat request. It also creates a consistency problem between the database and vector index; the code includes backfill and reconciliation operations for that boundary.

## Retrieval and technical decisions

The Next.js interface sits on a Convex backend, with language-model access through Microsoft’s Azure / Foundry infrastructure. The assistant has separate tools for semantic retrieval, exact full-text search, author search, and publication-year search. A question about a concept and a request for an author’s publications need different retrieval behavior, so they do not share a single vector-search interface.

Semantic results are reranked using a weighted combination of semantic relevance, source type, metadata matches, citation-based source quality, and freshness. The implementation caps the number of chunks per document to limit domination by a single paper. These are explicit retrieval heuristics: citation counts and recency can help prioritize evidence, but neither establishes whether a claim is correct.

The agent is instructed to answer from retrieved material and attach chunk references. The interface turns those references into source controls rather than leaving opaque identifiers in the answer.

## Checking an answer against its source

![CeMi source viewer with a retrieved passage highlighted in a PDF](/projects/cesbot/citation.png)

*Opening a citation shows the source PDF and highlights the relevant passage.*

The PDF viewer is a substantial part of the product. Retaining location metadata during extraction makes it possible to connect a sentence in the response to a visible region on a page. Users can inspect the surrounding text instead of trusting a generated summary on its own.

Saved conversations, authentication, feedback controls, and source-score inspection support the wider workflow. They also make this an application with persistent state and operational requirements, beyond the initial retrieval experiment.

## Scope and limitations

Retrieval quality sets an upper bound on answer quality. An incomplete corpus, extraction errors, or ranking mistakes can leave the model without the right evidence. Citations make those failures easier to inspect; they do not eliminate them. This project brings together document processing, asynchronous workflows, retrieval design, and a research interface in one maintained system.
