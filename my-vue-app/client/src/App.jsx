import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Maps from './pages/Maps'

function App() {

  return (
    
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/maps' element={<Maps/>}></Route>
    </Routes>
  )

    
  
}

export default App