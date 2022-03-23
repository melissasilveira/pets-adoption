import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { IconButton } from '@mui/material'

import { getPetList } from '../services/pets'

function Gallery(props) {
  const [pets, setPets] = useState([])

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const { data } = await getPetList()
        setPets(data.pets)
      } catch (error) {
        console.log('Ocorreu um erro ao buscar a lista de pets')
      }
    }
    fetchPets()
  }, [])

  const adoptPet = (name) => {
    props.setPetName(name)
  }

  return (
    <div id="pet-gallery">
      <h2>Pets para você adotar</h2>
      <p>
        Adotar é um ato consciente e abandonar é crime. Não adote por impulso,
        adote por amor!
      </p>
      <div id="pet-cards">
        {pets
          .filter((elem) => {
            return !elem.adopted
          })
          .map(({ id, name, gender, age, url }) => {
            return (
              <Card key={id}>
                <CardContent>
                  <img src={url} alt="imagem do pet" />
                  <Typography>{name}</Typography>
                  <Typography>{gender}</Typography>
                  <Typography>{`${age} ano(s)`}</Typography>
                </CardContent>
                <CardActions>
                  <IconButton
                    aria-label="adopt-pet"
                    onClick={() => adoptPet(name)}
                  >
                    <img src="/images/donate-icon.png" alt="adopt-icon" />
                  </IconButton>
                </CardActions>
              </Card>
            )
          })}
      </div>
    </div>
  )
}

export default Gallery
