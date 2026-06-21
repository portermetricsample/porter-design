import * as React from 'react';

/**
 * Heading — from @porter/design-system@0.1.0.
 */
export interface HeadingProps {
  /** Type scale. `display` is for covers, `h1`/`h2` for sections. */
  level?: "display" | "h1" | "h2";
  /** Optional element override. Defaults to `h1` for `display`/`h1`, `h2` otherwise. Wrap a word in `<strong>` to tint it Por */
  as?: "h1" | "h2" | "h3";
  children?: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export declare const Heading: React.ComponentType<HeadingProps>;
