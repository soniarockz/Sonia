import React from 'react'
import Display from './Components/Display'
import Register from './Components/Register'
import { Route, Routes,  BrowserRouter } from 'react-router-dom'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/"  element={<Register/>}/>
        <Route  path="/display"  element={<Display />}/>
      </Routes>
    </BrowserRouter>
  )
}