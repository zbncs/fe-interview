import { useState } from 'react'
import './App.css'
import Child from './Child'

function App() {
  const [count, setCount] = useState(0)
  console.log('app render', count);

  return (
    <div onClick={() => setCount(1)}>
      <Child />
    </div>
  )
}

export default App
