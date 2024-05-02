import * as React from "react";

import { cn } from "@/lib/utils";

import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "flex w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[color:var(--custom-color)] active:shadow-[2px_2px_0px_rgba(0,0,0,1)] ring-offset-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-2 outline-none disabled:bg-gray-100 disabled:shadow-none disabled:border-gray-400 disabled:text-gray-400 transition",
  {
    variants: {
      variant: {
        default: "",
        pill: "rounded-full",
        rounded: "rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  customColor?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant = "default", className, type, customColor, ...props }, ref) => {
    return (
      <input
        style={
          {
            "--custom-color": customColor ? customColor : "#eff5bf",
          } as React.CSSProperties
        }
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants };
