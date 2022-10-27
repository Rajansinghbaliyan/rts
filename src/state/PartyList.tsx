import React, {ChangeEvent, ReactElement, useEffect, useRef, useState} from "react";

const PartyList: React.FC = (): ReactElement => {
    const [list, setList] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState("");

    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        setInputValue(value);
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        event.preventDefault();
        setList(prevState => [...prevState, inputValue]);
        setInputValue("");
    }

    return <>
        <h1>Guest List</h1>
        <ul>
            {list.map((value, index) => <li key={value + index}>{value}</li>)}
        </ul>

        <form>
            <input ref={inputRef} value={inputValue} onChange={handleChange}/>
            <button type={"submit"} onClick={handleClick}>Add</button>
        </form>

    </>
}

export default PartyList;