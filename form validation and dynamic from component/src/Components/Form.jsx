import React, { useState } from 'react'

export default function FormCom() {
  const [name, setName] = useState('');
  const [sub, setSub] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');

  const [nameErr, setNameErr] = useState('');
  const [subErr, setSubErr] = useState('');
  const [emialErr, setEmailErr] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      console.log("name Required");
      setNameErr("name Required")
    } else {
      setNameErr("")
    }
    if (!sub) {
      console.log("Subject Required")
      setSubErr("Subject Required")
    }
    else {
      setSubErr("")
    }
    if (!email) {
      console.log("Email Required");
      setEmailErr("Email Required")
    } else if (!email.includes("@")) {
      setEmailErr("Email is not valid")
    }
    else {
      setEmailErr("")
    }
  }

  return (
    <div>
      <h1>Form</h1>

      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
        <span>{nameErr}</span>
        <input type="text" placeholder='Enter Subject' onChange={(e) => setSub(e.target.value)} />
        <span>{subErr}</span>
        <input type="Email"  placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
        <span>{emialErr}</span>

        <select name="" id="" onChange={(e) => setCategory(e.target.value)}>
          <option value="">cetegory</option>
          <option value="electric">Electric</option>
          <option value="Clothing">Clothing</option>
        </select>
        {
          category == "electric" && <input type='text' placeholder='Enter Warrenty' />
        }

        {
          category == "Clothing" && <input type='text' placeholder='Enter Return Period' />
        }

        <button type='submit'style={{margin: "20px 0"}}>submit</button>
      </form>
    </div>
  )
}