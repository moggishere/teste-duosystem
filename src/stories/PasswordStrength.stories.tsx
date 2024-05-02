import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { PasswordStrength as PasswordStrengthComponent } from "@/components/PasswordStrength";

import { Input } from "@/components/ui/input";

const meta = {
  title: "Library/PasswordStrength",
  component: PasswordStrengthComponent,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof PasswordStrengthComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {};

export const Example: Story = {
  args: { ...defaultArgs },
  render: function (args) {
    const [password, setPassword] = React.useState<string>("");

    return (
      <div className="flex justify-center h-40 flex-col items-start gap-2">
        <span>
          <Input
            type={"password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </span>
        <PasswordStrengthComponent input={password} />
      </div>
    );
  },
};
