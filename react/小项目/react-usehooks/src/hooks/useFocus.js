import {useEffect, useRef, useState} from "react";

/**
 * CSS pseudo-class :focus-within could be used to allow conditional rendering in parent element on the focus state of descendant elements.
 *
 * While it is cool, in complex web apps, it might be better to control the state in script.
 *
 * Now please create useFocus() to support this.
 */

export function useFocus() {
    const ref = useRef(null);
    const [isFocused, setIsFocused] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const focusHandler = () => setIsFocused(true)
        const blurHandler = () => setIsFocused(false)

        el.addEventListener('focus', focusHandler)
        el.addEventListener('blur', blurHandler)

        return () => {
            el.removeEventListener('focus', focusHandler)
            el.removeEventListener('blur', blurHandler)
        }
    }, []);

    return [ref, isFocused]
}

