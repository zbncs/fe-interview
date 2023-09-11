// Create a hook to tell if it is the first render

import {useEffect, useRef} from 'react'

export function useIsFirstRender1() {
    const isRender = useRef(true)

    if (isRender.current) {
        isRender.current = false
        return true
    }

    return false
}

export function useIsFirstRender() {
    const isFirstRender = useRef(0)

    isFirstRender.current++

    return isFirstRender.current === 1

}
