import {useArray} from "../hooks/useArray.js";

export default function UseArrayCom() {
    const {value, push, removeByIndex} = useArray([1, 2, 3])

    return (
        <>
            {
                value.map((item, index) => {
                    return (
                        <div key={item}>
                            <div>{item}</div>
                            <button onClick={() => removeByIndex(index)}>删除</button>
                        </div>
                    )
                })
            }
            <button onClick={() => push(Math.floor(Math.random() * 100))}>push</button>
        </>
    )
}
