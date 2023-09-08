import {Context} from '../context/index.jsx'

export default function GrandSon() {

    return (
        <div>
            <h5>GrandSon</h5>
            <Context.Consumer>
                {
                    context => {
                        return (
                            <div>
                                <h3>{context.count}</h3>
                                <button onClick={() => context.setCount(context.count+1)}>点击</button>
                            </div>
                        )
                    }
                }
            </Context.Consumer>
        </div>
    )
}
