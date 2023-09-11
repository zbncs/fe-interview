import {useFocus} from "../hooks/useFocus.js";

export default function FocusCom() {
    const [ref, isFocused] = useFocus()

    return <div>
        <input ref={ref}/>
        {isFocused && <p>focused</p>}
    </div>
}
