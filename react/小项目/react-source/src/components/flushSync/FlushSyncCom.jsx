import {useState} from "react";
import {flushSync} from "react-dom";

/**
 *  flushSync 强制 React 刷新所有挂起的工作，并同步更新 DOM
 *
 * FlushSync 会刷新整个树，实际上会强制完全重新渲染调用中发生的更新，因此您应该非常谨慎地使用它。
 * 这样它就不会破坏 props、state 和 refs 之间内部一致性的保证。
 *
 */
export default function FlushSyncCom() {
    const [state, setState] = useState(0)

    const onClick = () => {
        console.log('handler')

        flushSync(() => {
            setState(state => state + 1)
        })

        console.log('handler ' + state)
    }

    console.log('render ' + state)

    return <div>
        <button onClick={onClick}>click me</button>
    </div>
}
