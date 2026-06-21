Button from @porter/design-system. Use via `window.PorterDS.Button` (bundle loaded from the root `_ds_bundle.js`).

Porter primary action button. Use `variant="purple"` for the main CTA on a
surface; `outline` for secondary actions. Never put more than one primary
purple button in a single decision area.

## Props

```ts
interface ButtonProps {
  /** Color treatment. `purple` is the primary CTA. */
  variant?: "purple" | "pink" | "aqua" | "yellow" | "dark" | "outline";
  /** Padding/type scale. */
  size?: "sm" | "md" | "lg";
  /** Button label / contents. */
  children?: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}
```

## Examples

### Variants

```jsx
() => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
    <Button variant="purple">Start free trial</Button>
    <Button variant="pink">Get the report</Button>
    <Button variant="aqua">Connect data</Button>
    <Button variant="yellow">Upgrade plan</Button>
    <Button variant="dark">Book a demo</Button>
    <Button variant="outline">See templates</Button>
  </div>
)
```

### Sizes

```jsx
() => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
    <Button variant="purple" size="sm">Small</Button>
    <Button variant="purple" size="md">Medium</Button>
    <Button variant="purple" size="lg">Large</Button>
  </div>
)
```

### Disabled

```jsx
() => (
  <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
    <Button variant="purple">Enabled</Button>
    <Button variant="purple" disabled>Disabled</Button>
  </div>
)
```
