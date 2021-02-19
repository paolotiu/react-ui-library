import React, { ComponentProps, VFC } from "react";

import { Button, ButtonProps } from "./Button";
import { Meta } from "@storybook/react/types-6-0";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },

    primary: { control: "boolean" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    label: { control: "text" },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

export const Primary = (args: ButtonProps) => <Button {...args} />;

export const Secondary = () => <Button primary={false} />;

export const Large = () => <Button size="large" />;

export const Small = () => <Button size="small" />;
