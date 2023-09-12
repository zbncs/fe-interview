import {useEffect, useLayoutEffect, useState} from "react";

/**
 * mounted 初始渲染周期不运行任何清理函数
 *
 * useLayoutEffect
 * useEffect
 *
 *
 * re-render：指向effect之前，需要清理前一个
 *
 * useLayoutEffect clean 首先被清理并立即执行
 * useLayoutEffect
 *
 * 常规 useEffects 被分组、清理，然后在第二个渲染周期执行。
 * useEffect clean 1
 * useEffect clean 2
 *
 * useEffect 1
 * useEffect 2
 *
 */
export default function LayoutEffect() {
    console.log('App')

    const [state, setState] = useState(0)

    useEffect(() => {
        setState(state => state + 1)
    }, [])

    useEffect(() => {

        console.log('useEffect 1')

        return () => {
            console.log('useEffect 1 cleanup')
        }
    }, [state])

    useEffect(() => {

        console.log('useEffect 2')

        return () => {
            console.log('useEffect 2 cleanup')
        }
    }, [state])

    useLayoutEffect(() => {

        console.log('useLayoutEffect')

        return () => {
            console.log('useLayoutEffect cleanup')
        }
    }, [state])

    return null
}
