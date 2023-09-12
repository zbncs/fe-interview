import {useEffect, useState} from "react";

export default function UseEffectCom2() {
    const [state, setState] = useState(0)
    console.log(1)

    useEffect(() => {
        console.log(2)
    }, [state])

    Promise.resolve().then(() => console.log(3))

    setTimeout(() => console.log(4), 0)

    const onClick = () => {
        console.log(5)
        setState(num => num + 1)
        console.log(6)
    }

    return <div>
        <button onClick={onClick}>click me</button>
    </div>
}
