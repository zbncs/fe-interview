import {useImperativeHandle, forwardRef, useRef} from 'react'
function UseImperativeHandleDemo(props, ref) {
    const inpRef = useRef(null)

    useImperativeHandle(ref, () => {
        return {
            focus() {
                inpRef.current.focus()
            }
        }
    })

    return (
        <>
            <h1>Child</h1>
            <input type='text' ref={inpRef}/>
        </>
    )
}

export default forwardRef(UseImperativeHandleDemo)
