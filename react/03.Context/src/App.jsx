import './App.css'
import GlobalProvider from './context/index.jsx'
import Child1 from './components/Child1'
import Child2 from './components/Child2'

function App() {
  return (
    <GlobalProvider>
      <h1>App</h1>
      <Child1 />
      <Child2 />
    </GlobalProvider>
  )
}

export default App
