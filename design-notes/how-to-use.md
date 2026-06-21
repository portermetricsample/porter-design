# Porter Metrics design system — how to build with it

Koho-inspired brand kit: massive Inter typography is the protagonist, solid
brand backgrounds, zero decoration (no drop shadows, no decorative pills, no
random icons). Five components: `Button`, `Card`, `Badge`, `Eyebrow`, `Heading`.

## Setup

Import the stylesheet once at the app root, then use the components:

```tsx
import "@porter/design-system/styles.css";
import { Button, Card, Badge, Eyebrow, Heading } from "@porter/design-system";
```

No provider or theme wrapper is needed — styling is plain CSS reachable from
`styles.css`. Without the stylesheet import, components render unstyled.

## Styling idiom

**Style components through their props, not utility classes.** This DS has no
Tailwind/utility vocabulary. Each component exposes brand choices as props:

- `Button`  — `variant` (`purple` primary · `pink` · `aqua` · `yellow` · `dark` · `outline`), `size` (`sm` · `md` · `lg`)
- `Card`    — `background` (`white` · `cream` · `lavender` · `dark` · `purple`), `bordered`
- `Badge`   — `variant` (`purple` · `pink` · `aqua` · `yellow` · `dark`)
- `Heading` — `level` (`display` · `h1` · `h2`); wrap a word in `<strong>` to tint it purple
- `Eyebrow` — mono uppercase label, no props

**For your own layout glue** (grids, spacing, custom surfaces), use the brand
CSS custom properties directly — never hard-code hexes:

`--porter-purple #6701e6` (primary) · `--porter-dark #1a0340` · `--porter-pink`
· `--porter-aqua` · `--porter-yellow` · `--porter-cream` · `--porter-muted`
(secondary text). Scales exist too: `--purple-100..950`, `--pink-100..700`,
`--aqua-100..700`. Spacing: `--space-1..30` (4–120px). Radius: `--radius-sm/md/lg/card/pill`.

## Typography

Porter brand uses ONE pairing: `--font-display` (Inter, headlines/body)
+ `--font-alt` (IBM Plex Mono, eyebrows/tags/meta). That's it for product,
slides, dashboards, and landings.

> **Note (2026-06-21):** the former separate `report-kit` module was retired (archived
> outside the repos). Client reports now use the official `porter-design` tokens — which
> already pair Bricolage Grotesque + Hanken Grotesk — via `dist/porter-tokens.css` +
> `data-theme`. There is no longer a separate report type system.

## Rules (from the Porter principles)

- Headlines are huge and tight (`Heading level="display"` for covers). Use the
  two-line stacked pattern: a normal word on top, the key word huge below with
  `<strong>`.
- UPPERCASE on covers and statements; eyebrows/badges are always mono uppercase.
- Solid backgrounds only — never gradients. Max 3 colors per surface.
- No box shadows, no decorative badges, no emojis in final pieces.

## Where the truth lives

Full token list and component CSS: `_ds/<folder>/styles.css` (and its
`@import` of `_ds_bundle.css`). Per-component API + usage: each
`<Name>.prompt.md` and `<Name>.d.ts`.

## Idiomatic snippet

```tsx
<Card background="cream">
  <Badge variant="aqua">New</Badge>
  <Heading level="h2" style={{ marginTop: 18 }}>
    Report <strong>faster</strong>
  </Heading>
  <p style={{ fontFamily: "var(--font-display)", color: "var(--porter-muted)" }}>
    Pull every marketing metric into one on-brand dashboard.
  </p>
  <Button variant="purple" size="lg">Start free trial</Button>
</Card>
```
