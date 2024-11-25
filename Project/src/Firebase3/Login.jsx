import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth, loginPR } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import './styles.css';


export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name || !email || !password) {
      setError("*Please fill all fields.");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(data => {
        setDoc(doc(loginPR, "users", data.user.uid), {name, email});
      });
    navigate("/dashboard");
  };

  return (
    <div className="signin">
      <p className="signin-title">Sign In</p>
      <input type="text" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} className="signin-input" />
      <input type="text" placeholder="Enter Email Here" onChange={(e) => setEmail(e.target.value)} className="signin-input"/>
      <input type="password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)} className="signin-input"/>
      <button onClick={handleSubmit} className="signin-button">Login</button>
    </div>
  )
}