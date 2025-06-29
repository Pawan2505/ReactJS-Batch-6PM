import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './auth/SignIn'
import CrudApp from './components/CrudApp'
import SignUp from './auth/SignUp'

const App = () => {
  return (
  <BrowserRouter>
  
  <Routes>
    <Route path='/' element={<SignIn/>}/>
    <Route path='/dashboard' element={<CrudApp/>}/>
    <Route path='/signup' element={<SignUp/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
