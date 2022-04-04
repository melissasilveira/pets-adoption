import client from '../provider/client'

const apiCode = '0m6h415'

export const getPetList = () => {
  return client.get(`/pets/${apiCode}`)
}

export const getPet = (id) => {
  return client.get(`/pets/${apiCode}/${id}`)
}

export const editPet = (id, body) => {
  return client.put(`/pets/${apiCode}/${id}`, body)
}

export const postPet = (data) => {
  return client.post(`/pets/${apiCode}`, data)
}

export const deletePet = (id) => {
  return client.delete(`/pets/${apiCode}/${id}`)
}
