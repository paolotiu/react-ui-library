/// <reference types="react" />
import { CSSBorder } from "../../types/StyleTypes";
export interface Props {
    text: string;
    backgroundColor?: string;
    textColor?: string;
    lineColor?: string;
    lineStyle?: CSSBorder;
    /**
      Any valid css unit
    */
    lineThickness?: string;
}
export declare const Divider: ({ text, backgroundColor, textColor, lineColor, lineThickness, lineStyle, }: Props) => JSX.Element;
