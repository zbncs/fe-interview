import Child3 from './Child3'
import ErrorBoundary from './ErrorBoundary'

export default function Child1() {
  return (
    <div>
      <h3>Child1</h3>
      <div style={{marginLeft: 60}}>
        <ErrorBoundary>
          <Child3 />
        </ErrorBoundary>
      </div>
    </div>
  )
}
