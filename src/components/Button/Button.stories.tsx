import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    onClick: { action: "clicked" },
    disabled: { control: "boolean" },
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    rounded: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
    shadow: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
    },
    width: {
      control: "select",
      options: ["auto", "full", "fit"],
    },
    icon: {
      control: "select",
      options: ["none", "left", "right", "only"],
    },
    uppercase: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
    disabled: false,
  },
};

export const Tertiary: Story = {
  args: {
    children: "Tertiary Button",
    variant: "tertiary",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    variant: "primary",
    disabled: true,
  },
};

// Size variants
export const ExtraSmall: Story = {
  args: {
    children: "XS Button",
    size: "xs",
  },
};

export const Small: Story = {
  args: {
    children: "Small Button",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    children: "Medium Button",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    size: "lg",
  },
};

export const ExtraLarge: Story = {
  args: {
    children: "XL Button",
    size: "xl",
  },
};

// Rounded variants
export const RoundedNone: Story = {
  args: {
    children: "No Rounded",
    rounded: "none",
  },
};

export const RoundedFull: Story = {
  args: {
    children: "Fully Rounded",
    rounded: "full",
  },
};

// Shadow variants
export const ShadowSmall: Story = {
  args: {
    children: "Small Shadow",
    shadow: "sm",
  },
};

export const ShadowLarge: Story = {
  args: {
    children: "Large Shadow",
    shadow: "lg",
  },
};

// Width variants
export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    width: "full",
  },
};

export const FitContent: Story = {
  args: {
    children: "Fit Width",
    width: "fit",
  },
};

// Icon variants
export const IconLeft: Story = {
  args: {
    children: <>📁 With Left Icon</>,
    icon: "left",
  },
};

export const IconRight: Story = {
  args: {
    children: <>With Right Icon 🔍</>,
    icon: "right",
  },
};

export const IconOnly: Story = {
  args: {
    children: <>🔔</>,
    icon: "only",
  },
};

// Text transform
export const UppercaseText: Story = {
  args: {
    children: "Uppercase Text",
    uppercase: true,
  },
};

// Combined example
export const CustomExample: Story = {
  args: {
    children: "Custom Button",
    variant: "secondary",
    size: "lg",
    rounded: "full",
    shadow: "md",
    uppercase: true,
  },
};

// Combined example
export const Example: Story = {
  args: {
    children: "Custom Button",
    variant: "secondary",
    size: "lg",
    rounded: "full",
    shadow: "md",
    uppercase: true,
  },
};
