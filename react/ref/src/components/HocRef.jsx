import { Component, createRef, forwardRef } from 'react'
/**
 * 不能在函数组件上使用 `ref` 属性，因为函数组件没有实例。
 */
function newComp(Comp1) {
    class Comp extends Component {
        constructor(props) {
            super(props)
            // ref不可能绑定到props上
            console.log(111, props);
        }

        
        render() {
            // eslint-disable-next-line react/prop-types
            const {forwardRef1, ...rest} = this.props
            return (
                <>
                    <Comp1 {...rest} ref={forwardRef1} />
                </>
            )
        }
    }

    // eslint-disable-next-line react/display-name
    return forwardRef((props, ref) => {
        return <Comp {...props} forwardRef1={ref} />
    })
}
class Com1 extends Component {
    constructor(props) {
        super(props)
        this.inpRef = createRef()
    }
    test = () => {
        this.inpRef.current.focus()
    }
    render() {
        return (
        <>
            <h1>HocRef</h1>
            <input type="text" ref={this.inpRef} />
        </>

        )
    }
}


const CompHoc = newComp(Com1)
export default class HocRef extends Component {
    constructor(props) {
        super(props)
        this.hocCompRef = createRef()
    }

    handleFocus = () => {
        this.hocCompRef.current.test()
    }
    render() {
        return (
            <>
                <CompHoc ref={this.hocCompRef} />
                <button onClick={this.handleFocus}>聚焦</button>
            </>
        )
    }
}



