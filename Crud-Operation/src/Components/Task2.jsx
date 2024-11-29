import React, { useEffect, useState } from 'react'

export default function Task2() {
    const [name,setName] = useState('');
    const [subject,setSubject] = useState('');
    const [city,setCity] = useState('');
    const [record,setRecord] = useState(null);
    const [editindex,setEditIndex] = useState(null);
    
    useEffect(() => {
        let deta = JSON.parse(localStorage.getItem("student")) || []
        setRecord(deta)
    },[record])
    
    const handeladd = () => {
        let deta = {id: Date.now(),name,subject,city}
        record.push(deta);
        localStorage.setItem("student",JSON.stringify(record))
        setName("");
        setSubject("");
        setCity("");
    }

    const handleDelete = (id) =>{
        let deletedeta = record.filter((item) => item.id != id)
        setRecord(deletedeta)
        localStorage.setItem("student",JSON.stringify(deletedeta))
    }

    const handleEdit = (id) => {
        let singleDeta = record.find((item)=> item.id == id)
        setName(singleDeta.name)
        setSubject(singleDeta.subject)
        setCity(singleDeta.city)
        setEditIndex(id)
    }

  return (
    <div>
        <h1>CRUD With Local Storage</h1>

        <input type="text" value={name} placeholder='ENTER THE NAME' onChange={(e)=> setName(e.target.value)}/>
        <input type="text" value={subject} placeholder='ENTER THE SUBJEACT' onChange={(e) => setSubject(e.target.value)}/>
        <input type="text" value={city} placeholder='ENTER THE CITY' onChange={(e) => setCity(e.target.value)}/>

        <button onClick={handeladd}>{editindex? "update" : "add"}</button>

        <table border="1" width="50%">
            <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>subject</th>
                        <th>city</th>
                        <th colSpan={2}>Action</th>
                    </tr>
            </thead>
            
            <tbody>
                {   record?
                    record.map((e,i)=>{
                        return <tr key={i}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.subject}</td>
                            <td>{e.city}</td>
                            <td><button onClick={() => handleEdit(e.id)}>Edit</button></td>
                            <td><button onClick={() => handleDelete(e.id)}>Delete</button></td>
                        </tr>
                    }): " "
                }
            </tbody>
        </table>
    </div>
  )
}