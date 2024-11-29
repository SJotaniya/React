import React from 'react'

function Listkey() {
    const arr = ["banana","apple", "pinaple","graps"]
  return (
    <div>
        {
            arr.map((e,i)=>{
                return <p key={i}>{e}</p>
            })
        }
    </div>
  )
}

export default Listkey