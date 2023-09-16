import {useEffect, useState} from 'react'
import './App.css'
import {useTimeout} from './hooks/useTimeout.js'
import {useIsFirstRender} from "./hooks/useIsFirstRender.js";
import SWR from "./components/SWR.jsx";
import PreValueCom from "./components/PreValueCom.jsx";
import HoverCom from "./components/HoverCom.jsx";
import ToggleCom from "./components/ToggleCom.jsx";
import DebounceCom from "./components/DebounceCom.jsx";
import EffectOnce from "./components/EffectOnce.jsx";
import PhoneNumberInput from "./components/PhoneNumberInput.jsx";
import TelephoneInput from "./components/TelephoneInput.jsx";
import FocusCom from "./components/FocusCom.jsx";
import UseArrayCom from "./components/UseArrayCom.jsx";
import UseClickOutside from "./components/UseClickOutside.jsx";

function App() {
    const [count, setCount] = useState(0)

    // const timer = useTimeout(() => {
    //     setCount(count+1)
    // }, 3000)
    //
    // console.log(111, timer)
    const handleClick = () => {
        setCount(count+1)
    }

    // 123
    // const isFirst = useIsFirstRender()
    // console.log(111, isFirst)

    return (
        <>
            <h1>Vite + React</h1>
            {/*<SWR />*/}
            {/*<div className="card">*/}
            {/*    <button onClick={handleClick}>*/}
            {/*        count is {count}*/}
            {/*    </button>*/}
            {/*</div>*/}
            {/*<PreValueCom counter={count} />*/}
            {/*<HoverCom />*/}
            {/*<ToggleCom />*/}
            {/*<p>---------------------</p>*/}
            {/*<DebounceCom />*/}
            {/*<EffectOnce />*/}
            {/*<hr/>*/}
            {/*<PhoneNumberInput />*/}
            {/*<hr/>*/}
            {/*<TelephoneInput />*/}
            {/*<hr/>*/}
            {/*<FocusCom />*/}
            {/*<hr/>*/}
            {/*<UseArrayCom />*/}
            <UseClickOutside />
        </>
    )
}

export default App
