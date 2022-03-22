import { Navigate } from 'react-router-dom'

import useAuth from '../contexts/AuthContext'

function PrivateRoute({ children, ...rest }) {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) return children

  return <Navigate to="/" />
}

export default PrivateRoute
