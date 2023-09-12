import {useEffect, useState} from 'react'
import './App.css'
import ReRender1 from "./components/ReRender1.jsx";
import ReRender2 from "./components/ReRender2.jsx";
import ReRender3 from "./components/ReRender3.jsx";
import ReRender4 from "./components/ReRender4.jsx";
import ReRender5 from "./components/ReRender5.jsx";
import AutoBatching from "./components/AutoBatching/AutoBatching.jsx";
import ContextReRender from "./components/Context-rerender/ContextReRender.jsx";
import Suspense1 from "./components/Suspense/Suspense1.jsx";
import Suspense2 from "./components/Suspense/Suspense2.jsx";
import ContextReRender1 from "./components/Context-rerender/ContextReRender1.jsx";
import LayoutEffect from "./components/UseLayoutEffect/LayoutEffect.jsx";
import UseEffectCom from "./components/useEffect/UseEffectCom.jsx";
import UseRefCom from "./components/UseRef/UseRefCom.jsx";
import AsyncHandler from "./components/async-event-handler/AsyncHandler.jsx";
import MemoCom from "./components/memo/MemoCom.jsx";
import EventCallback from "./components/event-callback/EventCallback.jsx";
import FlushSyncCom from "./components/flushSync/FlushSyncCom.jsx";
import UseRefCom2 from "./components/UseRef/UseRefCom2.jsx";
import UseStateCom from "./components/useState/UseStateCom.jsx";
import ErrorBoundaryCom from "./components/ErrorBoundary/ErrorBoundaryCom.jsx";
import UseEffectCom1 from "./components/useEffect/UseEffectCom1.jsx";
import UseStateCom1 from "./components/useState/UseStateCom1.jsx";
import Suspense3 from "./components/Suspense/Suspense3.jsx";
import UseEffectCom2 from "./components/useEffect/UseEffectCom2.jsx";
import EffectsKind from "./components/useEffect/EffectsKind.jsx";
import UseEffectCom3 from "./components/useEffect/UseEffectCom3.jsx";
import UseEffectCom4 from "./components/useEffect/UseEffectCom4.jsx";
import UseEffectCom5 from "./components/useEffect/UseEffectCom5.jsx";
import UseEffectCom6 from "./components/useEffect/UseEffectCom6.jsx";

function A() {
    console.log('A')
    return <div>A</div>
}
function App() {
    // const [count, setCount] = useState(0)
    //
    // useEffect(() => {
    //     setCount(count+1)
    // }, []);

    return (
        <>
            <h1>Vite + React</h1>
            {/*<ReRender1/>*/}
            {/*<ReRender2 />*/}
            {/*<ReRender3 />*/}
            {/*<ReRender4 />*/}
            {/*<ReRender5 />*/}
            {/*<AutoBatching />*/}
            {/*<ContextReRender />*/}
            {/*<ContextReRender1 />*/}
            {/*<Suspense1 />*/}
            {/*<Suspense2 />*/}
            {/*<Suspense3 />*/}
            {/*<LayoutEffect />*/}
            {/*<UseEffectCom />*/}
            {/*<UseEffectCom1 />*/}
            {/*<UseEffectCom2 />*/}
            {/*<UseEffectCom3 />*/}
            {/*<UseEffectCom4 />*/}
            {/*<UseEffectCom5 />*/}
            <UseEffectCom6 />
            {/*<EffectsKind />*/}
            {/*<UseRefCom />*/}
            {/*<UseRefCom2 />*/}
            {/*<AsyncHandler />*/}
            {/*<MemoCom />*/}
            {/*<EventCallback />*/}
            {/*<FlushSyncCom />*/}
            {/*<UseStateCom />*/}
            {/*<UseStateCom1 />*/}
            {/*<ErrorBoundaryCom />*/}



        </>
    )
}

export default App
