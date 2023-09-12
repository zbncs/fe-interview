import {useEffect, useState} from "react";

export default function UseEffectCom5() {
    const [state, setState] = useState(0)
    console.log(1)

    const start = Date.now()
    while (Date.now() - start < 50) {
        console.log(111, 'while')
        window.timestamp = Date.now()
    }

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
