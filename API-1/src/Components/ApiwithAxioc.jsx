import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function ApiwithAxioc() {
    const [data,setData] = useState("")
    useEffect(()=>{
        fetchapi()
    })

    const fetchapi = async() =>{
        let responce = await axios.get("https://fakestoreapi.com/products");
        setData(responce.data)
    }
    return (
        <div>
            <h1>ApiwithAxioc</h1>
            {
                data&&
                data.map((e,i)=>{
                    return <ul key={i}>
                        <li>{e.title}</li>
                        <li>{e.description}</li>
                        <li>{e.price}</li>
                    </ul>
                })
            }
        </div>
    )
}
