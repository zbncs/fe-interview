import { Component, createRef } from 'react'

export default class RefComp extends Component {
	constructor(props) {
    super(props)
    this.comRef = createRef()
  }

  /**
   * 调用子组件的函数等属性
   */
  handleFocus = () => {
    this.comRef.current.handleFocus()
  }

  render() {
    return (
      <>
        <Demo ref={this.comRef} />
        <button onClick={this.handleFocus}>聚焦</button>
      </>
    )
  }
}
class Demo extends Component {
  constructor(props) {
    super(props)
    this.inputRef = createRef()
  }

  handleFocus = () => {
    this.inputRef.current.focus()
  }

  render() {
    return (
      <>
        <h1>refCompDemo</h1>
        <input type="text" ref={this.inputRef} />
      </>
    )
  }
}

