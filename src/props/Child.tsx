import React, {ReactElement} from "react";

interface ChildProps {
    color: string;
    onClick: () => void;
    children?: React.ReactNode;
}

export const Child = ({color, onClick}: ChildProps): ReactElement => {
    return <div>
        <h1>Hi from the child</h1>
        <span>color selected is {color}</span>
        <button onClick={onClick}>Click Me!</button>
    </div>;
}

export const ChildAsFc: React.FC<ChildProps> = ({color, onClick, children}): ReactElement => {
    return <div>
        <h1>From the functional components</h1>
        <span>color is {color}</span>
        {children}
        <button onClick={onClick}>Click Me!</button>
    </div>;
}
