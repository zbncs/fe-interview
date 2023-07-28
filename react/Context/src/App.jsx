import { useState } from 'react'
import './App.css'
import {Context} from './context/index'
import Child1 from './components/Child1'
import Child2 from './components/Child2'

function App() {
  const [count, setCount] = useState(0)
  return (
    <Context.Provider value={{count, setCount}}>
      <h1>App</h1>
      <Child1 />
      <Child2 />
    </Context.Provider>
  )
}

export default App
