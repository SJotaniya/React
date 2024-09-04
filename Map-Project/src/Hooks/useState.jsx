import React, { useState } from 'react'

export default function useState() {
  const [count, setCount] = useState(0)
  const [name,setName] = useState("Rahul")
  const [arr,setArr] = useState([1,2,"Raj","Ramesh",3,5])
  const [obj,setObj] = useState({name : "Saurabh", subject : "JavaScript"})

  const increase = () => {
    setCount(count + 1)
  }
  const decrease = () => {
    setCount(count - 1)
  }

  return (
    <div>
      
      <h1>useState Examples</h1>
      <h3>{count}</h3>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>

      <h3>{name}</h3>

      {
        arr.map((el,i) => {
          return <p>{e}</p>
        })
      }

    </div>
  )
}