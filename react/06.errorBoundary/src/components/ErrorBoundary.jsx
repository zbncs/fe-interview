import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    }
  }

  // 应用崩溃后，重新触发应用
  componentDidCatch(error, errorInfo) {
    console.log(111, error);
    console.log(222, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>Error</div>
      )
    }

    return this.props.children;
  }
}
