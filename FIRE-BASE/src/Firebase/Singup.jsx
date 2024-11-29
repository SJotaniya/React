import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseConfig';

export default function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate("");

    const handleSignUp = async () => {
        let user = await createUserWithEmailAndPassword(auth, email, password)
        console.log(user);

        if (user) {
            navigate("/signin");
        }
        else {
            alert("Enter email, password")
        }
    }

    return (
        <div className='signup-container'>
            <input type="text" placeholder='Enter email' className='signup-input' onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder='Enter password' className='signup-input' onChange={((e) => setPassword(e.target.value))} />

            <button className='signup-button' onClick={handleSignUp}>Add</button>

            <Link to="/signin" className='signup-link'>Already have an account? Sign In ?</Link>
        </div>
    )
}