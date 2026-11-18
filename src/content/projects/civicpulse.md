---
title: CivicPulse
kind: tech
summary: AI agent that answers residents' questions about Town of Babylon government, citing official documents.
stack: Python, FastAPI, SQLite FTS5, LLM (any OpenAI-compatible provider)
status: pilot, chat frontend in development
repo: https://github.com/ScottSucksAtProgramming/civicpulse
order: 2
---

Local government publishes almost everything, and almost nobody reads it. Agendas, minutes, the town code and hours of meeting video are public, but they're scattered across sites and written in legal language. CivicPulse lets a Town of Babylon resident ask a plain question and get a plain answer, with a numbered citation for every claim.

It answers only from retrieved official documents, never from the model's training data. It informs without an agenda: it explains what a vote or an ordinance does, not how anyone should feel about it.

**How it works**

- Nightly scrapers pull the town website, board agendas and minutes, the town code and YouTube meeting transcripts.
- Each document is chunked into Markdown with metadata (source, type, date). No vector database.
- On each question, the model extracts filters like date range and document type, BM25 search over SQLite FTS5 finds candidate chunks, and the model re-ranks them and writes a cited answer.
- It also helps residents draft letters to their representatives.

**Privacy**

No names, emails, IP addresses or device identifiers are stored. Conversation logs go through PII redaction, and only anonymized topics are kept to show which issues residents care about.

The scraper and retrieval pipeline are done. Next come the public chat page, hallucination monitoring and other Long Island towns. CivicPulse is independent and not affiliated with the Town of Babylon.
