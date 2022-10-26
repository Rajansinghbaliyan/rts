import {Child, ChildAsFc} from "./Child";
import {useState} from "react";

const Parent = () => {

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
        <ChildAsFc color={'black'} onClick={onClickHandlerChildAsFc}/>
    </>
}

export default Parent;