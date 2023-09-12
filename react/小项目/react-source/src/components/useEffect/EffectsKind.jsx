import {useEffect, useInsertionEffect, useLayoutEffect, useState} from "react";

export default function EffectsKind() {
    console.log(1)

    const [state, setState] = useState(0)

    useEffect(() => {
        setState(state => state + 1)
    }, [])

    useEffect(() => {
        console.log(2)
        return () => {
            console.log(3)
        }
    }, [state])

    useEffect(() => {
        console.log(4)
        return () => {
            console.log(5)
        }
    }, [state])

    useLayoutEffect(() => {
        console.log(6)
        return () => {
            console.log(7)
        }
    }, [state])

    useInsertionEffect(() => {
        console.log(8)
        return () => {
            console.log(9)
        }
    }, [state])

    console.log(10)

    return null
}

/**
 *
 */
