import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Crud.css'

export default function Create({ data, setData }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  
  const handelsubmit = () => {
    let obj = { id: data.length + 1, name: name, subject: subject };
    setData([...data, obj]);
    navigate("/");
  }

  const handelbtn = () => {
    navigate("/", { state: { name: "students" } });
  }

  return (
    <div className="create-container"> {/* Add class name for styling */}
      <h1 className="title">Create</h1>
      <input className="input-field" type="text" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} />
      <input className="input-field" type="text" placeholder="Enter Subject" onChange={(e) => setSubject(e.target.value)} />
      <button className="submit-button" onClick={handelsubmit}>Submit</button>
      <button className="back-button" onClick={handelbtn}>Go to home</button>
    </div>
  )
}