import {useState} from "react";

function A() {
    console.log('render A')
    return null
}
export default function UseStateCom1() {
    const [_state, setState] = useState(false)

    console.log('render App')

    return <div>
        <button onClick={() => {
            console.log('click')
            setState(true)
        }}>click me</button>
        <A />
    </div>
}
