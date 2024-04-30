import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { useArgs } from "@storybook/preview-api";
import { Toggle as ToggleComponent } from "@/components/ui/toggle";

const meta = {
  title: "Library/Toggle",
  component: ToggleComponent,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof ToggleComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  pressed: false,
};

export const Default: Story = {
  args: {
    ...defaultArgs,
  },
  //   render: (args) => <ToggleComponent {...args} />,
  render: function Component(args) {
    const [, setArgs] = useArgs();

    const onValueChange = (value: boolean) => {
      setArgs({ pressed: value });
    };

    return (
      <ToggleComponent
        {...args}
        onPressedChange={() => onValueChange(!args.pressed)}
      />
    );
  },
};
