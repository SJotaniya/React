import React, { useEffect, useState } from 'react'

export default function CRUD() {
  const [name,setName] = useState("")
  const [subject,setSubject] = useState("")
  const [city,setCity] = useState("")

  const [record,setRecord] = useState("")

  useEffect(()=>{
    let data = JSON.parse(localStorage.getItem("stuData")) || []
    setRecord(data)
  })
  
  const handelData = () => {
    let userData = {id: Date.now(),name,subject,city}
    record.push(userData)
    localStorage.setItem("stuData", JSON.stringify(record))
  }

  return (
    <>
      <h1>CRUD Operations</h1>
      <input type="text" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)}/>
      <input type="text" placeholder='Enter Subject' onChange={(e) => setSubject(e.target.value)} />
      <input type="text" placeholder='Enter Your City' onChange={(e) => setCity(e.target.value)} />

      <button onClick={handelData}>Set Data</button>

      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {
            record 
            ? record.map((e,i) => { 
              return <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.subject}</td>
                <td>{e.city}</td>
                </tr>
              })
            : " "
          }
        </tbody>
      </table>
    </>
  )
}