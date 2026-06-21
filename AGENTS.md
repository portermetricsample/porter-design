# AGENTS.md — Porter Metrics Design System

Contract for building reports, dashboards & slides on-brand. **Read this first.**
Every value here is canonical — do not invent colors, fonts, sizes, or spacing.

---

## 1. Non-negotiable rules

- **No gradients.** Solid colors only. Max 3 colors per surface.
- **No drop shadows.** Surfaces use color + a 2px border (or 1px inset hairline) only.
- **No emoji.** Not part of the brand.
- **Typography:** Bricolage Grotesque for display/headings, Hanken Grotesk for body/meta. (Inter/IBM Plex Mono are legacy — do not use for new work.)
- **Theming:** never hard-code a theme hex. Set `data-theme` on a wrapper and paint from the semantic vars in §4. Brand series colors (§5) are the only theme-agnostic hexes you repeat.
- **Stylesheet — two consumption modes:**
  - **(a) Bundle/runtime** (MCP, React surfaces): link `styles.css` (it `@import`s all tokens) and read components from `window.PorterMetricsDesignSystem_101e0b`.
  - **(b) Plain standalone HTML** (a report opened directly in a browser): link **`dist/porter-tokens.css`** — one flattened file, no JS bundle, no `@import` chain. It carries every token + the `.pds-*` classes. **Never hand-transcribe token values into a file** — link this instead (transcription is the #1 drift risk).
- **`data-theme` goes on `html` or `body`** (not an inner wrapper), and `body` must paint the surface: `body{ background:var(--surface-bg); color:var(--text-body); }`. Inner wrappers inherit. (A `data-theme` on a mid-page wrapper leaves `body` unstyled — background falls through to transparent/black.)

## 2. Fonts

```
--font-bricolage: 'Bricolage Grotesque', 'Inter', sans-serif;  /* display, headings, big numbers */
--font-hanken:    'Hanken Grotesk', 'Inter', sans-serif;        /* body, labels, meta, legends */
```
Loaded from Google Fonts in `tokens/typography.css`. Weights: Bricolage 400–800, Hanken 400–700.

## 3. Core brand color tokens (`tokens/colors.css`)

| Token | Hex | Role |
|---|---|---|
| `--porter-purple` | `#6701e6` | primary |
| `--porter-dark` | `#1a0340` | signature dark / primary text |
| `--porter-pink` | `#ec4899` | accent |
| `--porter-yellow`| `#fbbf24` | accent |
| `--porter-aqua` | `#2dd4bf` | accent |
| `--porter-cream` | `#fdf8f0` | soft paper bg |
| `--accent` (lime)| `#cdfb52` | highlight on dark/purple |
| `--accent-deep` | `#9bc400` | highlight on light |

Scales available: `--lime-100..700`, `--purple-100..950`, `--pink-100..700`, `--aqua-100..700`, `--yellow`, `--neutral`. Ink text: `--ink #1a0340`, `--ink-soft #4a4458`, `--ink-mute #8b85a0`.

## 4. The 4 themes (`tokens/themes.css`) — APPLY VIA `data-theme`

```html
<body data-theme="cream">   <!-- light · soft paper (default) -->
<body data-theme="white">   <!-- light · pure white -->
<body data-theme="blue">    <!-- dark · deep indigo -->
<body data-theme="purple">  <!-- dark · deep purple -->
```

**`data-theme` belongs on `html`/`body`** — and `body` must set `background:var(--surface-bg)`. Put it anywhere else and the page background renders unstyled.

Paint everything from these semantic vars (resolve per theme automatically):

| Var | cream | white | blue | purple |
|---|---|---|---|---|
| `--surface-bg` | `#fdf8f0` | `#ffffff` | `#100225` | `#1b0e36` |
| `--surface-card` | `#ffffff` | `#ffffff` | `#1c0942` | `#2a1850` |
| `--card-border` | `#e5e7eb` | `#e5e7eb` | `rgba(167,139,250,.16)` | `#3d2a5e` |
| `--text-title` | `#1a0340` | `#1a0340` | `#ffffff` | `#fff8ec` |
| `--text-body` | `#4a4458` | `#4a4458` | `#d9d2ee` | `#cdbfe8` |
| `--text-muted` | `#8b85a0` | `#8b85a0` | `#a79fce` | `#9c8dc0` |
| `--eyebrow-color`| `#6701e6` | `#6701e6` | `#a78bfa` | `#3fbe86` |
| `--accent-line` | `#6701e6` | `#6701e6` | `#a78bfa` | `#b79cf0` |
| `--grid-line` | `#ece6f5` | `#eef0f3` | `rgba(167,139,250,.16)` | `rgba(183,156,240,.16)` |
| `--highlight-fill`| `#9bc400`| `#9bc400` | `#cdfb52` | `#cdfb52` |

Note: the **purple** theme uses a **green eyebrow** (`#3fbe86`) — that's its signature, not a mistake.

## 5. Brand series colors (theme-agnostic — identical in all themes)

Use for data-series swatches/lines so channels read consistently everywhere:

```
--series-meta:      #6701e6   --series-google:    #2dd4bf
--series-instagram: #ec4899   --series-shopify:   #fbbf24
--series-other:     #1a0340
```

**Secondary chart/table tokens** (defined in `tokens/themes.css`):
- `--area-fill` — fill under a chart line (per-theme).
- `--heat-1..6` — **sequential** purple ramp (low→high). Use ONLY for intensity/volume (heat maps, choropleth) — encodes "how much", no good/bad meaning.
- `--cf-1..5` — **diverging** stoplight ramp (bad→good), anchored to brand status: `--cf-1` cherry (`#ec4899` tint) → `--cf-3` yellow → `--cf-5` green. Use for conditional formatting / performance-vs-benchmark. Keeps "bad = cherry" consistent with delta pills.
- `--delta-up` (per-theme green/aqua) / `--delta-down` (per-theme: `#ec4899` light, `#f472b6` dark) — positive/negative deltas.
- `--tip-bg` / `--tip-text` — chart tooltip surface (white / dark, all themes).
- **`--good` / `--bad`** — MEANING-based status, **decoupled from arrow direction**. Pick the color by what the move *means*, not which way the arrow points: CPA ▼ is `--good` (green), ROAS ▼ is `--bad` (cherry), spend ▲ is neutral. (`--delta-up/-down` follow the arrow; `--good/-bad` follow the meaning — use the latter for cost/efficiency metrics.)
- **`--callout-{info,win,warn,risk}-bg` / `-tx`** — editorial callout tints, **theme-complete** (translucent brand on dark, pastel on light). info=purple, win=green, warn=yellow, risk=cherry. Never hardcode `--purple-100` etc. for callouts.
- **`--cat-1..6`** — categorical sequence for breakdowns that **aren't channels** (device, geo, product line). Saturated, legible on light AND dark. (Channel breakdowns still use the §5 brand series.)
- **`--surface-sunken`** — inset sub-surface one step below the card (scorecard tiles, pull-quote bg, conversion-path stages).

> **Two scales, two jobs — don't mix them.** Sequential (one hue = purple) = magnitude. Diverging (cherry→green) = quality vs target. Using the same palette for both is what causes confusion.

## 6. Spacing, radius, layout (`tokens/spacing.css`)

- Space scale: `--space-1..10` = 4,8,12,16,24,32,48,64,96,128 px.
- Radius: `--radius-sm 10 / md 12 / lg 14 / xl 20 (cards) / 2xl 28 / pill 999 (badges only)`.
- Borders: `--border-width: 2px`. Container `--container-max: 1200px`. Section pad-y 96px.

## 7. Components (`window.PorterMetricsDesignSystem_101e0b`)

`Button`, `Card`, `Badge`, `Eyebrow`, `Heading`. Each has a `.d.ts`, `.jsx`, and a `.prompt.md` with usage. Prefer these over re-implementing.

**Inline-text utilities** (`.pds-*` classes, theme-aware — use inside running copy):
- `.pds-chip` + `--pos` / `--neg` / `--neutral` / `--brand` — metric chips. `pos`/`neg` reuse `--delta-up`/`--delta-down` so good/bad matches table & scorecard deltas.
- `.pds-hl` — highlight a phrase (uses `--highlight-fill`).
- `.pds-u` — emphasis underline (aqua).

**Tooltip** (`.pds-tooltip`, theme-aware via `--tip-*`): hover popover for chart points. Wrap the point in `.pds-hotspot` and nest a tooltip; add `.pds-tooltip--show` to force-display.
```html
<div class="cdot pds-hotspot">
  <div class="pds-tooltip"><span class="pds-tooltip__date">W12 · Mar 24</span><span class="pds-tooltip__val">2,180 conv</span></div>
</div>
```

**More primitives:**
- `.pds-tag` — in-cell chip for tables (campaign names, match types). Same tokens as `.pds-chip--neutral`.
- `.pds-stat-card` — tinted KPI/creative card, theme-aware (`--stat-bg`/`--stat-border`); has presence on light AND dark (no washed pastel).
- `.pds-scorecard` (+ `__label`/`__value`/`__spark`) — fixed scorecard rhythm: label · value · full-width sparkline · delta.

**Chart & table primitives** (framework-free, theme-aware — work via `dist/porter-tokens.css`, no JS). Static scaffold in CSS; per-datum values go inline:
- `.pds-bars` + `.pds-bar` — column chart, fixed 48px bars, centered. Heights inline (`style="height:68%"`); chart height via `--chart-h`.
- `.pds-breakdown` (`__row`/`__track`/`__fill`) — horizontal breakdown bars; fill width inline.
- `.pds-donut` — donut via **`conic-gradient`** set inline (no SVG dasharray math); mask cuts the hole. Segments use §5 series or `--cat-*`.
- `.pds-cf` + `--1..5` — conditional-format (stoplight) cell on the **diverging** `--cf-*` ramp; always dark text (ramp is light on every theme).
- `.pds-funnel` (`__stage`/`__head`/`__name`/`__value`/`__track`/`__fill`/`__rate`) — conversion funnel. **Label + value go ABOVE the bar, never inside it** (`__head` over `__track`); the `__fill` width shows proportion only. Text-in-bar overflows steep ad stages (Imp→Clicks <3%), so `.pds-funnel__bar` is **legacy/back-compat — do not emit for new funnels**. Print step rate between stages with `__rate`.
- **`dist/porter-charts.js`** — framework-free, dependency-free. `data-spark="v,v,…"` / `PorterCharts.sparkline()` draws a **smoothed, area-filled** sparkline (never a raw polyline); **≥5-point guard** — under 5 points it renders nothing and shows the element's `data-spark-fallback` text (a 2-point trend is misleading); the sparkline still gets a hover tooltip (its latest value). `data-series="v,v,…"` / `PorterCharts.timeseries()` draws the smoothed time-series curve + area + dots **with labeled axes (Y = min·mid·max + gridlines, X from `data-series-labels="May 1,May 8,…"`) and a hover tooltip on every point — both ON by default** (opt out only with `data-axes="off"`). Pass `data-unit="$"` (leading) or `data-unit-after="%"`/`"x"` (trailing) for value formatting. Auto-inits + self-rescans on DOM change; paints from `--accent-line`/`--area-fill`/`--surface-card`/`--grid-line`/`--text-muted`/`--tip-*`.

**Geo maps:** the kit ships a **US-states** tile-grid only. For non-US geography (e.g. Canadian provinces) there is **no map primitive yet** — fall back to a horizontal breakdown bar chart (`.pds-breakdown`) by region and add a one-line methodology note. Don't fake a US map for non-US data.

**Chart rules:** chart points must be drawn at the line's exact coordinates (SVG `<circle>` or correctly-computed overlay %) — never eyeballed. Column bars use a fixed width (~48px) **grouped left at a fixed gap** (`.pds-bars` = `width:max-content`) — never `flex:1` (warps widths) and never stretched to fill the card (scatters them). Axis, category & legend labels use **Hanken** (body) — **mono (`--font-alt`) is legacy, reserved for badges/code only; never for data labels.** **Time-series lines use a smoothed curve** (monotone / Catmull-Rom, no overshoot), 2px in `--accent-line`, area under it in `--area-fill`, with a dot at every point — NOT straight polyline segments (reserve straight segments for stepped/discrete data).

**Axes + tooltips are MANDATORY, not optional (common miss — do not skip):** every data chart MUST carry **(a) labeled axes** — a time-series shows a Y value scale (min·mid·max with gridlines) and X labels (`data-series-labels`) so the reader reads approximate values *without* hovering — and **(b) a hover tooltip with the exact value** on each point. Sparklines are the ONLY axis exception (too small) but still get a tooltip. `porter-charts.js` renders all of this by default — **do not strip it.** If you hand-roll a chart in raw SVG instead of using the library, you are still on the hook for the axes and the `.pds-hotspot`/`.pds-tooltip` overlay yourself. A chart with no readable scale and no tooltip is incomplete.

**Data-source identity — default.** Whenever a report names a specific source/channel, show its logo from `assets/connectors/` (Meta, Google Ads, Instagram, Shopify, GSC/Search, GA4, HubSpot, Sheets, WordPress): in the **report header** as a lockup; in **channel breakdowns / pivots** a 16–20px icon before the channel name; for **tool mentions**, the icon inline. Use the color SVG (`*-color.svg`) when present, monochrome otherwise. Non-channel dimensions (device/geo/product) get no logo — use `--cat-1..6` instead.

Example: `Conversions grew <span class="pds-chip pds-chip--pos">▲14%</span> on <span class="pds-hl">flat spend</span>, driven by <span class="pds-u">creative testing</span>.`

## 8. How to build (recipe)

1. Pick a theme → set `data-theme` on the page wrapper.
2. Page bg = `var(--surface-bg)`; cards = `var(--surface-card)` + `1px/2px var(--card-border)`, `--radius-xl`.
3. Eyebrow/label → `--font-bricolage`, uppercase, `--eyebrow-color`. Titles → `--font-bricolage`, `--text-title`. Body/meta → `--font-hanken`, `--text-body`/`--text-muted`.
4. Charts: series use §5 colors; gridlines `--grid-line`; primary line `--accent-line`; positive emphasis `--highlight-fill`.
5. Deltas: positive = aqua/green, negative = `--porter-pink`. No red/green stoplight outside conditional-formatting tables.
6. Data tables: include a **Δ vs prior-period column by default** (delta chips, `.pds-chip--pos/--neg`); name a source/channel → show its logo (above).

## 9. Reference templates — MOVED (2026-06-21)

The report / dashboard / slide templates now live in **`~/porter-reporting/templates/`**
(they are assembly, owned by Reporting — see `porter-reporting/RULES.md`). This repo's
`templates/` keeps only `chart-primitives/` (empty, data-less building blocks). Suffixes on
the moved families: `-type`=cream, `-white`=white, `-type-dark`/`-azul`=blue, `-morado*`=purple.

## 10. Number formatting

- **Big tiles / KPI values:** abbreviate — `$158.9K`, `1.2M`, `4.8x`. One decimal max.
- **Tables:** full numbers with thousands separators — `$158,876`, `12,480`. Currency symbol leading.
- **Percentages / deltas:** one decimal — `▲ 14.2%`, `▼ 2.1%`. Ratios as `×` — `5.2x`.
- **Currency label:** when not USD, note it in the source/meta line (e.g. “account currency CAD”); don't mix symbols.
- Be consistent within a surface: a metric abbreviated in a tile is shown in full in the table, never both ways in the same place.

## 11. Filenames

Shipped files use **ASCII-only** names (no `ñ`, accents, or em-dashes that break `unzip`/CI on some platforms). Use `-` as separator.
