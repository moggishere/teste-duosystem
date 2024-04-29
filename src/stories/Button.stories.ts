import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button as ButtonComponent, buttonVariants } from "@/components/ui/button";

const meta = {
  title: "Example/Button",
  component: ButtonComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  
} satisfies Meta<typeof ButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;