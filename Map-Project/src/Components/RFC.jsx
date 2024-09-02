import React from 'react'

export default function Index(name) {
  let arr1 = [1,2,3]
  let arr2 = [4,5,6]
  let arr3 = [...arr1,...arr2]
  
  return (
    <div>
      {
        arr3.map((e,i)=>{
          return <div>
            <p>{e}</p>
          </div>
        })
      }
    </div>
  )
}