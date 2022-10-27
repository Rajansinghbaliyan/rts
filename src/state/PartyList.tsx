import React, {ChangeEvent, ReactElement, useState} from "react";

const PartyList = (): ReactElement => {
    const initialState: string[] = [];
    const [list, setList] = useState(initialState);
    const [inputValue, setInputValue] = useState("");


    const  handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        setInputValue(value);
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        event.preventDefault();
        setList(prevState => {
            prevState.push(inputValue);
            return [...prevState];
        })
        setInputValue("");
    }

    return <>
        <h1>Guest List</h1>
        <ul>
            {list.map((value, index) => <li key={value + index}>{value}</li>)}
        </ul>

        <form>
            <input value={inputValue} onChange={handleChange}/>
            <button type={"submit"} onClick={handleClick}>Add</button>
        </form>

    </>
}

export default PartyList;