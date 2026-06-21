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
`--aqua-100..700`. Fonts: `--font-display` (Inter, headlines/body) and
`--font-alt` (IBM Plex Mono, eyebrows/tags/meta).

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

# PorterDS (@porter/design-system@0.1.0)

This design system is the published @porter/design-system React library, bundled as a single
browser global. All 5 components are the real upstream code.

## Where things are

- `_ds_bundle.js` — the whole-DS bundle at the project root; loads every component to `window.PorterDS`. First line is a `/* @ds-bundle: … */` metadata header.
- `styles.css` — the single stylesheet entry: it `@import`s the tokens, fonts, and component styles (`_ds_bundle.css`). Link this one file.
- `components/<group>/<Name>/<Name>.prompt.md` (example JSX + variants), `<Name>.d.ts` (types), `<Name>.html` (variant grid).
- `tokens/*.css` — CSS custom properties, names verbatim from upstream.
- `fonts/` — `@font-face` files + `fonts.css` (when the package ships fonts).

For a specific component, `read_file("components/<group>/<Name>/<Name>.prompt.md")`.

## Loading

Add these two lines to your page once (React must be on the page first):

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```

Components are then available at `window.PorterDS.*`. Mount into a dedicated child node (e.g. `<div id="ds-root">`), not the host page's own React root, so the two trees don't collide:

```jsx
const { Badge } = window.PorterDS;
ReactDOM.createRoot(document.getElementById('ds-root')).render(<Badge />);
```

## Tokens

34 CSS custom properties from @porter/design-system. Names are
preserved verbatim from upstream. They are declared inside `_ds_bundle.css` (this DS ships one compiled stylesheet rather than separate token files).

- **typography** (2): `--font-display`, `--font-alt`
- **other** (32): `--porter-purple`, `--porter-dark`, `--porter-pink`, …

## Components

### general
- `Badge` — Porter pill label  mono, uppercase, tracked. Use for functional tags
- `Button` — Porter primary action button. Use variantpurple for the main CTA on a
- `Card` — Porter content surface. A plain rounded container with generous padding 
- `Eyebrow` — Small mono, uppercase, tracked label that sits above a headline (the Koho
- `Heading` — Porter display headline  massive Inter, tight tracking, the protagonist of
