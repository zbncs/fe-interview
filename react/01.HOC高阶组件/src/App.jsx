import './App.css'
import Child1 from './components/Child1'
import ClassCom from './components/ClassCom';

function App() {

  console.log(ClassCom.prototype.isReactComponent);
  console.log(111, Child1.prototype.isReactComponent);

  return (
    <>
      App
      <Child1 />
    </>
  )
}

export default App
