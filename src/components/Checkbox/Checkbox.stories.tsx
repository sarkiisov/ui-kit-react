import { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox";

export default {
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    defaultChecked: true,
    children: "Default checkbox",
  },
} satisfies Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};
