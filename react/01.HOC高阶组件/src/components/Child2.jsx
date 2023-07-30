import { useState } from 'react'

export default function Child2() {
  const [num, setNum] = useState(0)
  const handleClick = () => {
    setNum(num+1)
  }
  return (
    <div>
      <h3>{num}</h3>
      <button onClick={handleClick}>点击</button>
    </div>
  )
}
