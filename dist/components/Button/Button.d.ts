import { FC, MouseEvent } from "react";
export interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string | null;
    size?: "small" | "medium" | "large";
    label?: string;
    /** Function to run when the button is clicked */
    onClick?: (event: MouseEvent) => void;
}
/**
 * Primary UI component for user interaction
 */
export declare const Button: FC<ButtonProps>;
