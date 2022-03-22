import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './routes/Dashboard'
import Home from './routes/Home'
import PrivateRoute from './components/PrivateRoute'
import { Provider } from './contexts/AuthContext'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Provider>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Provider>
  )
}

export default App
