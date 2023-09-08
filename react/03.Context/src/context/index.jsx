import {createContext, useState} from 'react'
export const Context = createContext()

export default function GlobalProvider({children}) {
    const [color, setColor] = useState('');
    const [count, setCount] = useState(0)
    const defaultState = {
        color,
        setColor,
        count,
        setCount
    }

    return (
       <Context.Provider value={defaultState}>
           {children}
       </Context.Provider>
    )
}

