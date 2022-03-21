import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './routes/Dashboard'
import Home from './routes/Home'
import Login from './components/Login'

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
