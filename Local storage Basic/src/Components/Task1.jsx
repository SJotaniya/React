import React from 'react'

export default function Task1() {
  localStorage.setItem("name", "students")
  localStorage.setItem("course", "GIM")

  let data = localStorage.getItem("name")
  console.log(data);

  let data2 = localStorage.getItem("course")
  console.log(data2);

  localStorage.removeItem("name")
  localStorage.removeItem("course")

  let details = { name: "STUDENTS1", id: "2" }
  localStorage.setItem("MY DETAILS", JSON.stringify(details))

  let FINAL = JSON.parse(localStorage.getItem("MY DETAILS"))
  console.log(FINAL);

  return (
    <div>
      local storage
    </div>
  )
}
