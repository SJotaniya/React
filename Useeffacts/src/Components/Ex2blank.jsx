import React, { useEffect, useState } from 'react'

export default function Ex2blank() {
    const [count , setCount] = useState(0)

    useEffect(() =>{
        console.log("run on every render");
    })
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count - 1)}>decrese</button>
    </div>
  )
}
