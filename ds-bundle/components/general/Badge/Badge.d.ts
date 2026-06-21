import * as React from 'react';

/**
 * Badge — from @porter/design-system@0.1.0.
 */
export interface BadgeProps {
  /** Color treatment. */
  variant?: "purple" | "pink" | "aqua" | "yellow" | "dark";
  children?: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export declare const Badge: React.ComponentType<BadgeProps>;
