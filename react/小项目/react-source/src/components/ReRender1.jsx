import {useEffect, useState} from "react";


function A({state}) {
    console.log('A', state)
    return <B/>
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

export default function ReRender1() {
    const [state, setState] = useState(0);

    useEffect(() => {
        setState(state => state + 1)
    }, []);

    console.log("App1")

    return (
        <div>
            <A state={state}/>
            <D/>
        </div>
    )
}
