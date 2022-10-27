import React, {
    ChangeEvent,
    ChangeEventHandler, Dispatch,
    MouseEventHandler,
    ReactElement,
    ReactEventHandler,
    useState
} from "react";

const PartyList: React.FC = (): ReactElement => {
    let initailState: string[] = [];
    const [list, setList] = useState(initailState);
    const [inputValue, setInputValue] = useState("");


    const handleChangeEvent = (event: ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        setInputValue(value);
    }

    const handleOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        event.preventDefault();
        setList(prevState => {
            const state = [...prevState];
            state.push(inputValue);
            return state;
        })
        setInputValue("");
    };

    return <>
        <h1>Guest List:</h1>
        <ul>
            {list.map((value, index) =>
                <li key={index + value}>{value}</li>
            )}
        </ul>

        <form>
        <input type={"text"} value={inputValue} onChange={handleChangeEvent}/>
        <button onClick={handleOnClick} type={"submit"}>Add</button>
        </form>
    </>
}

export default PartyList;