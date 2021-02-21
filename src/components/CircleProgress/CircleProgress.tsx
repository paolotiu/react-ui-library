import React, { FC } from "react";
import styled, { ThemedStyledFunction } from "styled-components";

const Path = styled.path`
  fill: none;
  stroke-linecap: round;
  stroke-width: ${(props) => props.strokeWidth};
  stroke-dasharray: ${(props) => `${props.strokeDasharray}, 251.2`};
  stroke-linecap: ${(props) => props.strokeLinecap || "round"};
`;

const Wrapper = styled.div`
  text-align: center;

  span {
    font-size: 1.8em;
  }
`;
export interface Props {
  progress: number;
  backgroundColor?: string;
  completedBackgroundColor?: string;
  progressBarColor?: string;
  completedProgressBarColor?: string;
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
  progressBarColor = "#3bb3f8",
  completedBackgroundColor,
  completedProgressBarColor,
  label,
  progress,
  progressBarStyle = "round",
  textColor,
  ...props
}) => {
  return (
    <>
      <Wrapper {...props}>
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
            fill="none"
            strokeWidth={3}
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
