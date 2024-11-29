import React, { useEffect, useState } from 'react'

function Ex3blankdependency() {
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

export default Ex3blankdependency