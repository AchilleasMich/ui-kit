import { ClassProp } from 'class-variance-authority/types';
import { default as default_2 } from 'react';
import { VariantProps } from 'class-variance-authority';

export declare const Button: default_2.FC<ButtonProps>;

export declare interface ButtonProps extends default_2.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
}

declare const buttonVariants: (props?: ({
    variant?: "primary" | "secondary" | "tertiary" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
    rounded?: "sm" | "md" | "lg" | "none" | "full" | null | undefined;
    shadow?: "sm" | "md" | "lg" | "none" | null | undefined;
    width?: "full" | "auto" | "fit" | null | undefined;
    icon?: "none" | "left" | "right" | "only" | null | undefined;
    uppercase?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export { }
