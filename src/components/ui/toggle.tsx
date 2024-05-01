import React from "react";
import * as T from "@radix-ui/react-toggle";

import { cn } from "@/lib/utils";

import { Check } from "lucide-react";

export interface ToggleProps extends T.PrimitiveButtonProps {
  pressed?: boolean;
  onPressedChange?: () => void;
  customColor?: string;
}

const Toggle: React.FC<ToggleProps> = (
  { pressed = false, onPressedChange, className, customColor },
  ...props
) => (
  <T.Root
    style={
      {
        "--custom-color": customColor ? customColor : "#FFC29F",
      } as React.CSSProperties
    }
    // className={cn(
    //   "relative flex w-5 h-5 bg-[color:var(--custom-color)] border-black border-2 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded data-[state=on]:bg-[#FF965B] transition",
    //   className
    // )}
    className={cn(
      "relative flex w-5 h-5 bg-[color:var(--custom-color)] border-black border-2 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded",
      className
    )}
    aria-label="Toggle italic"
    pressed={pressed}
    onPressedChange={onPressedChange}
    {...props}
  >
    {pressed && (
      <span
        data-identifier="multiply mask"
        className="absolute w-full h-full mix-blend-multiply bg-[#c4a1ff] opacity-60 transition"
      />
    )}
    {pressed && <Check size={16} />}
  </T.Root>
);

export { Toggle };
