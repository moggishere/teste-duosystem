import React, { forwardRef } from "react";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva(
  "min-w-80 h-full border-black border-2 rounded-md bg-[color:var(--custom-color)]",
  {
    variants: {
      variant: {
        default: "",
        hover: "hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CardProps
  extends VariantProps<typeof cardVariants>,
    React.InputHTMLAttributes<HTMLSpanElement> {
  customColor?: string;
}

const Card: React.FC<CardProps> = (
  { variant = "default", className, children, customColor },
  props
) => {
  return (
    <span
      style={{ "--custom-color": customColor ? customColor : "#FFFFFF" }}
      className={cn(cardVariants({ variant, className }))}
      {...props}
    >
      {children}
    </span>
  );
};

export { Card, cardVariants };
