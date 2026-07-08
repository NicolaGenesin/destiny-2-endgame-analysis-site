# Destiny 2: Endgame Analysis

MVP scaffold for turning a discovered Google resource into its own standalone website project.

## Why this repo exists

This project was created from the Twitch scraper pipeline because the source document showed strong performance signals. For this MVP, the source resource is treated as the canonical truth and the website should translate it **1:1**, while improving usability, navigation, filtering, and context.

## Stack

- Framework: `Next.js App Router`
- Language: `TypeScript`
- Styling: `Tailwind CSS`

## Source document

- Canonical URL: `https://docs.google.com/spreadsheets/d/1JM-0SlxVDAi-C6rGVlLxa-J1WGewEeL8Qvq4htWZHhY`
- Type: `spreadsheets`
- Best score: `93`
- Latest score: `93`
- Last seen in scraper DB: `2025-11-18 02:54:08`

## MVP goals

1. Extract the source content into a structured JSON representation.
2. Preserve the original information architecture and data.
3. Layer in deep-research context as enrichment, not replacement.
4. Publish a user-friendly site around the source resource.

## Repository layout

- `resource-manifest.json` — source metadata and publishing intent
- `data/source-document.json` — normalized source payload placeholder
- `data/research-context.json` — deep-research enrichment placeholder
- `docs/project-brief.md` — product and execution brief
- `src/app/` — Next.js App Router MVP shell
- `scripts/validate_manifest.py` — basic repo validation

## Getting started

```bash
npm install
npm run dev
```
