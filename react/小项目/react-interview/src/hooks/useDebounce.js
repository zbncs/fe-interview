// For a frequently changing value like text input you might want to debounce the changes.
//
//     Implement useDebounce() to achieve this.

import {useEffect, useRef, useState} from "react";

/**
 *
 * @param value
 * @param {number} delay
 * @returns {(function(): void)|*}
 */
export function useDebounce(value, delay= 0) {
    let timer = useRef(null);
    const [val, setVal] = useState(value);

    useEffect(() => {
        if (timer.current) {
            clearTimeout(timer.current)
        }

        timer.current = setTimeout(() => {
            setVal(value)
        }, delay)

    }, [value]);

   return val
}
