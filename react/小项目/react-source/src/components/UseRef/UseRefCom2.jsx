import {useLayoutEffect, useRef} from "react";

export default function UseRefCom2() {
    const ref = useRef(false)

    useLayoutEffect(() => {
        console.log(1)
        ref.current = true
    })

    return <button
        autoFocus
        onFocus={() => {
            console.log(!!ref.current)
        }}
    >
        button
    </button>
}
