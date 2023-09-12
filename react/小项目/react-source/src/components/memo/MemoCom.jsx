import {memo, useState} from "react";
// 第二次渲染，由于 A 中的 children 没有任何 props 变化，B 会直接返回记忆的渲染结果，不会重新渲染，因此只有 A 被渲染
function _B() {
    console.log('B')
    return null
}

const B = memo(_B)

function _A({ children }) {
    console.log('A')
    return children
}

const A = memo(_A)
export default function MemoCom() {
    const [count, setCount] = useState(0)

    return <div>
        <button onClick={
            () => setCount(count => count + 1)
        }>
            click me
        </button>
        <A>
            <B/>
        </A>
    </div>
}
