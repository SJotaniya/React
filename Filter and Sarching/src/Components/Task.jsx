import React, { useState } from 'react'
export default function Task() {

    const [name,setName] = useState("");
    const arr = [
        {name: "Saurabh",subjeact: "Js"},
        {name: "Rutul",subjeact: "c++"},
        {name: "Utshav",subjeact: "c"},
        {name: "Khushal",subjeact: "css"},
        {name: "Ayush",subjeact: "html"},
        {name: "Kartik",subjeact: "react"},
        {name: "Vrushil",subjeact: "Express.js"},
        {name: "Darshit",subjeact: "node"}
    ]

    const data = arr.filter((item)=>item.name.includes(name))
    
    return (
        <div>
            <h1>Prfilter</h1>
            <input type="text" placeholder='ENTER YOUR NAME' onChange={(e)=>setName(e.target.value)}/>

            {   data&&
                data.map((e,i)=>{
                    return <ul key={i}>
                        <li>{e.name}</li>
                        <li>{e.subjeact}</li>
                    </ul>
                })            
            }
        </div>
    )
}
