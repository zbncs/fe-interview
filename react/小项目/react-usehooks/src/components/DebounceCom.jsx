import {useDebounce} from "../hooks/useDebounce.js";
import {useState} from "react";

export default function DebounceCom() {
    const [val, setVal] = useState('');
    const handleChange = (e) => {
        setVal(e.target.value)
    }
    const deferredVal = useDebounce(val, 2000)

    return (
        <>
            <div>{deferredVal}</div>
            <input type='text' value={val} onChange={handleChange}/>
        </>
    )
}
