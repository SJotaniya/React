import React from 'react'

export default function Basic() {
  localStorage.setItem("Name","Saurabh")
  localStorage.setItem("City", "Rajkot")

  let name = localStorage.getItem("Name")
  console.log(name)

  let city = localStorage.getItem("City")
  console.log(city)

  localStorage.removeItem("Name")
  localStorage.removeItem("City")

  let arr1 = {Name : "Saurabh", City : "Rajkot"}
  localStorage.setItem("Array1", JSON.stringify(arr1))  

  let arr2 = JSON.parse(localStorage.getItem("Array1"))
  console.log(arr2)
  
  return (
    <>
      <h1>Local Storage</h1>
    </>
  )
}
