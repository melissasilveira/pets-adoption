import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './routes/Dashboard'
import Home from './routes/Home'
import PrivateRoute from './components/PrivateRoute'
import { Provider } from './contexts/AuthContext'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider, createTheme } from '@mui/material'
import 'react-toastify/dist/ReactToastify.css'

const theme = createTheme({
  palette: {
    primary: {
      light: '##E6BC7E',
      main: '#BF9D69',
      dark: '#403423',
      contrastText: '#fff',
    },
    secondary: {
      light: '#FBF1E4',
      main: '#F59606',
      dark: '#403423',
      contrastText: '#000',
    },
  },
})

function App() {
  return (
    <Provider>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </Provider>
  )
}

export default App
