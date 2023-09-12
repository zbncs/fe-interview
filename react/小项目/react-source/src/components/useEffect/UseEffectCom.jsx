import {useEffect, useState} from "react";

export default function UseEffectCom() {
    const [state, setState] = useState(0)

    console.log("Com", state)

    useEffect(() => {
        setState(state => state + 1)
    }, [])

    useEffect(() => {
        console.log("effect", state)

        setTimeout(() => {
            console.log("setTimeout", state)
        }, 100)

    }, [])

    return null
}
