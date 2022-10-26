import React from "react";

interface ChildProps {
    color: string,
    onClick: () => void;
}

export const Child = ({color, onClick}: ChildProps) => {
    return <div>
        <h1>Hi from the child</h1>
        <span>color selected is {color}</span>
        <button onClick={onClick}>Click Me!</button>
    </div>;
}
export const ChildAsFc: React.FC<ChildProps> = ({color, onClick}) => {
    return <div>
        <h1>From the functional components</h1>
        <span>color is {color}</span>
        <button onClick={onClick}>Click Me!</button>
    </div>;
}
