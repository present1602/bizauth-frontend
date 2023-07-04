import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './views/Login'
import Register from './views/Regsiter'
import ProtectedRoute from './shared/route/ProtectedRoute'
import PublicRoute from './shared/route/PublicRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<ProtectedRoute />} path='/private' />
        <Route element={<div>home</div>} path='/' />
        <Route element={<PublicRoute />} path='/auth'>
          <Route element={<Login />} path='login' />
          <Route element={<Register />} path='register' />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
