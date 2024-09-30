import React, { useEffect, useState } from 'react';
import './App.css'

export default function App() {
  const [task, setTask] = useState('');
  const [record, setRecord] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("student")) || [];
    setRecord(data);
  },[]);

  const handleAdd = () => {
    if (task.trim() === '') {
      alert("Input Field is Empty!");
      return;
    }
    let data = { id: Date.now(), task, status: "Pending" }; 
    let oldRecord = JSON.parse(localStorage.getItem("student")) || [];

    if(editIndex) {
      let singleData = record.find((item) => item.id === editIndex);
      singleData.task = task;
      localStorage.setItem("student", JSON.stringify(record));
      setEditIndex(null);
    }
    else {
      oldRecord.push(data);
      setRecord(oldRecord);
      localStorage.setItem("student", JSON.stringify(oldRecord));
    }
    setTask("");
  };

  const handleDelete = (id) => {
    let deletedData = record.filter((item) => item.id !== id);
    setRecord(deletedData);
    localStorage.setItem("student", JSON.stringify(deletedData));
  };

  const handleEdit = (id) => {
    let singleData = record.find((item) => item.id === id);
    setTask(singleData.task);
    setEditIndex(id);
  };

  const handleComplete = (id) => {
    let updatedRecords = record.map((item) => {
      if (item.id === id) {
        return {...item, status: "Completed" }; 
      }
      return item;
    });
    setRecord(updatedRecords);
    localStorage.setItem("student", JSON.stringify(updatedRecords));
  };

  return (
    <div className='parent'>
      <div className='child'>
      <center>
        <h1 style={{marginBottom : "20px", fontFamily : "cursive"}}>Task Manager</h1>
        <input className='inputField' type="text" value={task} placeholder='Enter Your Task' onChange={(e) => setTask(e.target.value)}/>
        <button className='addBtn' onClick={handleAdd}>{editIndex ? "Update" : "Add"}</button>
      </center>
      <center>
        <table className="customTable">
          <thead className="tableHeader">
            <tr className="headerRow">
              <th className="tableHeaderCell">ID</th>
              <th className="tableHeaderCell">Task</th>
              <th className="tableHeaderCell">Status</th>
              <th className="tableHeaderCell" colSpan={3}>Action</th>
            </tr>
          </thead>
          <tbody className="tableBody">
            {record &&
              record.map((e, i) => (
                <tr className="tableRow" key={i}>
                  <td className="tableCell">{e.id}</td>
                  <td className="tableCell">{e.task}</td>
                  <td className="tableCell">{e.status}</td>
                  <td className="tableCell">
                    <button className="editBtn" onClick={() => handleEdit(e.id)}>Edit</button>
                  </td>
                  <td className="tableCell">
                    <button className="deleteBtn" onClick={() => handleDelete(e.id)}>Delete</button>
                  </td>
                  <td className="tableCell">
                    <button className="completeBtn" onClick={() => handleComplete(e.id)}>Complete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </center>
      </div>
    </div>
  );
}