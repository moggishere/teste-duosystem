import React from "react";
import * as T from "@radix-ui/react-toggle";

import { Check } from "lucide-react";

export interface ToggleProps extends T.PrimitiveButtonProps {
  pressed?: boolean;
  onPressedChange?: () => void;
}

const Toggle: React.FC<ToggleProps> = (
  { pressed = false, onPressedChange },
  ...props
) => (
  <T.Root
    className="flex w-5 h-5 bg-[#FFC29F] border-black border-2 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded data-[state=on]:bg-[#FF965B] transition"
    aria-label="Toggle italic"
    pressed={pressed}
    onPressedChange={onPressedChange}
    {...props}
  >
    {pressed && <Check size={16} />}
  </T.Root>
);

export { Toggle };
