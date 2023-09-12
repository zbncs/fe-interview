import {useState} from "react";

export default function AutoBatching2() {
    const [state, setState] = useState(0);
    const [num, setNum] = useState(0)
    // 两个不同的状态也只会更新一次
    console.log("App " + state + num)

    return (
        <div>
            <button onClick={() => {
                setState(state => state + 1)
                setNum(num => num + 2)
            }}>click me</button>
        </div>
    )
}
