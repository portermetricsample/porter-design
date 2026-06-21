import * as React from 'react';

/**
 * Card — from @porter/design-system@0.1.0.
 */
export interface CardProps {
  /** Surface background. Stays within the Porter background family. */
  background?: "purple" | "dark" | "white" | "cream" | "lavender";
  /** Add a hairline border (only meaningful on light surfaces). */
  bordered?: boolean;
  children?: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export declare const Card: React.ComponentType<CardProps>;
