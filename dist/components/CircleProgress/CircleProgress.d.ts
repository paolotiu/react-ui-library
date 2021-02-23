import React, { FC } from "react";
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
export declare const CircleProgress: FC<Props>;
