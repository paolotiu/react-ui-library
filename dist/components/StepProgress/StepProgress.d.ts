/// <reference types="react" />
interface Props {
    steps: number;
    progress: {
        [key: number]: number;
    };
}
export declare const StepProgress: ({ steps, progress }: Props) => JSX.Element;
export {};
