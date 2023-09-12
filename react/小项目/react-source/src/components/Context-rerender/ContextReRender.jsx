import {createContext, memo, useContext, useEffect, useState} from "react";

const MyContext = createContext(0);

function B() {
    const count = useContext(MyContext)
    console.log('B')
    return null
}

const A = memo(() => {
    console.log('A')
    return <B/>
})

function C() {
    console.log('C')
    return <D/>
}

const E = memo(() => {
    console.log("E")
    return null
})
function D() {
    console.log("D")
    return <E/>
}

export default function ContextReRender() {
    const [state, setState] = useState(0)

    useEffect(() => {
        setState(state => state + 1)
    }, [])

    console.log('App')

    return <MyContext.Provider value={state}>
        <A/>
        <C/>
    </MyContext.Provider>
}
