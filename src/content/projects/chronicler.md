---
title: Chronicler
kind: tech
summary: AI agent that turns tabletop RPG session recordings into a linked Obsidian campaign vault.
stack: Python, Typer, Textual, ChromaDB, LLM
status: beta, on PyPI
repo: https://github.com/ScottSucksAtProgramming/chronicler
url: https://pypi.org/project/chronicler-ttrpg/
order: 5
---

Every tabletop campaign produces hours of story, and most of it is forgotten by the next session. Chronicler reads session PDFs or transcripts and pulls out the NPCs, locations, factions, plot threads and key events, then writes them into an Obsidian vault as linked notes you can actually use at the table.

**How it works**

- Ingest a session with one command, and Chronicler extracts the entities and events from it.
- A review step lets you check what it wrote, and an ask command lets you question the campaign.
- It handles a backlog of old sessions, a campaign in progress, and imports of existing lore.

It's a local-first command-line tool, installed with `uv tool install chronicler-ttrpg`. It's open source under the AGPL and runs on macOS.
