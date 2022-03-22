import { createContext, useContext, useState } from 'react'
import { signin } from '../services/pets'

export const AuthContext = createContext()
export const Provider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = async (email, password) => {
    const { data } = await signin({ email, password })
    const user = JSON.stringify(data)
    localStorage.setItem('user', user)
    setIsAuthenticated(true)
  }

  const logout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider
      {...props}
      value={{ isAuthenticated, login, logout }}
    />
  )
}
function useAuth() {
  return useContext(AuthContext)
}

export default useAuth
