import { Component, createRef } from 'react'

export default class CreateRefDemo extends Component {
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
			<h1>RefDemo</h1>
			<input type="text" ref={this.inputRef} />
			<button onClick={this.handleFocus}>聚焦</button>
		</>
    )
  }
}
