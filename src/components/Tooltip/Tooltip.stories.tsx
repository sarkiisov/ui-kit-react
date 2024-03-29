import { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from "./Tooltip";
import { Button } from "..";

export default {
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    label: { control: false },
    children: { control: false },
    arrowClassName: { control: false },
  },
  args: {
    initaillyOpenend: true,
    label: "Tooltip",
    children: <Button>Tooltip button</Button>,
  },
} satisfies Meta<typeof Tooltip>;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {};
