import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth, loginPR } from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import './styles.css';

export default function Dashboard() {
  const [user, setUser] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    let subscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        // console.log(currentUser);
      }
    });
  },[]);

  useEffect(() => {
    if (user) {
      fetchUser();
    }
  }, [user]);

  const fetchUser = () => {
    getDoc(doc(loginPR, 'users', user.uid)).then((data) => {
      // console.log(data.data());
      setData(data.data());
    });
  };
  

  return (
    <div className="dashboard">
      <p className='name'><a className='hello'>Hello</a> {data.name}</p>
      <p className='greet'>Welcome to Dashboard.</p>
    </div>
  )
}
