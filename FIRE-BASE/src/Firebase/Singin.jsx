import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig';


export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate("");

    const handleSignIn = async () => {
        let user = await signInWithEmailAndPassword(auth, email, password)
        console.log(user);
        if(user){
            navigate("/dashboard")
        }
        
    }
    return (
        <div className='signin-container'>
            <input type="text"className='signin-input' placeholder='Enter email' onChange={((e) => setEmail(e.target.value))} />
            <input type="text"className='signin-input' placeholder='Enter password' onChange={((e) => setPassword(e.target.value))} />

            <button className='signin-button' onClick={handleSignIn}>Add</button>
        </div>
    )
}