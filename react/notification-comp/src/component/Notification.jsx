import {createPortal} from "react-dom";
import './notification.css'

export default function Notification({children, onDelete, color}) {
    return createPortal(
        <div className={color}>
            {children}
            <button className={color} onClick={() => onDelete()}>X</button>
        </div>
    , document.body)
}




