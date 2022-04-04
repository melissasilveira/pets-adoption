import React, { useState, useEffect } from 'react'
import { IconButton } from '@mui/material'
import { toast } from 'react-toastify'

import { getPetList } from '../services/pets'

import {
  PetGallery,
  Title,
  Paragraph,
  PetCards,
  StyledCard,
  CardContent,
  PetImg,
  CardData,
  StyledTypography,
  CardActions,
  AdoptionImg,
} from '../styles/gallery'

function Gallery(props) {
  const [pets, setPets] = useState([])

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const { data } = await getPetList()
        setPets(data.pets)
      } catch (error) {
        console.log(error)
        toast.error('Ocorreu um erro ao buscar a lista de pets')
      }
    }
    fetchPets()
  }, [])

  const adoptPet = (name) => {
    props.setPetName(name)
    const scrollForm = document.getElementById('contact')
    scrollForm.scrollIntoView()
  }

  return (
    <PetGallery id="pet-gallery">
      <Title>Pets para você adotar</Title>
      <Paragraph>
        Adotar é um ato consciente e abandonar é crime. Não adote por impulso,
        adote por amor!
      </Paragraph>
      <PetCards id="pet-cards">
        {pets
          .filter((elem) => {
            return !elem.adopted
          })
          .map(({ id, name, gender, age, url }) => {
            return (
              <StyledCard key={id}>
                <CardContent>
                  <PetImg src={url} alt="imagem do pet" />
                  <CardData>
                    <StyledTypography>{name}</StyledTypography>
                    <StyledTypography>{gender}</StyledTypography>
                    <StyledTypography>{`${age} ano(s)`}</StyledTypography>
                  </CardData>
                  <CardActions>
                    <IconButton
                      aria-label="adopt-pet"
                      onClick={() => adoptPet(name)}
                    >
                      <AdoptionImg
                        src="/images/adoption.png"
                        alt="adopt-icon"
                      />
                    </IconButton>
                  </CardActions>
                </CardContent>
              </StyledCard>
            )
          })}
      </PetCards>
    </PetGallery>
  )
}

export default Gallery
