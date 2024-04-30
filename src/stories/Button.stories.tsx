import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import {
  Button as ButtonComponent,
  buttonVariants,
} from "@/components/ui/button";

const meta = {
  title: "Library/Button",
  component: ButtonComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Component(args) {
    return (
      <ButtonComponent className={buttonVariants()}>Clica eu</ButtonComponent>
    );
  },
};

export const Destructive: Story = {
  render: () => (
    <ButtonComponent variant="destructive">Button destrutivo</ButtonComponent>
  ),
};
