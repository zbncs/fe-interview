import {Component} from "react";

function renderWithError() {
    throw new Error('error');
}

function B({children}) {
    return children
}

function A() {
    return <ErrorBoundary name="boundary-2">
        <B>
            {renderWithError()}
        </B>
    </ErrorBoundary>;
}

/**
 * 不幸的是 <ErrorBoundary/> 仅捕获来自子级的错误，甚至不捕获自身的错误。
 * 由于错误是从 “boundary-2” 抛出的，因此父级 “boundary-1” 捕获它。
 */

export default function ErrorBoundaryCom() {
    return (
        <ErrorBoundary name="boundary-1">
            <A/>
        </ErrorBoundary>
    )
}

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch() {
        console.log(111, this.props.name)
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}
