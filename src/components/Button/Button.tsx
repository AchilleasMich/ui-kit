import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { Button as InternalButton } from "@headlessui/react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-yellow-400 text-black hover:bg-yellow-500",
        tertiary: "bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50",
      },
      size: {
        xs: "h-6 px-2 text-xs",
        sm: "h-8 px-3",
        md: "h-10 px-4",
        lg: "h-12 px-6",
        xl: "h-14 px-8",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      shadow: {
        none: "",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
      },
      // New options
      width: {
        auto: "w-auto",
        full: "w-full",
        fit: "w-fit",
      },
      icon: {
        none: "",
        left: "flex-row",
        right: "flex-row-reverse",
        only: "justify-center p-0 w-10 h-10",
      },
      uppercase: {
        true: "uppercase",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      rounded: "md",
      shadow: "none",
      width: "auto",
      icon: "none",
      uppercase: false,
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  rounded,
  shadow,
  width,
  icon,
  uppercase,
  children,
  ...rest
}) => {
  return (
    <InternalButton
      className={cn(
        buttonVariants({ variant, size, rounded, shadow, width, icon, uppercase }),
        className,
      )}
      {...rest}
    >
      {children}
    </InternalButton>
  );
};
