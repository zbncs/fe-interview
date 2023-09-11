import {useToggle} from "../hooks/useToggle.js";

export default function ToggleCom() {
    const [on, toggle] = useToggle(false)

    return (
        <div style={{marginTop: 30}}>
            <input type='checkbox' checked={on} onChange={toggle}/>
            <button onClick={toggle}>toggle</button>
        </div>
    )
}
