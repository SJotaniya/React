import { doc, getDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { auth, loginPR } from '../../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

export default function Dashboard() {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState("");

  useEffect(() => {
    let subscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log(currentUser);
      }
    });
    return subscribe; 
  }, []);

  useEffect(() => {
    if (user) {
      fetchUser();
    }
  }, [user]);

  const fetchUser = () => {
    getDoc(doc(loginPR, "users", user.email))
      .then((data) => {
        console.log(data.data());
        setUserData(data.data());
      });
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-header">Welcome to Dashboard</h1>
      {userData && (
        <p className='name'> {userData.displayName} </p>
      )}
    </div>
  );
}