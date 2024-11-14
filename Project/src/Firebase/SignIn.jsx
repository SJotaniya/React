import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig';

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(users => {
        navigate("/dashboard");
      });
  };

  const handleSignUp = () => {
    navigate("/");
  };

  return (
    <div className="signin">
      <p className="signin-title">Sign In</p>
      <input type="text" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} className="signin-input"/>
      <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} className="signin-input"/>
      <button onClick={handleSubmit} className="signin-button">Login</button>
      
      <p className="signin-text">Don’t have an account?</p>
      <p onClick={handleSignUp} className="signin-link">Sign Up?</p>
    </div>
  );
}