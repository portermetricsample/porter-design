# CLAUDE.md — Porter Metrics Design System

This repository **is** the Porter Metrics design system. When building any report,
dashboard, slide, or asset in this repo, follow it exactly — do not invent colors,
fonts, spacing, or components.

## Read these first (canonical, in order)

1. **`AGENTS.md`** — the full contract: hard rules, exact token tables, the 4 themes,
   brand series colors, spacing/radius, components, and a build recipe.
2. **`tokens/*.css`** — the machine source of truth. Import via the single entry
   `styles.css`. Never hard-code a hex that a token already covers.
   - `tokens/colors.css` — brand palette & scales
   - `tokens/themes.css` — the 4 themes (`data-theme="cream|white|blue|purple"`) + all
     semantic vars (`--surface-bg`, `--text-title`, `--grid-line`, `--card-border`,
     `--total-accent`, `--btn-outline`, `--cf-*`, `--heat-*`, …)
   - `tokens/typography.css` — Bricolage (display/headings) + Hanken (body)
   - `tokens/spacing.css` — space/radius scale
   - `tokens/components.css` — `.pds-*` component classes
3. **`templates/`** — keeps only `chart-primitives/` (empty, data-less component blocks).
   The report / dashboard / slide templates were moved to `~/porter-reporting/templates/`
   (2026-06-21) — they are assembly, not appearance. This repo is tokens + empty components.

@AGENTS.md

## The one rule that prevents drift

**Never paint a theme color with a literal hex.** Set `data-theme` on a wrapping element
and read `var(--surface-bg)`, `var(--text-title)`, `var(--card-border)`, etc. The only
literal hexes allowed are the theme-agnostic **brand series** (Meta/Google/Instagram/
Shopify) and the **sequential/diverging scales** (`--heat-*`, `--cf-*`) — and even those
are exposed as tokens. If you reach for a `#hex`, a token almost certainly already exists.

## Dark mode (learned rules — apply to any new surface)

- Separators & gridlines = a **soft tint of the background** (`--grid-line`,
  `--card-border`), never white or light-gray.
- Tinted fills (group cells, chips) = **translucent accent** on dark, not light pastel.
- Text/totals/accents must use theme tokens so they don't disappear on dark
  (`--text-title`, `--total-accent`).
- Secondary/outline buttons use `--btn-outline` (light lavender on dark).

## Lint

`_adherence.oxlintrc.json` encodes the hard rules. Run it in CI; fix violations before merge.
