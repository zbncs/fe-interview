import {useEffect, useRef, useState} from "react";

function fn() {
    console.log(111)
    return 1
}
export default function UseRefCom() {
    // 第一次渲染的值null
    const ref = useRef(null)
    // 每次更新都会执行
    // const [state, setState] = useState(fn())

    // 只会在第一次Render执行一次
    // const [state, setState] = useState(fn)

    const [state, setState] = useState(1)


    useEffect(() => {
        setState(2)
    }, [])

    console.log(ref.current, state)
    console.log(ref.current?.textContent)

    return <div>
        <div ref={state === 1 ? ref : null}>1</div>
        <div ref={state === 2 ? ref : null}>2</div>
    </div>
}
