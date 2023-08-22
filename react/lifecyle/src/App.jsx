import {useCallback, useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import useComponentWillMount from "./life/useState-willMount.js";
import useWillMountMemo from "./life/useMemo-willMount.js";
import useWillMountRef from "./life/useRef-willMount.js";


function App() {
    const [count, setCount] = useState(0)

    useWillMountRef(() => {
        console.log('componentWillMount')
    })

    useEffect(() => {
        console.log('componentDidMount')
    }, []);

    useEffect(() => {
        console.log('componentDidUpdate')
    });

    useEffect(() => {
        return () => {
            console.log('componentWillUnmount')
        }
    }, []);

    const handleClick = useCallback(() => {
        console.log('useCallback')
    }, [count])

    const handleCount = () => {
        setCount((c) => c+2)
        console.log(handleClick)
    }

    return (
        <>
            <div onClick={handleClick}>
                <img src={viteLogo} className="logo" alt="Vite logo"/>
                <img src={reactLogo} className="logo react" alt="React logo"/>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={handleCount}>
                    count is {count}
                </button>
            </div>
        </>
    )
}

export default App
