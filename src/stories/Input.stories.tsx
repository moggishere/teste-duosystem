import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Input as InputComponent } from "@/components/ui/input";

const meta = {
  title: "Library/Input",
  component: InputComponent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      options: ["default", "rounded", "pill"],
      control: { type: "radio" },
      description: "Controle do formato dos inputs",
      defaultValue: "default",
      table: {
        type: { summary: "'default' | 'rounded' | 'pill'" },
      },
    },
    customColor: {
      control: { type: "color" },
      description: "Inserção de cor custom do componente Input quando está focado",
      defaultValue: "#eff5bf",
      table: {
        type: { summary: "string" },
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  variant: "default",
};

export const Default: Story = {
  args: { ...defaultArgs, variant: "default" },
  render: (args) => <InputComponent {...args} />,
};

export const Rounded: Story = {
  args: { ...defaultArgs, variant: "rounded" },
  render: (args) => <InputComponent {...args} />,
};

export const Pill: Story = {
  args: { ...defaultArgs, variant: "pill" },
  render: (args) => <InputComponent {...args} />,
};

export const CustomColor: Story = {
  args: { ...defaultArgs, variant: "pill" },
  render: (args) => <InputComponent {...args} />,
};
