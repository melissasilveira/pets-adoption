import client from '../provider/client'

const apiCode = '0m6h415'

export const signin = (body) => {
  return client.post('/login/authenticate', body)
}

export const getPetList = () => {
  return client.get(`/pets/${apiCode}`)
}

export const getPet = (petId) => {
  return client.get(`/pets/${apiCode}/${petId}`)
}

export const editPet = (petId, body) => {
  return client.put(`/pets/${apiCode}/${petId}`, body)
}

export const postPet = (data) => {
  return client.post(`/pets/${apiCode}`, data)
}

export const deletePet = (petId) => {
  return client.delete(`/pets/${apiCode}/${petId}`)
}
