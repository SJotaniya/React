import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function About() {

    const param = useParams('');

    const navigate = useNavigate('');

    const handelbtn = () => {
        navigate("/", { state: { name: "students" } })
    }

    return (
        <div style={{ height: "100px", width: "100%", border: "1px solid black", display: "flex", justifyContent: "center", alignItems: "center" }}>

            <h1 style={{ fontFamily: "Poppins', sans-serif" }}>About</h1>

            <h1 style={{ marginLeft: "20px" }}>{param.id}</h1>

            <Link to={'/'} style={{ marginLeft: "30px", fontFamily: "Poppins', sans-serif", textDecoration: "none", fontSize: "18px" }}>Home</Link>

            <Link to={'/Contact'} style={{ marginLeft: "30px", fontFamily: "Poppins', sans-serif", textDecoration: "none", fontSize: "18px" }}>Contact</Link>

            <button onClick={handelbtn} style={{ height: "40px", width: "150px", marginLeft: "30px" }}>Go To Home</button>
        </div>
    )
}
