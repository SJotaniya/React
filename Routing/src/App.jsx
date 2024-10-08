import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Project/Home'
import Create from './Project/Create'
import Update from './Project/Update'
import Delete from './Project/Delete'


function App() {
  const [data, setData] = useState([
    {id: 1 , name: "Saurabh" , subject: "React"},
    {id: 2 , name: "Darshit" , subject: "Node"},
    {id: 3 , name: "Khushal" , subject: "JavaScript"}
  ]);

  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home data={data}/>}></Route>
          <Route path='/create' element={<Create data={data} setData={setData}/>}></Route>
          <Route path='/update' element={<Update data={data} setData={setData}/>}></Route>
          <Route path='/delete' element={<Delete data={data} setData={setData}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App