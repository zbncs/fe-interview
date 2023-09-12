import {useState} from "react";

export default function EventCallback() {
    const [state, setState] = useState(0)

    const onClick = () => {
        console.log('handler')
        setState(state => state + 1)

        console.log('handler ' + state)
    }

    console.log('render ' + state)

    return <div>
        <button onClick={onClick}>click me</button>
    </div>
}
