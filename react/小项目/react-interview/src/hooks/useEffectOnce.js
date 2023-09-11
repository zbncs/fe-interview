// Here is a simple problem, implement useEffectOnce() as the name says itself, it runs an effect only once.
import {useEffect, useRef} from 'react'

// 如果不使用 useRef ，就无法在组件的渲染之间存储对效果函数的引用。
// 如果您尝试直接在钩 useEffect 子中运行效果函数，效果函数将在每次渲染时重新创建，并且 useEffect 钩子将在每次渲染上运行，从而违背了目的 useEffectOnce 。
export function useEffectOnce(effect) {
    const ref = useRef(effect);
    useEffect(() => {
        ref.current()
    }, []);
}
