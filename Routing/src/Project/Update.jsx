import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Crud.css'

export default function Update({data, setData}) {
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [editIndex, setEditIndex] = useState("");

  const handleEdit = () => {
    let editData = data.find((item) => item.id == id)
    setName(editData.name)
    setSubject(editData.subject)
    setEditIndex(editData.id)
  }

  const handleUpdate = () => {
    if (editIndex) {  
      const updateData = data.map((item) => item.id === editIndex ? { ...item, name, subject } : item)
      setData(updateData)
    }
    navigate("/")
  }

  return (
    <div className="update-container">
      <input  className="input-field" type="text" placeholder="Enter Your I'D" onChange={(e) => setId(e.target.value)} />
      <button className="edit-button" onClick={handleEdit}>Edit</button>
      <input className="input-field" type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input className="input-field" type="text" placeholder="Enter subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
      <button className="update-button" onClick={handleUpdate}>Update</button>
    </div>
  )
}