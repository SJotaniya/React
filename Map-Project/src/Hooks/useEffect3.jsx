import React, { useEffect, useState } from 'react'

export default function useEffect3() {

  const [count , setCount] = useState(0)
  
  useEffect(() =>{
    console.log("Useeffact is runing")
  },[count])

  return (
    <div>
      <h1>useEffect</h1>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count + 1)}>add</button>
    </div>
  )
}