import React, { useRef } from 'react'

export default function Task2() {
    const inputref = useRef();

    const handelclick = () => {
        let value = inputref.current.value
        alert(`the value is ${value}`)
    }
  return (
    <div>
        <h1>un controlo</h1>
        <input type="text"  placeholder='ENTRE THE NAME' ref={inputref}/>
        <button onClick={handelclick}>click</button>
    </div>
  )
}
