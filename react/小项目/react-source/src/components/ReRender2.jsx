import {memo, useEffect, useState} from "react";

function A() {
    console.log('A')
    return <B/>
}

const B = memo(() => {
    console.log('B')
    return <C/>
})

function C() {
    console.log('C')
    return null
}

function D() {
    console.log('D')
    return null
}
export default function ReRender2() {
    const [state, setState] = useState(0)

    useEffect(() => {
        setState(state => state + 1)
    }, [])

    console.log('App2')

    return (
        <div>
            <A state={state}/>
            <D/>
        </div>
    )
}
