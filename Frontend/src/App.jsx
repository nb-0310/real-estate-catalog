import React from 'react'
//import Sidebar from './Components/Sidebar'
//import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'

const App = () => {
  return (
    
      

    <BrowserRouter>
    <Routes>
      <Route path = '/' element={<Signup/>}/>
      <Route path = '/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App