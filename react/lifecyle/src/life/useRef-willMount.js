import {useRef} from "react";

const useWillMountRef = (fn) => {
    const first = useRef(true)

    if (first.current) {
        fn()
        first.current = false
    }
}

export default useWillMountRef