import {useState, useRef} from "react";

export default function ManyRender() {
    const [n, setN] = useState(0)
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const inRef = useRef(0)

    const handleFetch = () => {
        return new Promise((resolve, reject) => {
            resolve(100)
        })
    }

    const handleClick = () => {
        handleFetch().then(res => {
            setN(n+1)
            setN1(n1+1)
            setN2(n2+1)
        })
    }

    inRef.current++;
    console.log('render', inRef.current)
    return (
        <>
            <div onClick={handleClick}>ManyRender</div>
            <div>{n}-{n1}-{n2}</div>
        </>
    )
}
