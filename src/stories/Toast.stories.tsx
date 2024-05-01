import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import {
  Toast as ToastComponent,
  ToastProvider as Provider,
} from "@/components/ui/toast";

import * as Toast from "@radix-ui/react-toast";

import { Button } from "@/components/ui/button";

const meta = {
  title: "Library/Toast",
  component: ToastComponent,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof ToastComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {};

export const Example: Story = {
  args: { ...defaultArgs },
  render: function (args) {
    const [open, setOpen] = React.useState(false);
    const eventDateRef = React.useRef(new Date());
    const timerRef = React.useRef(0);

    React.useEffect(() => {
      return () => clearTimeout(timerRef.current);
    }, []);

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "400px",
          height: "400px",
        }}
      >
        <Toast.Provider swipeDirection="right">
          <Button
            format="pill"
            onClick={() => {
              setOpen(false);
              window.clearTimeout(timerRef.current);
              timerRef.current = window.setTimeout(() => {
                setOpen(true);
              }, 100);
            }}
          >
            Add to calendar
          </Button>

          <Toast.Root
            className="bg-white rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
            open={open}
            onOpenChange={setOpen}
          >
            <Toast.Title className="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]">
              Scheduled: Catch up
            </Toast.Title>
            <Toast.Description asChild>
              <time
                className="[grid-area:_description] m-0 text-slate11 text-[13px] leading-[1.3]"
                dateTime={eventDateRef.current.toISOString()}
              ></time>
            </Toast.Description>
            <Toast.Action
              className="[grid-area:_action]"
              asChild
              altText="Goto schedule to undo"
            >
              <button className="inline-flex items-center justify-center rounded font-medium text-xs px-[10px] leading-[25px] h-[25px] bg-green2 text-green11 shadow-[inset_0_0_0_1px] shadow-green7 hover:shadow-[inset_0_0_0_1px] hover:shadow-green8 focus:shadow-[0_0_0_2px] focus:shadow-green8">
                Undo
              </button>
            </Toast.Action>
          </Toast.Root>
          <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
        </Toast.Provider>
      </div>
    );
  },
};
