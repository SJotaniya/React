import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Refrance from './Components/Refrence.jsx'
import FormValid from './Components/FormValid.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Refrance/> */}
    <FormValid/>
  </StrictMode>,
)