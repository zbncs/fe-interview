import {useHover} from "../hooks/useHover.js";

export default function HoverCom() {
    const [ref, isHovered] = useHover()

    return (
        <div style={{marginTop: 30}}>
            <button ref={ref}>{isHovered ? 'hovered' : 'not hovered'}</button>
        </div>
    )
}
