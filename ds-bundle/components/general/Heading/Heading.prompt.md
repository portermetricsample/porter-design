Heading from @porter/design-system. Use via `window.PorterDS.Heading` (bundle loaded from the root `_ds_bundle.js`).

Porter display headline — massive Inter, tight tracking, the protagonist of
any layout. Follow the two-line stacked pattern (normal word on top, key
word huge below) and use `<strong>{word}</strong>` to accent in purple.

## Props

```ts
interface HeadingProps {
  /** Type scale. `display` is for covers, `h1`/`h2` for sections. */
  level?: "display" | "h1" | "h2";
  /** Optional element override. Defaults to `h1` for `display`/`h1`, `h2` otherwise. Wrap a word in `<strong>` to tint it Por */
  as?: "h1" | "h2" | "h3";
  children?: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}
```

## Examples

### Levels

```jsx
() => (
  <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
    <Heading level="display">Report</Heading>
    <Heading level="h1">Dashboards that ship</Heading>
    <Heading level="h2">Connect your data in minutes</Heading>
  </div>
)
```

### StackedAccent

```jsx
() => (
  <Heading level="display">
    Report<br />
    <strong>faster</strong>
  </Heading>
)
```
