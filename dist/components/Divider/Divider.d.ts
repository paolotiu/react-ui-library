/// <reference types="react" />
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
export declare const Divider: ({ text, backgroundColor, textColor, lineColor, lineThickness, }: Props) => JSX.Element;
