import {useEffect, useRef, useState} from "react";

export default function BiBao() {
    const [state, setState] = useState(0);
    const val = useRef(0)

    useEffect(() => {
        const timer = setInterval(() => {
            // 每次可以获得最新的state值
            setState(state => state + 1)

            // 因为闭包，获取到的state不变
            console.log(22, state)
            // setState(state+1)
        }, 1000)

        return () => {
            console.log(timer)
            clearInterval(timer)
        }
    }, []) // 不加依赖是同一个定时器，加了就不是了

    return (
        <>
            <div>{state}</div>
            <div>{}</div>

        </>
    )
}
