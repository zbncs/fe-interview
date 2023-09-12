import {useEffect, useState} from "react";

function A({ children }) {
    console.log('A')
    return children
}

function B() {
    console.log('B')
    return <C/>
}

function C() {
    console.log('C')
    return null
}

function D() {
    console.log('D')
    return null
}
export default function ReRender3() {
    const [state, setState] = useState(0)

    useEffect(() => {
        setState(state => state + 1)
    }, [])

    console.log('App3')

    return (
        <div>
            <A>
                <B/>
            </A>
            <D/>
        </div>
    )
}
