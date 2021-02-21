import React, { FC, useState } from "react";
import styled, { ThemedStyledFunction } from "styled-components";
const Path = styled.path<PathProps>`
  fill: none;
  stroke-linecap: round;
  stroke-width: ${(props) => props.strokeWidth};
  stroke-dasharray: ${(props) => `${props.strokeDasharray}, 251.2`};
  stroke-linecap: ${(props) => props.strokeLinecap || "round"};
  transition: stroke
    ${(props) => props.transitionDuration + " " + props.transitionEase};
`;

interface PathProps {
  transitionDuration: string;
  transitionEase: string;
}
const Wrapper = styled.div<{ complete: boolean }>`
  text-align: center;
  display: inline-block;
  position: relative;
  span {
    font-size: 1.8em;
  }
  circle {
    transition: fill 0.2s ease-in;
  }
  ::after {
    content: "";
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translate(-20%, -50%);

    width: 50px;
    height: 3px;
    background: linear-gradient(to right, red 50%, blue 50%);
    background-position: ${(props) => (props.complete ? "left" : "right")}
      bottom;
    transition: all 2s ease;
    background-size: 200% 100%;
    border-radius: 20px;
  }
`;
export interface Props {
  progress: number;
  backgroundColor?: string;
  completedBackgroundColor?: string;
  progressBarColor?: string;
  completedProgressBarColor?: string;
  /** 
    In ms
  */
  progressBarTransitionDuration?: number;
  progressBarTransitionEase?: string;
  progressBarWidth?: number;
  /**
   Defaults to progress percentage
  */
  label?: string;
  progressBarStyle?: "round" | "butt" | "square";
  textColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const CircleProgress: FC<Props> = ({
  backgroundColor = "#ffffff",
  progressBarColor = "#D7EBFD",
  completedBackgroundColor,
  completedProgressBarColor,
  label,
  progress,
  progressBarStyle = "round",
  progressBarTransitionDuration = 300,
  progressBarTransitionEase = "ease-in",
  progressBarWidth = 3,
  textColor,
  ...props
}) => {
  const [completed, setCompleted] = useState(false);
  return (
    <>
      <Wrapper
        {...props}
        complete={completed}
        onClick={() => setCompleted(!completed)}
      >
        <svg id="svg" viewBox="0 0 100 100" width="100" height="100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill={
              progress === 100
                ? completedBackgroundColor || backgroundColor
                : backgroundColor
            }
          />
          <Path
            transitionDuration={progressBarTransitionDuration + "ms"}
            transitionEase={progressBarTransitionEase}
            strokeWidth={progressBarWidth}
            strokeLinecap={progressBarStyle}
            stroke={
              progress === 100
                ? completedProgressBarColor || progressBarColor
                : progressBarColor
            }
            strokeDasharray={getProgressStrokeValue(progress)}
            d="M50 10
           a 40 40 0 0 1 0 80
           a 40 40 0 0 1 0 -80"
          />
          <text
            x="50%"
            y="50%"
            text-anchor="middle"
            dominantBaseline="central"
            font-size=".8m"
            fontWeight="200"
            fill={textColor}
          >
            {label || progress + "%"}
          </text>
        </svg>
      </Wrapper>
    </>
  );
};

function getProgressStrokeValue(num: number) {
  return ((num - 0) / (100 - 0)) * (251.2 - 0) + 0;
}
