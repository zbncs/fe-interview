// Create a hook to easily use setTimeout(callback, delay).

    // reset the timer if delay changes
    // DO NOT reset the timer if only callback changes

import {useEffect, useRef} from 'react'

/**
 *
 * @param {Function} callback
 * @param {number} delay
 */
export function useTimeout(callback, delay) {
    const callbackRef = useRef(null)
    callbackRef.current = callback

    const timer = useRef(null)

    useEffect(() => {
        timer.current = setTimeout(callbackRef.current, delay)
        return () => {
            clearTimeout(timer.current)
        }
    }, [delay])

    return timer.current
}
