Badge from @porter/design-system. Use via `window.PorterDS.Badge` (bundle loaded from the root `_ds_bundle.js`).

Porter pill label — mono, uppercase, tracked. Use for functional tags
(status, category, "new"), never as decoration. Keep the text to 1–3 words.

## Props

```ts
interface BadgeProps {
  /** Color treatment. */
  variant?: "purple" | "pink" | "aqua" | "yellow" | "dark";
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
  <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
    <Badge variant="purple">New</Badge>
    <Badge variant="pink">Beta</Badge>
    <Badge variant="aqua">AI</Badge>
    <Badge variant="yellow">Popular</Badge>
    <Badge variant="dark">Pro</Badge>
  </div>
)
```
