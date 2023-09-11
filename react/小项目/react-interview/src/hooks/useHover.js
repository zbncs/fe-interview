// It is common to see conditional rendering based on hover state of some element.

    // We can achive it by CSS pseduo class :hover, but for more complex cases it might be better to have state controlled by script.

    // Now you are asked to create a useHover() hook.

import {useEffect, useRef, useState} from "react";

export function useHover() {
    const ref = useRef();
    const [isHover, setIsHover] = useState(false);

    useEffect(() => {
        setIsHover(false)
        const el = ref.current

        if (!el) {
            return
        }

        const enter = () => setIsHover(true)
        const leave = () => setIsHover(false)

        el.addEventListener('mouseenter', enter)
        el.addEventListener('mouseleave', leave)

        return() => {
            el.removeEventListener('mouseenter', enter)
            el.removeEventListener('mouseleave', leave)
        }
    }, []);

    return [ref, isHover]
}
