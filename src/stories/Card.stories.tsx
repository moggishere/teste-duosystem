import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Card as CardComponent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const meta = {
  title: "Library/Card",
  component: CardComponent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      options: ["default"],
      control: { type: "radio" },
      description: "Controle do formato do card",
      defaultValue: "default",
      table: {
        type: { summary: "'default'" },
      },
    },
    customColor: {
      control: { type: "text" },
      description: "Inserção de cor custom do componente Card",
      defaultValue: "#FFFFFF",
      table: {
        type: { summary: "string" },
      },
    },
    children: {
      control: { type: "text" },
      description: "Conteúdo do componente Card",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  variant: "default",
};

export const Default: Story = {
  args: {
    ...defaultArgs,
    variant: "default",
  },
  //   render: (args) => <span>placeholder</span>,
  render: (args) => (
    <CardComponent {...args} className="flex flex-col py-8 px-4">
      <Button>placeholder content</Button>
    </CardComponent>
  ),
};
