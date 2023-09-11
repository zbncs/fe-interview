import {useClickOutside} from "../hooks/useClickOutside.js";

export default function UseClickOutside() {

    const ref = useClickOutside(() => {
        alert('clicked outside')
    });

    return (
        <>
            <div ref={ref} style={{height: 200}}>box</div>
        </>
    )
}
