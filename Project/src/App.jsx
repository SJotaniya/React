import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Firebase2/SignUp'
import Login from './Firebase2/SignIn'
import Dashboard from './Firebase2/Dashboard';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Signup/>}></Route>
          <Route path='/signin' element={<Login/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}