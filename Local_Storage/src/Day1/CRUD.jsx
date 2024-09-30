import React, { useEffect, useState } from 'react'

export default function CRUD() {
  const [name,setName] = useState('')
  const [subject,setSubject] = useState('')
  const [city,setCity] = useState('')

  const [record,setRecord] = useState([]);
  const [editIndex,setEditIndex] = useState(null);	

  useEffect (() => {
    let data = JSON.parse(localStorage.getItem("student"))
    setRecord(data)
  },[])

  const handleAdd = () => {
    let data1 = {id: Date.now(),name,subject,city}
    let newRecord = [...record, data1];
    localStorage.setItem("student",JSON.stringify(newRecord))

    setName("")
    setSubject("")
    setCity("")
  }

  const handleEdit = (id) => {
    let getData = record.find((item) => item.id == id)
    
    setName(getData.name)
    setSubject(getData.subject)
    setCity(getData.city)
    setEditIndex(id)
  }

  const handleDelete = (id) => {
    let deleteData = record.filter((item) => item.id !== id )
    setRecord(deleteData)
    localStorage.setItem("student",JSON.stringify(deleteData))
  }

  return (
    <>
      <h1>Local Storage ke sath Chhed-Chhaad</h1>

      <input type="text" placeholder='Enter Your Name' onChange={(e)=>setName(e.target.value)}/>
      <input type="text" placeholder='Enter Subject' onChange={(e)=>setSubject(e.target.value)}/>
      <input type="text" placeholder='Enter City' onChange={(e)=>setCity(e.target.value)}/>

      <button onClick={handleAdd}>{editIndex? "update" : "add"}</button>

      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>City</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            record ? 
            record.map((e,i) => {
              return <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.subject}</td>
                <td>{e.city}</td>
                <td><button onClick={(e) => handleEdit(e.id)}>Edit</button></td>
                <td><button onClick={(e) => handleDelete(e.id)}>Delete</button></td>
              </tr>
            }) : ''
          } 
        </tbody>
      </table>
    </>
  )
}