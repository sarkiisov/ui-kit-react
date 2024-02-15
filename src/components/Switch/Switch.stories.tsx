import { Meta, StoryObj } from "@storybook/react";

import { Switch } from "./Switch";

export default {
  component: Switch,
  tags: ["autodocs"],
  args: {
    defaultChecked: true,
    children: "Default switch",
  },
} satisfies Meta<typeof Switch>;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {};
