import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'


function App() {

  return (
    
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
    </Routes>
  )

    
  
}

export default App