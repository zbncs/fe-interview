import './App.css'
import {useState, useEffect} from 'react'

function App() {
  const [state, setState] = useState(0)

  console.log(1);

  const now = Date.now()
  while(Date.now() - now < 50) {}

  useEffect(() => {
    console.log(2);
  }, [state])

  Promise.resolve().then(() => console.log(3))

  setTimeout(() => {console.log(4)}, 0)

  return (
    <>
      <button onClick={() => setState(state+1)}>render</button>
    </>
  )
}

export default App
