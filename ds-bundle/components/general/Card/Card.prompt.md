Card from @porter/design-system. Use via `window.PorterDS.Card` (bundle loaded from the root `_ds_bundle.js`).

Porter content surface. A plain rounded container with generous padding —
no drop shadows, no decorative borders. Pick a background from the brand
family; pair dark/purple surfaces with light text content.

## Props

```ts
interface CardProps {
  /** Surface background. Stays within the Porter background family. */
  background?: "purple" | "dark" | "white" | "cream" | "lavender";
  /** Add a hairline border (only meaningful on light surfaces). */
  bordered?: boolean;
  children?: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}
```

## Examples

### Backgrounds

```jsx
() => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 720 }}>
    <Card background="white" bordered>
      <Eyebrow>White</Eyebrow>
      <Heading level="h2" style={{ marginTop: 12, fontSize: 28 }}>Default surface</Heading>
    </Card>
    <Card background="cream">
      <Eyebrow>Cream</Eyebrow>
      <Heading level="h2" style={{ marginTop: 12, fontSize: 28 }}>Soft paper</Heading>
    </Card>
    <Card background="lavender">
      <Eyebrow>Lavender</Eyebrow>
      <Heading level="h2" style={{ marginTop: 12, fontSize: 28 }}>Pastel accent</Heading>
    </Card>
    <Card background="dark">
      <Eyebrow style={{ color: "#fbbf24" }}>Dark</Eyebrow>
      <Heading level="h2" style={{ marginTop: 12, fontSize: 28, color: "#fff" }}>Signature dark</Heading>
    </Card>
  </div>
)
```

### Composed

```jsx
() => (
  <Card background="cream" style={{ maxWidth: 420 }}>
    <Badge variant="aqua">New</Badge>
    <Heading level="h2" style={{ marginTop: 18, fontSize: 32 }}>
      Report <strong>faster</strong>
    </Heading>
    <p style={{ fontFamily: "var(--font-display)", color: "var(--porter-muted)", margin: "16px 0 24px", lineHeight: 1.5 }}>
      Pull every marketing metric into one on-brand dashboard.
    </p>
    <Button variant="purple">Start free trial</Button>
  </Card>
)
```
