import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div style={{height: "100px", width: "100%", border: "1px solid black", display: "flex", justifyContent: "center", alignItems: "center"}}>
        
        <h1 style={{fontFamily: "Poppins', sans-serif"}}>Contact</h1>
        
        <Link to={'/'} style={{marginLeft: "30px", fontFamily: "Poppins', sans-serif", textDecoration: "none", fontSize: "18px"}}>Home</Link>
        
        <Link to={'/About'} style={{marginLeft: "30px", fontFamily: "Poppins', sans-serif", textDecoration: "none", fontSize: "18px"}}>About</Link>
    </div>
  )
}
