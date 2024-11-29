import React, { useState } from 'react'

export default function () {
  const [name , setName] = useState('');
  const handelsubmit = (event) => {
    event.preventDefault();
    console.log("Form submited");
  }
  return (
    <div>
        <h1>Form conttrol</h1>
        <h1>{name}</h1> 
        <button onClick={() => setName("students")}>click</button>
        <form onSubmit={(event) => handelsubmit(event)}>
              <input type="text" />
              <input type="text" />
              <input type="submit" />
        </form>   
    </div>
  )
}
