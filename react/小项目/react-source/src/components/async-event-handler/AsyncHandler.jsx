import {useState} from "react";

export default function AsyncHandler() {
    const [state, setState] = useState(0)
    const increment = () => {
        setTimeout(() => {
            // 18后，里面的多次操作也会批处理更新
            setState(state + 1)

            // 在时间范围内合并成一次更新
        }, 2000)
    }

    console.log(state)

    return <div>
        <button onClick={increment}>click me</button>
    </div>
}
