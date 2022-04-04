import { createContext, useContext, useState } from 'react'
import { signin } from '../services/login'

export const AuthContext = createContext()
export const AuthProvider = (props) => {
  const userLocalStorage = JSON.parse(localStorage.getItem('user'))
  const [isAuthenticated, setIsAuthenticated] = useState(
    userLocalStorage ? true : false
  )

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
