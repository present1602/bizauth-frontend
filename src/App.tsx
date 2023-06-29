import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './views/Login'
import Register from './views/Regsiter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path='/login' />
        <Route element={<Register />} path='/register' />
      </Routes>
    </BrowserRouter>
  )
}

export default App
