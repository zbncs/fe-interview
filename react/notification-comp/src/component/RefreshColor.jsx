import {useEffect, useRef} from "react";

export default function RefreshColor() {
    const colorRef = useRef()
    const handleClick = () => {
        colorRef.current.style.color = 'red'
        sessionStorage.setItem('color', 'red')
    }

    useEffect(() => {
        const color = sessionStorage.getItem('color') ? sessionStorage.getItem('color') : ''
        colorRef.current.style.color = color
    })

    return (
        <>
            <div ref={colorRef} onClick={handleClick}>red font</div>
        </>
    )
}
