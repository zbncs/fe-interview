import { useState } from 'react';
import Modal from './modal';

function App() {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <h1>App组件</h1>
      <button onClick={()=>setIsShow(!isShow)}>显示/隐藏</button>
      {isShow ? <Modal /> : null}
    </div>
  )
}

export default App
