// src/components/Button.tsx
import { jsx } from "react/jsx-runtime";
function Button({
  variant = "purple",
  size = "md",
  className,
  children,
  ...rest
}) {
  const cls = [
    "pds-btn",
    `pds-btn--${variant}`,
    `pds-btn--${size}`,
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx("button", { className: cls, ...rest, children });
}

// src/components/Card.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function Card({
  background = "white",
  bordered = false,
  className,
  children,
  ...rest
}) {
  const cls = [
    "pds-card",
    background !== "white" ? `pds-card--${background}` : "",
    bordered ? "pds-card--bordered" : "",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx2("div", { className: cls, ...rest, children });
}

// src/components/Badge.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function Badge({
  variant = "purple",
  className,
  children,
  ...rest
}) {
  const cls = ["pds-badge", `pds-badge--${variant}`, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx3("span", { className: cls, ...rest, children });
}

// src/components/Eyebrow.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function Eyebrow({ className, children, ...rest }) {
  const cls = ["pds-eyebrow", className].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx4("span", { className: cls, ...rest, children });
}

// src/components/Heading.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
function Heading({
  level = "h1",
  as,
  className,
  children,
  ...rest
}) {
  const Tag = as ?? (level === "h2" ? "h2" : "h1");
  const cls = ["pds-heading", `pds-heading--${level}`, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx5(Tag, { className: cls, ...rest, children });
}
export {
  Badge,
  Button,
  Card,
  Eyebrow,
  Heading
};
