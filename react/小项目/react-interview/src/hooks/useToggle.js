// It is quite common to see switches and checkboxes in web apps.
//
//     Implement useToggle() to make things easier

import {useState} from "react";

/**
 * @param {boolean} on
 */
export function useToggle(on) {
    const [check, setCheck] = useState(on);
    const toggle = () => {
        setCheck(!check)
    }
    return [check, toggle]
}
