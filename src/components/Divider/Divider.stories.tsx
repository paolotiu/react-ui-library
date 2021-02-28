import React from "react";
import { Divider, Props } from "./Divider";
import { Meta } from "@storybook/react/types-6-0";

export default {
  title: "Example/Divider",
  component: Divider,
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
    lineColor: { control: "color" },
    lineThickness: { control: "text" },
  },
  args: {
    text: "Hello World",
  },
} as Meta;

export const Default = (args: Props) => <Divider {...args} />;
