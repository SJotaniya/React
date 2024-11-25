import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth, loginPR } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [hobby, setHobby] = useState("");
  const [error, setError] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name || !email || !password || !city || !hobby) {
      setError("*Please fill all fields.");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(data => {
        setDoc(doc(loginPR, "users", data.user.uid), { name, email, city, hobby });
      });
    navigate("/dashboard");
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  return (
    <div className="signup">
      <p className="signup-title">Sign Up</p>
      <input type="text" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} className="signup-input" />
      <input type="text" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} className="signup-input" />
      <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} className="signup-input" />
      <input type="text" placeholder="Enter City Name" onChange={(e) => setCity(e.target.value)} className="signup-input" />
      <input type="text" placeholder="Enter Hobby" onChange={(e) => setHobby(e.target.value)} className="signup-input" />

      {error && <p className="signup-error">{error}</p>}

      <button onClick={handleSubmit} className="signup-button">Submit</button>
      <p onClick={handleSignIn} className="signup-link">Sign In</p>
    </div>
  );
}