# Marketing site — Porter Metrics

High-fidelity recreation of the Porter Metrics marketing landing page, built
entirely from the brand-kit primitives (`Button`, `Card`, `Badge`, `Eyebrow`,
`Heading`) plus token-driven layout glue.

This is the natural surface for the Koho-inspired brand kit: massive Inter
display type, solid color sections, zero decoration. There is no product
(dashboard) code in the source repo — the kit ships marketing/landing
primitives only — so this UI kit recreates the public site, not the app.

## Files
- `index.html` — composes the full page and mounts it. Open this.
- `Nav.jsx` — top nav, typographic `Wordmark`, and `Footer`.
- `Hero.jsx` — cream hero (two-line stacked headline) + dark integrations strip.
- `Sections.jsx` — three feature cards + the purple "big number" statement.
- `Pricing.jsx` — pricing with an interactive **monthly/annual** toggle, and the dark closing CTA.

## Section rhythm
Backgrounds alternate within the approved family — cream → white → dark →
purple → cream → white — never more than 3 colors per surface, never a gradient,
never a drop shadow.

## Interactions
- Pricing **Annual / Monthly** toggle recomputes every plan price live (annual = 20% off).
- All nav links anchor-scroll to their sections.
