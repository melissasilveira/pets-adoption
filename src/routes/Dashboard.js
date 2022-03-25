import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
  Button,
  CircularProgress,
  Box,
} from '@mui/material'

import useAuth from '../contexts/AuthContext'
import { getPetList } from '../services/pets'
import DeletePet from '../components/DeletePet'
import CreateOrUpdatePet from '../components/CreateOrUpdatePet'
import AdoptPet from '../components/AdoptPet'
import styled from '@emotion/styled'

function Dashboard() {
  const [pets, setPets] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [shouldReload, setShouldReload] = useState(true)

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const { data } = await getPetList()
        setIsLoading(false)
        setPets(data.pets)
        setShouldReload(false)
        console.log(data.pets)
      } catch {
        console.log('Ocorreu um erro ao buscar a lista de pets')
      }
    }
    if (shouldReload) {
      fetchPets()
    }
  }, [shouldReload])

  const reload = () => setShouldReload(true)

  const navigate = useNavigate()

  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const petsAdopted = pets.filter((elem) => {
    return elem.adopted
  })

  if (isLoading) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    )
  } else {
    return (
      <StyledContainer>
        <CardsContainer>
          <StyledCard>
            <StyledCardContent>
              <StyledTypography>Total de Pets</StyledTypography>
              <StyledNumber>{pets.length}</StyledNumber>
            </StyledCardContent>
          </StyledCard>
          <StyledCard>
            <StyledCardContent>
              <StyledTypography>Total de Pets Adotados</StyledTypography>
              <StyledNumber>{petsAdopted.length}</StyledNumber>
            </StyledCardContent>
          </StyledCard>
        </CardsContainer>
        <StyledTableContainer>
          <Title>LISTA DE PET</Title>
          <StyledTable>
            <TableHead>
              <TableRow>
                <PetName>Nome</PetName>
                <PetBreed>Raça</PetBreed>
                <PetAge>Idade</PetAge>
                <PetSpecies>Espécie</PetSpecies>
                <PetGender>Sexo</PetGender>
                <Adopted>Adotado(a)</Adopted>
                <StyledTableCell>Ações</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pets.map((pet) => (
                <TableRow key={pet.id}>
                  <PetName>{pet.name}</PetName>
                  <PetBreed>{pet.breed}</PetBreed>
                  <PetAge>{pet.age}</PetAge>
                  <PetSpecies>{pet.species}</PetSpecies>
                  <PetGender>{pet.gender}</PetGender>
                  <Adopted>{pet.adopted ? 'Sim' : 'Não'}</Adopted>
                  <PetActions>
                    <AdoptPet pet={pet} shouldRefetch={reload} />
                    <CreateOrUpdatePet id={pet.id} shouldRefetch={reload} />
                    <DeletePet id={pet.id} shouldRefetch={reload} />
                  </PetActions>
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </StyledTableContainer>
        <ButtonBox>
          <CreateOrUpdatePet shouldRefetch={reload} />
          <StyledButton variant="contained" onClick={handleLogout}>
            SAIR
          </StyledButton>
        </ButtonBox>
      </StyledContainer>
    )
  }
}

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
`
const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 5px;
  margin: 10px;

  @media only screen and (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
const StyledCard = styled(Card)`
  width: 340px;
  height: 80px;
  background: #e6bc7e;
  border: 1px solid #040404;
  box-sizing: border-box;
  box-shadow: 4px 4px 5px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-bottom: 10px;
`
const StyledCardContent = styled(CardContent)`
  display: flex;
  justify-content: space-between;
`
const StyledTypography = styled(Typography)`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #403423;
`
const StyledNumber = styled(Typography)`
  font-style: normal;
  font-weight: 700;
  font-size: 49px;
  line-height: 57px;
  color: #000000;
`
const StyledTableContainer = styled(TableContainer)`
  width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #e6bc7e;
  border: 1px solid #040404;
  box-sizing: border-box;
  box-shadow: 4px 4px 5px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 15px;
  margin: 20px 10px;
`
const Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #403423;
  margin: 5px;
  justify-self: left;
`
const StyledTable = styled(Table)`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 10px;
  width: 310px;
`
const PetName = styled(TableCell)`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
`
const PetBreed = styled(TableCell)`
  display: none;
  @media only screen and (min-width: 480px) {
    display: block;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #000000;
  }
`
const PetAge = styled(TableCell)`
  display: none;
  @media only screen and (min-width: 480px) {
    display: block;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #000000;
  }
`
const PetSpecies = styled(TableCell)`
  display: none;
  @media only screen and (min-width: 480px) {
    display: block;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #000000;
  }
`
const PetGender = styled(TableCell)`
  display: none;
  @media only screen and (min-width: 480px) {
    display: block;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #000000;
  }
`
const Adopted = styled(TableCell)`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
`
const PetActions = styled(TableCell)`
  display: flex;
  justify-content: center;
`
const StyledTableCell = styled(TableCell)`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
`
const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  margin: 15px 10px;
`
const StyledButton = styled(Button)`
  margin-top: 20px;
`
export default Dashboard
