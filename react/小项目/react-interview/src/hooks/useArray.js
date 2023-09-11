import {useState} from "react";

/**
 *
 * @param {Array} arr
 */
export function useArray(arr) {
    const [value, setValue] = useState(arr);
    const push = (val) => {
        setValue([...value, val])
    }

    const removeByIndex = (index) => {
        const tempArr = value.filter((it, id) => index !== id)
        setValue(tempArr)
    }

    return {
        value,
        push,
        removeByIndex
    }
}

