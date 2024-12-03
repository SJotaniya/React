import React from 'react'
import { Provider } from 'react-redux'
import store from './Store/Store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Womans from "./Categories/Womans"
import Mans from "./Categories/Mans"
import Jewellery from './Categories/Jewellery'
import Electronics from './Categories/Electronics'
import Dashboard from './Dashboard'

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path='/womans' element={<Womans/>}></Route>
            <Route path='/mans' element={<Mans/>}></Route>
            <Route path='/jewellery' element={<Jewellery/>}></Route>
            <Route path='/electronics' element={<Electronics/>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App