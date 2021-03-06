import React, { useEffect, useState } from "react";

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
    backgroundColor: {
      control: "color",
      table: {
        category: "color",
      },
    },
    textColor: {
      control: "color",
      table: {
        category: "color",
      },
    },
    progressBarColor: {
      control: "color",
      table: {
        category: "color",
      },
    },
    completedBackgroundColor: {
      control: "color",
      table: {
        category: "color",
      },
    },
    completedProgressBarColor: {
      control: "color",
      table: {
        category: "color",
      },
    },
    label: { control: "text" },
    progressBarWidth: {
      control: {
        type: "range",
        max: 30,
      },
    },
    progressBarStyle: {
      control: {
        type: "select",
        options: ["round", "butt", "square"],
        default: "round",
      },
    },

    progressBarTransitionDuration: {
      table: {
        category: "animation",
      },
      control: {
        type: "number",
        step: 100,
      },
    },
    progressBarTransitionEase: {
      table: {
        category: "animation",
      },
    },
    progressBarColorTransitionDuration: {
      table: {
        category: "animation",
      },
      control: {
        type: "number",
        step: 100,
      },
    },
    progressBarColorTransitionEase: {
      table: {
        category: "animation",
      },
    },

    className: {
      table: {
        category: "misc",
      },
      control: {
        disable: true,
      },
    },
    style: {
      table: {
        category: "misc",
      },
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
  <div>
    <CircleProgress {...args} />
  </div>
);

export const WithLabel = (args: Props) => (
  <div style={{ textAlign: "center" }}>
    <CircleProgress {...args} style={{ fontFamily: "monospace" }} />
    <div>Uploading...</div>
  </div>
);

export const Anim = (args: Props) => {
  const [progress, setProgress] = useState(args.progress);
  useEffect(() => {
    setProgress(args.progress);
  }, [args.progress]);
  return (
    <div>
      <CircleProgress
        {...args}
        progress={progress}
        completedProgressBarColor={"#71d449"}
      />
      <div style={{ display: "grid", maxWidth: "100px", gap: "1em" }}>
        <button onClick={() => setProgress(100)}>100%</button>
        <button onClick={() => setProgress(50)}>50%</button>
        <button onClick={() => setProgress(0)}>0%</button>
      </div>
    </div>
  );
};
export const StepProgress = (args: Props) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
    }}
  >
    <CircleProgress progress={80} />
    <CircleProgress progress={80} />
    <CircleProgress progress={80} />
  </div>
);
