import React, { FC, useState } from "react";
import styled, { ThemedStyledFunction } from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  display: inline-block;
  position: relative;
  span {
    font-size: 1.8em;
  }
  circle {
    transition: fill 0.2s ease-in;
  }
  z-index: 1;
`;

interface PathProps {
  transitionDuration: string;
  transitionEase: string;
}
const Path = styled.path<PathProps>`
  fill: none;
  stroke-linecap: round;
  stroke-width: ${(props) => props.strokeWidth};
  stroke-dasharray: ${(props) => `${props.strokeDasharray}, 251.2`};
  stroke-linecap: ${(props) => props.strokeLinecap || "round"};
  transition: stroke
    ${(props) => props.transitionDuration + " " + props.transitionEase};
`;

interface StepMarkerProps {
  completed: boolean;
  duration: number;
  delay: number;
}

const StepMarker = styled.div<StepMarkerProps>`
  ::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(13%, -50%);
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, red 50%, blue 50%);
    background-position: ${(props) => (props.completed ? "left" : "right")}
      bottom;
    transition: all ${(props) => props.duration + "ms"} ease
      ${(props) => props.delay + "ms"};
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
  /** 
    In ms
  */
  stepDuration?: number;
  stepDelay?: number;
  withStep?: boolean;
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
  stepDuration = 500,
  stepDelay = 200,
  withStep = false,
  ...props
}) => {
  return (
    <>
      <Wrapper {...props} id="__circle_progress">
        {withStep && (
          <StepMarker
            completed={progress === 100}
            duration={stepDuration}
            delay={stepDelay}
          />
        )}
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
          <path
            stroke={"gray"}
            opacity={0.2}
            fill="none"
            strokeWidth={progressBarWidth - 1}
            d="M50 10
              a 40 40 0 0 1 0 80
              a 40 40 0 0 1 0 -80"
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
            textAnchor="middle"
            dominantBaseline="central"
            fontSize=".8m"
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
