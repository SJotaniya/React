import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Crud.css'

export default function Delete({ data, setData }) {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  const handelbtn = () => {
    navigate("/", { state: { name: "students" } })
  }

  const handelDelete = () => {
    let deleteItem = data.filter((item) => item.id != id);
    setData(deleteItem);
    navigate("/")
  }

  return (
    <div className="delete-container">
      <h1 className="title">Delete</h1>
      <input className="input-field" type="text" placeholder="Enter I'D" onChange={(e) => setId(e.target.value)} />
      <button className="delete-button" onClick={handelDelete}>Delete</button>
      <button className="back-button" onClick={handelbtn}>Read</button>
    </div>
  )
}