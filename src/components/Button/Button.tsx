import React, { FC, MouseEvent, VFC } from "react";
import styled from "styled-components";

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string | null;
  size?: "small" | "medium" | "large";
  label?: string;
  /** Function to run when the button is clicked */
  onClick?: (event: MouseEvent) => void;
}

const StyledButton = styled.button<ButtonProps>((props) => ({
  fontFamily: `"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif`,
  fontWeight: 700,
  border: 0,
  borderRadius: `3em`,
  cursor: `pointer`,
  display: `inline-block`,
  lineHeight: 1,
  color: props.primary ? "white" : "#333",
  backgroundColor:
    props.backgroundColor || props.primary ? "#1ea7fd" : "transparent",
  fontSize: props.size && Sizes[props.size].fontSize,
  boxShadow: props.primary ? "" : "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset",
  padding: props.size && Sizes[props.size].padding,
}));

const Sizes = {
  small: {
    fontSize: "12px",
    padding: "10px 16px",
  },
  medium: {
    fontSize: "14px",
    padding: "11px 20px",
  },
  large: {
    fontSize: "16px",
    padding: "12px 24px",
  },
};
/**
 * Primary UI component for user interaction
 */
export const Button: FC<ButtonProps> = ({
  primary = true,
  backgroundColor = null,
  size = "medium",
  label = "Button",
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      type="button"
      size={size}
      primary={primary}
      backgroundColor={backgroundColor}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      {label}
    </StyledButton>
  );
};
