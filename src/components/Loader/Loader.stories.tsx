import { Meta, StoryObj } from "@storybook/react";

import { Loader } from "./Loader";

export default {
  component: Loader,
  tags: ["autodocs"],
  args: {
    size: "xl",
  },
} satisfies Meta<typeof Loader>;

type Story = StoryObj<typeof Loader>;

export const Default: Story = {};
