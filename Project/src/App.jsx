import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Firebase3/Login'
import Dashboard from './Firebase3/Dashboard';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}