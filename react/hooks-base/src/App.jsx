import {useRef} from 'react'
import './App.css'
import UseImperativeHandleDemo from "./components/UseImperativeHandleDemo.jsx";
import ManyRender from "./components/manyRender.jsx";

function App() {
    const childRef = useRef(null);
    const handleFocus = () => {
        childRef.current.focus()
    }
    return (
        <>
            <UseImperativeHandleDemo ref={childRef}/>
            <ManyRender />
            <button onClick={handleFocus}>父组件调用子组件的方法</button>
        </>
    )
}

export default App
