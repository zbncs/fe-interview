import {useEffectOnce} from "../hooks/useEffectOnce.js";
import {useState} from "react";

export default function EffectOnce() {
    const [state, setState] = useState(0);

    useEffectOnce(() => {
        console.log(1212)
        new Promise((resolve) => {
            resolve(Math.random())
        }).then(res => {
            setState(res)
        })
    })

    return (
        <>
            <h1 onClick={() => setState(state+1)}>{state}</h1>
        </>
    )
}
