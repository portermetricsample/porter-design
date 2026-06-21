Eyebrow from @porter/design-system. Use via `window.PorterDS.Eyebrow` (bundle loaded from the root `_ds_bundle.js`).

Small mono, uppercase, tracked label that sits above a headline (the Koho
"eyebrow"). Use it to name the section/topic in 1–4 words; the headline
carries the message.

## Props

```ts
interface EyebrowProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}
```

## Examples

### Default

```jsx
() => <Eyebrow>Marketing reports</Eyebrow>
```

### AboveHeadline

```jsx
() => (
  <div>
    <Eyebrow>Looker Studio</Eyebrow>
    <Heading level="h2" style={{ marginTop: 16 }}>
      Your data, <strong>on brand</strong>
    </Heading>
  </div>
)
```
