import React from 'react'
import RFC from './Components/RFC'
import RCC from './Components/RCC'
import Hooks from './Hooks/useState'
import Home from './Hooks/Home'

export default function App() {
  return (
    <div>
      {/* <RFC/> <RCC/> */}
      <Hooks/>      
      <Home/>
    </div>
  )
}