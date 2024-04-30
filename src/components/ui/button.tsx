import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "flex justify-evenly leading-tight space-x-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition",
  {
    variants: {
      variant: {
        default:
          "h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF]",
        destructive:
          "h-12 border-black font-semibold border-2 p-2.5 bg-destructive text-destructive-foreground hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-destructive/70",
        ghost:
          "h-12 border-black border-2 p-2.5 bg-white hover:bg-gray-200 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-yellow-200",
        link: "h-12 border-black text-gray-100 font-semibold border-2 p-2.5 bg-blue-500 hover:bg-blue-400 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] hover:underline",
      },
      format: {
        default: "",
        rounded: " rounded-md",
        pill: " rounded-full",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 leading-tight text-xs",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10 leading-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      format: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, format, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, format, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
