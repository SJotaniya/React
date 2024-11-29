import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
function App() {
  return (
    <>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/About/:id' element={<About/>}>About</Route>
        <Route path='/Contact' element={<Contact/>}>Contact</Route>
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
