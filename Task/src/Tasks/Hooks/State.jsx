import React, { useState } from 'react'

export default function State() {
  const [name,setName] = useState("Saurabh")
  const [city,setCity] = useState("Rajkot")
  const [subject,setSubject] = useState("React")

  return (
    <>
      <center>   
        <h1>useState Hook</h1> 
        <table border={1}>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Subject</th>
              <th>City</th>
            </tr>
            <tr>
              <td>{name}</td>
              <td>{subject}</td>
              <td>{city}</td>
            </tr>
          </tbody>
        </table>
      </center>
    </>
  )
}