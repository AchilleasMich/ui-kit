import { ClassProp } from "class-variance-authority/types";
import React from "react";
import { VariantProps } from "class-variance-authority";

export declare const Button: React.FC<ButtonProps>;

export declare interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

declare const buttonVariants: (
  props?:
    | ({
        variant?: "primary" | "secondary" | "tertiary" | null | undefined;
        size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
        rounded?: "sm" | "md" | "lg" | "none" | "full" | null | undefined;
        shadow?: "sm" | "md" | "lg" | "none" | null | undefined;
        width?: "full" | "auto" | "fit" | null | undefined;
        icon?: "none" | "left" | "right" | "only" | null | undefined;
        uppercase?: boolean | null | undefined;
      } & ClassProp)
    | undefined,
) => string;

export {};
