import client from '../provider/client'

export const signin = (body) => {
  return client.post('/login/authenticate', body)
}
