import {useState} from "react";

export default function AutoBatching() {
    const [state, setState] = useState(0);
    // 只会更新一次
    console.log("App " + state)

    return (
        <div>
            <button onClick={() => {
                setState(count => count + 1)
                setState(count => count * 2)
            }}>click me</button>
        </div>
    )
}
