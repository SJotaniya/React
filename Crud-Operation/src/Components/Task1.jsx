import React, { useEffect, useState } from 'react'

export default function Task1() {
    const [name,setName] = useState('');
    const [subject,setSubject] = useState('');
    const [city,setCity] = useState('');

    const [record,setRecord] = useState('');

    useEffect(()=> {
        let data = JSON.parse(localStorage.getItem("students")) || []
        setRecord(data)
    },[record])

    const handelclick = () => {
        let user = {id: Date.now(),name,subject,city}
        record.push(user);
        localStorage.setItem("students", JSON.stringify(record));
    }
    
    return (
    <div>
        <h1>Local2</h1>
        <input type="text" placeholder='ENTER THE NAME' onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder='ENTER THE SUBJEACT'onChange={(e) => setSubject(e.target.value)}/>
        <input type="text" placeholder='ENTER THE CITY' onChange={(e) => setCity(e.target.value)}/>

        <button onClick={handelclick}>Add Deta</button>

        <table border='1' width="50%">
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>subject</th>
                    <th>city</th>
                </tr>
            </thead>

            <tbody>
                {
                    record ? 
                    record.map((e,i)=>{
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
    </div>
  )
}