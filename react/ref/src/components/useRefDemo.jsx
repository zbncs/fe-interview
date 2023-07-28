import {useImperativeHandle, useRef, forwardRef} from 'react'

export default function UseRefDemo() {
  const inpRef = useRef()

  const handleClick = () => {
    inpRef.current.focus()
  }

  return (
    <>
      <h1>UseRefDemo</h1>
      <Child ref={inpRef} />
      <button onClick={handleClick}>聚焦</button>
    </>
  )
}
// eslint-disable-next-line react/prop-types, react/display-name
const Child = forwardRef(function(props, ref) {
  const inputRef = useRef()
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus()
  }), [])

  return (
    <>
      <h1>useImperativeHandle</h1>
      <input type="text" ref={inputRef} />
    </>
  )
})


