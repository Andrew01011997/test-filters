/// <reference types="react-scripts" />

type Get<I extends Record<string, any>, K extends string> = K extends keyof I ? I[K] : unknown; 

type PropsOf<TTag = any> = TTag extends React.ElementType ? React.ComponentProps<TTag> : never;

