import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth, loginPR, googleProvider   } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import './styles.css';

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name || !email || !password) {
      alert("*Please fill all fields.");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(data => {
        setDoc(doc(loginPR, "users", data.user.uid), {name, email});
      });
    navigate("/dashboard");
  };

  const handleGoogleSignIn = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    await setDoc(doc(loginPR, 'users', user.email), {
      email: user.email,
      displayName: user.displayName,
    });

    alert(`Welcome, ${user.displayName}!`);
    navigate('/dashboard');
  };

  return (
    <div className="signin">
      <p className="signin-title">Sign In</p>
      <input type="text" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} className="signin-input" />
      <input type="text" placeholder="Enter Email Here" onChange={(e) => setEmail(e.target.value)} className="signin-input"/>
      <input type="password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)} className="signin-input"/>
      <button onClick={handleSubmit} className="signin-button">Login</button>
      <p className="google-signin" onClick={handleGoogleSignIn}>
        Sign In with Google
      </p>
    </div>
  )
}