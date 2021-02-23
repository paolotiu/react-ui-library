import React, { useEffect, useState } from "react";
import { CircleProgress } from "./CircleProgress";
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
};
export var Default = function (args) { return (<div>
    <CircleProgress {...args}/>
  </div>); };
export var WithLabel = function (args) { return (<div style={{ textAlign: "center" }}>
    <CircleProgress {...args} style={{ fontFamily: "monospace" }}/>
    <div>Uploading...</div>
  </div>); };
export var Anim = function (args) {
    var _a = useState(args.progress), progress = _a[0], setProgress = _a[1];
    useEffect(function () {
        setProgress(args.progress);
    }, [args.progress]);
    return (<div>
      <CircleProgress progress={progress} completedProgressBarColor={"#71d449"}/>
      <div style={{ display: "grid", maxWidth: "100px", gap: "1em" }}>
        <button onClick={function () { return setProgress(100); }}>100%</button>
        <button onClick={function () { return setProgress(50); }}>50%</button>
        <button onClick={function () { return setProgress(0); }}>0%</button>
      </div>
    </div>);
};
export var StepProgress = function (args) { return (<div style={{
    display: "flex",
    alignItems: "center",
}}>
    <CircleProgress progress={80}/>
    <CircleProgress progress={80}/>
    <CircleProgress progress={80}/>
  </div>); };
