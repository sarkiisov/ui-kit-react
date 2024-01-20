import { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

export default {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    loader: { control: false },
    icon: { control: false },
  },
  args: {
    children: "Button",
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};
