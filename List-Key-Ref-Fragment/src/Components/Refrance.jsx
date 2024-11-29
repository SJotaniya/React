import React, { useEffect, useRef } from 'react'

function Refrance() {
    const inputref = useRef()
    useEffect(()=>{
        inputref.current.focus()

        setTimeout(()=>{
          inputref.current.focus()
        },2000)
    },[])



    const handelclick = () =>{
        inputref.current.focus()
        let p = inputref.current.value
        alert(`the value is ${p}`)
    }
  return (
    <>
        <input type="text" ref={inputref}  style={{height: "30px", width:"250px"}}/><br /><br />
        <button onClick={handelclick}>Click</button>
    </>
  )
}

export default Refrance