import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import {
  Button as ButtonComponent,
  buttonVariants,
} from "@/components/ui/button";

import { Glasses } from "lucide-react";

const meta = {
  title: "Library/Button",
  component: ButtonComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    variant: "default",
    format: "default",
    size: "default",
  },
  argTypes: {
    variant: {
      options: ["default", "destructive", "ghost", "link"],
      control: { type: "radio" },
      description: "Controle de variant",
      defaultValue: "'default'",
      table: {
        type: { summary: "'default' | 'destructive' " },
      },
    },
    format: {
      options: ["default", "rounded", "pill"],
      control: { type: "radio" },
      description: "Controle do formato dos inputs",
      defaultValue: "'default'",
      table: {
        type: { summary: "'default' | 'rounded' | 'pill'" },
      },
    },
    size: {
      options: ["default", "sm", "lg", "icon"],
      control: { type: "radio" },
      description: "Controle do formato dos inputs",
      defaultValue: "'default'",
      table: {
        type: { summary: "'default' | 'sm' | 'lg' | 'icon'" },
      },
    },
    asChild: {
      control: { type: "boolean" },
      description:
        "Habilita composabilidade, para mais informações consultar [Radix docs](https://www.radix-ui.com/primitives/docs/guides/composition)",
      defaultValue: "false",
      table: {
        type: { summary: "boolean" },
      },
    },
  },
} satisfies Meta<typeof ButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: function Component(args) {
    return <ButtonComponent {...args}>Clica eu</ButtonComponent>;
  },
};

export const Destructive: Story = {
  args: { variant: "destructive", format: "rounded" },
  render: function Component(args) {
    return <ButtonComponent {...args}>Button destructive</ButtonComponent>;
  },
};

export const Ghost: Story = {
  args: { variant: "ghost", format: "pill" },
  render: function Component(args) {
    return <ButtonComponent {...args}>Button ghost</ButtonComponent>;
  },
};

export const Link: Story = {
  args: { variant: "link", format: "pill", asChild: true },
  render: function Component(args) {
    return (
      <ButtonComponent {...args}>
        <a href="javascript:window.location.reload(true)">
          Button link reload page
        </a>
      </ButtonComponent>
    );
  },
};

export const IconButton: Story = {
  args: { size: "icon", format: "pill" },
  render: function Component(args) {
    return (
      <ButtonComponent {...args}>
        <Glasses size={16} />
      </ButtonComponent>
    );
  },
};

export const OnboardingExample: Story = {
  args: { size: "lg", format: "rounded" },
  render: function Component(args) {
    return (
      <ButtonComponent
        {...args}
        className="bg-green-400 hover:bg-green-500 active:bg-green-700 text-white"
      >
        Button customizado
      </ButtonComponent>
    );
  },
  tags: ["ignore"],
};
