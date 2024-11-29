import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Home() {

    let deta = "123456789"

    let location = useLocation('');
  return (
    <div style={{height: "100px", width: "100%", border: "1px solid black", display: "flex", justifyContent: "center", alignItems: "center"}}>
        
        <h1>{location.state?.name}</h1>
        
        <h1 style={{fontFamily: "Poppins', sans-serif", marginLeft: "20px"}}>Home</h1>
        
        <Link to={`/About/${deta}`} style={{marginLeft: "30px", fontFamily: "Poppins', sans-serif", textDecoration: "none", fontSize: "18px"}}>About</Link>
        
        <Link to={'/Contact'} style={{marginLeft: "30px",fontFamily: "Poppins', sans-serif", textDecoration: "none", fontSize: "18px"}}>Contact</Link>
    </div>
  )
}
