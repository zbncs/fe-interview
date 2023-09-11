// Create a hook usePrevious() to return the previous value, with initial value of `undefined.
import {useEffect, useRef} from 'react'

export function usePrevious(value) {
    const pre = useRef();

    useEffect(() => {
        pre.current = value
    }, [value])

    return pre.current
}

