import React, { ComponentProps } from "react";

import { Button } from "./Button";
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";

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
  },
} as Meta;

const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
);

export const Primary = () => <Button />;

export const Secondary = () => <Button primary={false} />;

export const Large = () => <Button size="large" />;

export const Small = () => <Button size="small" />;

export const Example = () => (
  <Button label="Button" onClick={() => alert("hello")} />
);
