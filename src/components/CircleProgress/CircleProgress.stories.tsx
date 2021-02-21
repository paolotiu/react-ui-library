import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";
import { CircleProgress, Props } from "./CircleProgress";

export default {
  title: "Example/CircleProgress",
  component: CircleProgress,

  argTypes: {
    progress: {
      control: {
        type: "range",
        options: {
          min: 0,
          max: 100,
        },
      },
    },
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
    progressBarColor: {
      control: "color",
    },
    completedBackgroundColor: { control: "color" },
    completedProgressBarColor: { control: "color" },
    label: { control: "text" },
    progressBarStyle: {
      control: {
        type: "select",
        options: ["round", "butt", "square"],
        default: "round",
      },
    },

    className: {
      control: {
        disable: true,
      },
    },
    style: {
      control: {
        disable: true,
      },
    },
  },
  args: {
    progress: 0,
  },
} as Meta;

export const Default = (args: Props) => (
  <div
    style={{
      background: "#d1d1d1",
    }}
  >
    <CircleProgress {...args} />
  </div>
);

export const WithLabel = (args: Props) => (
  <div style={{ textAlign: "center", background: "#c4c4c4" }}>
    <CircleProgress {...args} style={{ fontFamily: "monospace" }} />
    <span>Uploading...</span>
  </div>
);
