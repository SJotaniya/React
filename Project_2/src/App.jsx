import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }
  const decrease = () => {
    setCount(count - 1)
  }
  const clear = () => {
    setCount(0);
  }

  return (
    <>
      <div class="section">
        <div class="blurred-div">
          <h2>Counter Using useState</h2>
          <h2>{count}</h2>
          <div class="button-container">
            <button class="button increase" onClick={increase}>Increase</button>
            <button class="button decrease" onClick={decrease}>Decrease</button>
            <button class="button clear" onClick={clear}>Clear</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default App
