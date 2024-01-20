import { Meta, StoryObj } from "@storybook/react";

import { Loader } from "./Loader";

export default {
  component: Loader,
  tags: ["autodocs"],
  argTypes: {
    className: { table: { disable: true } },
  },
  args: {
    size: 36,
  },
} satisfies Meta<typeof Loader>;

type Story = StoryObj<typeof Loader>;

export const Default: Story = {};
