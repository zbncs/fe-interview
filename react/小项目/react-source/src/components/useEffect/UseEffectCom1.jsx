import {useEffect, useRef, useState} from "react";

export default function UseEffectCom1() {
    const [show, setShow] = useState(true)
    const [count, setCount] = useState(0);

    return <div>
        {count}
        <div onClick={() => setCount(count+1)}>click me</div>
        {show && <Child unmount={() => setShow(false)} />}
    </div>
}

function Child({ unmount }) {
    const isMounted = useIsMounted()
    console.log(111, isMounted)

    useEffect(() => {
        console.log('child effect', isMounted)

        Promise.resolve(true).then(() => {
            console.log('promise', isMounted)
        })

        unmount()

    }, []);

    return null
};

function useIsMounted() {
    const isMounted = useRef(false);

    useEffect(() => {

        isMounted.current = true

        return () => {
            console.log(666, isMounted.current)
            isMounted.current = false
        }

    }, [])

    console.log('use', isMounted.current)

    return isMounted.current
}
