import React, { useEffect, useState } from 'react'

export default function useEffect2() {

  const [count ,setCount] = useState(1)

  useEffect(() =>{
    console.log("runs on first")
  },[])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count * 2)}>Multiplication</button>
    </div>
  )
}