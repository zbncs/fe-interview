import {usePrevious} from "../hooks/usePrevious.js";
import {useState} from 'react'

export default function PreValueCom({counter}) {
    const preVal = usePrevious(counter);
    const [num, setNum] = useState(0);

    const preNum = usePrevious(num)

    return (
        <>
            <h1>preVal: {preVal}</h1>
            <h1>preNum: {preNum}</h1>
            <button onClick={() => setNum(num+1)}>num: {num}</button>
        </>
    )
}
