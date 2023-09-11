import {useEffect, useRef, useState} from "react";

export function useClickOutside(callback) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const click = (e) => {
            const target = e.target
            if (!el.contains(target)) {
                callback()
            }
        }
        document.addEventListener('click', click)

        return () => {
            document.removeEventListener('click', click)
        }

    }, []);


    return ref
}

