import { Component } from 'react'

export default class CreateRefFunDemo extends Component {
  constructor(props) {
    super(props)
    this.inputRef = el => {
      this.inputDom = el
    }
  }
  handleFocus = () => {
    this.inputDom.focus()
  }
   render() {
    return (
      <>
        <h1>FunRefDemo</h1>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleFocus}>聚焦</button>
      </>
    )
  }
}
