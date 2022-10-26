import {Child, ChildAsFc} from "./Child";
import React, {ReactElement, useState} from "react";

const Parent:React.FC = (): ReactElement => {

    const [childTimes, setChildTimes] = useState(0);
    const [childFcTimes, setChildFcTimes] = useState(0);

    const onClickHandlerChild = () => {
        console.log("Child is clicked" + childTimes);
        setChildTimes(prevState => prevState + 1);
    }

    const onClickHandlerChildAsFc = () => {
        console.log("ChildAsFc is clicked" + childFcTimes);
        setChildFcTimes(prevState => prevState + 1);
    }
    return <>
        <Child color={'red'} onClick={onClickHandlerChild} />
        <ChildAsFc color={'black'} onClick={onClickHandlerChildAsFc}>
            <button>Clicked</button>
        </ChildAsFc>
    </>
}

export default Parent;