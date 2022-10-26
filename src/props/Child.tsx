interface ChildProps {
    color: string
}
export const Child = ({color}: ChildProps) => {
    return <div>
        <h1>Hi from the child</h1>
        <span>color selected is {color}</span>
    </div>;
}
