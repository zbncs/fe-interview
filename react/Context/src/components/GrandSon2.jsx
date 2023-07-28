import {useContext} from 'react'
import { Context } from '../context'

export default function GrandSon2() {
    const {count, setCount} = useContext(Context)
    return (
        <div>
            <h5>GrandSon2</h5>
            <h3>{count}</h3>
            <button onClick={() => setCount(count+1)}>点击</button>
        </div>
    )
}
