import client from '../provider/client'

export const contactForm = (data) => {
  return client.post('/contact/', data)
}
