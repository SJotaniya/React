import React from 'react';
import { Link } from 'react-router-dom';
import './Crud.css'

export default function Read({data}) {
  return (
    <div className="home-container">
    <header className="header">
      <h1 className="title">Routing With CRUD Operations</h1>
      <nav className="nav-links">
        <Link className="nav-link" to={"/create"}>Create</Link>
        <Link className="nav-link" to={"/delete"}>Delete</Link>
        <Link className="nav-link" to={"/update"}>Update</Link>
      </nav>
    </header>

    <section className="content">
      <h2 className="subtitle">Records</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((e, i) => (
            <tr key={i}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  </div>
  );
}