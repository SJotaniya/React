import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export default function Dashboard() {
  const [user, setUser] = useState('');
  const [userData, setUserData] = useState('');

  useEffect(() => {
    let subscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log(currentUser);
      }
    });
  }, []);

  useEffect(() => {
    if (user) {
      fetchUser();
    }
  }, []);

  const fetchUser = () => {
    getDoc(doc(db, 'users', user.uid)).then((data) => {
      console.log(data.data());
      setUserData(data.data());
    });
  };

  return (
    <div className="dashboard">
      <p className="dashboard-title">Login Details</p>
      <div>
      {userData && (
        <table border={1} className="dashboard-table">
          <thead className="dashboard-table-header">
            <tr className="dashboard-table-row">
              <th className="dashboard-table-cell">Name</th>
              <th className="dashboard-table-cell">Email</th>
              <th className="dashboard-table-cell">Hobby</th>
              <th className="dashboard-table-cell">City</th>
              </tr>
            </thead>
            <tbody>
              <tr className="dashboard-table-row">
                <td className="dashboard-table-cell">{userData.name}</td>
                <td className="dashboard-table-cell">{userData.email}</td>
                <td className="dashboard-table-cell">{userData.hobby}</td>
                <td className="dashboard-table-cell">{userData.city}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
