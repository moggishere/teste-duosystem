import * as React from "react";

import { cn } from "@/lib/utils";

import { cva, type VariantProps } from "class-variance-authority";

const checkboxVariants = cva(
  "appearance-none outline-none block relative text-center cursor-pointer m-auto w-5 h-5 before:rounded-sm before:block before:absolute before:content-[''] before:bg-[#FFC29F] before:w-5 before:h-5 before:rounded-sm before:border-black before:border-2 before:hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]  after:block after:content-[''] after:absolute after:left-1.5 after:top-0.5 after:w-2 after:h-3 after:border-black after:border-r-2 after:border-b-2 after:origin-center after:rotate-45 after:opacity-0 checked:after:opacity-1 before:checked:bg-[#FF965B]",
  // { "after:opacity-1 before:checked:bg-[#FF965B]": checked },
  // { "after:opacity-0": checked === false },
);

// export interface CheckboxProps
//   extends React.InputHTMLAttributes<HTMLInputElement>,
//     VariantProps<typeof checkboxVariants> {}

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof checkboxVariants> {}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, checked, ...props }, ref) => {
    return (
      <input
        type={"checkbox"}
        className={cn(checkboxVariants({ className }))}
        ref={ref}
        checked={checked}
        {...props}
      />
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox, checkboxVariants };
