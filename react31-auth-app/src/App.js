import React from 'react'
import CrudApp from './components/CrudApp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<CrudApp/>} />
        <Route path="/" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
