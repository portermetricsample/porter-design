import * as React from 'react';

/**
 * Button — from @porter/design-system@0.1.0.
 * @replaces button
 */
export interface ButtonProps {
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

export declare const Button: React.ComponentType<ButtonProps>;
