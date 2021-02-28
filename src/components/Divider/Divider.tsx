import React from "react";
import styled from "styled-components";

const Line = styled.p<{ lineColor: string; lineThickness: string }>`
  width: 100%;
  text-align: center;
  border-bottom: ${(props) => props.lineThickness} solid
    ${(props) => props.lineColor};
  line-height: 0.1em;
  margin: 10px 0 20px;
`;
const Text = styled.span<{ backgroundColor: string; textColor: string }>`
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  padding: 0 10px;
`;

export interface Props {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  lineColor?: string;
  /** 
    Any valid css unit
  */
  lineThickness?: string;
}

export const Divider = ({
  text,
  backgroundColor = "white",
  textColor = "black",
  lineColor = "black",
  lineThickness = "1px",
}: Props) => {
  return (
    <div>
      <Line lineColor={lineColor} lineThickness={lineThickness}>
        <Text backgroundColor={backgroundColor} textColor={textColor}>
          {text}
        </Text>
      </Line>
    </div>
  );
};
