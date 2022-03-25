import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { IconButton } from '@mui/material'
import styled from 'styled-components'

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
                <StyledCardContent>
                  <PetImg src={url} alt="imagem do pet" />
                  <CardText>
                    <StyledTypography>{name}</StyledTypography>
                    <StyledTypography>{gender}</StyledTypography>
                    <StyledTypography>{`${age} ano(s)`}</StyledTypography>
                  </CardText>
                </StyledCardContent>
                <StyledCardActions>
                  <IconButton
                    aria-label="adopt-pet"
                    onClick={() => adoptPet(name)}
                  >
                    <AdoptionImg src="/images/adoption.png" alt="adopt-icon" />
                  </IconButton>
                </StyledCardActions>
              </StyledCard>
            )
          })}
      </PetCards>
    </PetGallery>
  )
}

const PetGallery = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 5px;
  background: #e6bc7e;
`

const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: #333333;
`

const Paragraph = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 13px;
  text-align: center;
  padding: 5px 15px;
  color: #403423;
`

const PetCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: space-between;
  padding: 20px 0px;
`

const PetImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  object-fit: cover;
`
const StyledCard = styled(Card)`
  display: flex;
  width: 340px;
  height: 180px;
  background: #ffffff;
  box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 20px;
`

const StyledCardContent = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`

const StyledTypography = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #333333;
`

const StyledCardActions = styled(CardActions)`
  align-self: flex-end;
  justify-self: flex-end;
`

const AdoptionImg = styled.img`
  align-self: flex-end;
  justify-self: flex-end;
  width: 40px;
  height: 40px;
`

export default Gallery
