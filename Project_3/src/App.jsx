import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() =>{
    nameRef.current.focus()
  })
  useEffect(() => {
    console.log('Form data updated:', { name, email, password});
  }, [name, email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    alert("Login successfully...")

    if (name.trim() === '') {
      errors.name = 'Name is required';
      nameRef.current.focus();
    }
    if (!/^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(email)) {
      errors.email = 'Valid email is required';
      if (!errors.name) emailRef.current.focus();
    }
    if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      if (!errors.name && !errors.email) passwordRef.current.focus();
    }

    if (Object.keys(errors).length === 0) {
      alert('Form submitted successfully');
      setName('');
      setEmail('');
      setPassword('');
      setMessage('');
    } else {
      setError(errors);
    }
  };

  return (
    <div class="container">
        <div class="form-wrapper">
            <h1 class="heading">Advance Login Form</h1>
            <form class="form" novalidate onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" ref={nameRef} placeholder="Enter your name" required/>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" ref={emailRef} placeholder="Enter your email" required/>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" ref={passwordRef} placeholder="Enter your password" required/>
                </div>
                <button type="submit" class="submit-button">Submit</button>
            </form>
        </div>
    </div>
  );
};

export default App;