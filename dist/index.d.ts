import * as React from 'react';

type ButtonVariant = "purple" | "pink" | "aqua" | "yellow" | "dark" | "outline";
type ButtonSize = "sm" | "md" | "lg";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Color treatment. `purple` is the primary CTA. */
    variant?: ButtonVariant;
    /** Padding/type scale. */
    size?: ButtonSize;
    /** Button label / contents. */
    children?: React.ReactNode;
}
/**
 * Porter primary action button. Use `variant="purple"` for the main CTA on a
 * surface; `outline` for secondary actions. Never put more than one primary
 * purple button in a single decision area.
 */
declare function Button({ variant, size, className, children, ...rest }: ButtonProps): React.JSX.Element;

type CardBackground = "white" | "cream" | "lavender" | "dark" | "purple";
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Surface background. Stays within the Porter background family. */
    background?: CardBackground;
    /** Add a hairline border (only meaningful on light surfaces). */
    bordered?: boolean;
    children?: React.ReactNode;
}
/**
 * Porter content surface. A plain rounded container with generous padding —
 * no drop shadows, no decorative borders. Pick a background from the brand
 * family; pair dark/purple surfaces with light text content.
 */
declare function Card({ background, bordered, className, children, ...rest }: CardProps): React.JSX.Element;

type BadgeVariant = "purple" | "pink" | "aqua" | "yellow" | "dark";
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** Color treatment. */
    variant?: BadgeVariant;
    children?: React.ReactNode;
}
/**
 * Porter pill label — mono, uppercase, tracked. Use for functional tags
 * (status, category, "new"), never as decoration. Keep the text to 1–3 words.
 */
declare function Badge({ variant, className, children, ...rest }: BadgeProps): React.JSX.Element;

interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
    children?: React.ReactNode;
}
/**
 * Small mono, uppercase, tracked label that sits above a headline (the Koho
 * "eyebrow"). Use it to name the section/topic in 1–4 words; the headline
 * carries the message.
 */
declare function Eyebrow({ className, children, ...rest }: EyebrowProps): React.JSX.Element;

type HeadingLevel = "display" | "h1" | "h2";
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    /** Type scale. `display` is for covers, `h1`/`h2` for sections. */
    level?: HeadingLevel;
    /**
     * Optional element override. Defaults to `h1` for `display`/`h1`, `h2`
     * otherwise. Wrap a word in `<strong>` to tint it Porter purple.
     */
    as?: "h1" | "h2" | "h3";
    children?: React.ReactNode;
}
/**
 * Porter display headline — massive Inter, tight tracking, the protagonist of
 * any layout. Follow the two-line stacked pattern (normal word on top, key
 * word huge below) and use `<strong>{word}</strong>` to accent in purple.
 */
declare function Heading({ level, as, className, children, ...rest }: HeadingProps): React.JSX.Element;

export { Badge, type BadgeProps, type BadgeVariant, Button, type ButtonProps, type ButtonSize, type ButtonVariant, Card, type CardBackground, type CardProps, Eyebrow, type EyebrowProps, Heading, type HeadingLevel, type HeadingProps };
