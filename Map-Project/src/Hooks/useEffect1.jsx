import React, { useEffect,useState } from 'react'

export default function useEffect1() {

  const [count,setCount] = useState(0)

  useEffect(() =>{
    console.log("Run on every render")
  })

  return (
    <div>
      <h1>Usestate</h1>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count + 1)}>add</button>
    </div>
  )
}