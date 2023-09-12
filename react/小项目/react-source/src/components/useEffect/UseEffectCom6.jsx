import {useEffect, useLayoutEffect, useState} from "react";

export default function UseEffectCom6() {
    const [state, setState] = useState(0)
    console.log(1)

    const start = Date.now()
    while (Date.now() - start < 50) {
        window.timestamp = Date.now()
    }

    useEffect(() => {
        console.log(2)
    }, [state])

    Promise.resolve().then(() => console.log(3))

    setTimeout(() => console.log(4), 0)

    useLayoutEffect(() => {
        console.log(5)
        setState(state => state + 1)
    }, [])

    return null
}
