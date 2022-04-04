import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
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
      <StyledBox>
        <CircularProgress />
      </StyledBox>
    )
  } else {
    return (
      <StyledDiv>
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
              <StyledTableRow>
                <StyledTableCell>Nome</StyledTableCell>
                <StyledTableCell isHiddenOnMobile>Raça</StyledTableCell>
                <StyledTableCell isHiddenOnMobile>Idade</StyledTableCell>
                <StyledTableCell isHiddenOnMobile>Espécie</StyledTableCell>
                <StyledTableCell isHiddenOnMobile>Sexo</StyledTableCell>
                <StyledTableCell>Adotado(a)</StyledTableCell>
                <StyledTableCell id="pet-actions">Ações</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {pets.map((pet) => (
                <StyledTableRow key={pet.id}>
                  <StyledTableCell>{pet.name}</StyledTableCell>
                  <StyledTableCell isHiddenOnMobile>
                    {pet.breed}
                  </StyledTableCell>
                  <StyledTableCell isHiddenOnMobile>{pet.age}</StyledTableCell>
                  <StyledTableCell isHiddenOnMobile>
                    {pet.species}
                  </StyledTableCell>
                  <StyledTableCell isHiddenOnMobile>
                    {pet.gender}
                  </StyledTableCell>
                  <StyledTableCell>
                    {pet.adopted ? 'Sim' : 'Não'}
                  </StyledTableCell>
                  <StyledTableCell>
                    <PetActions>
                      <AdoptPet pet={pet} shouldRefetch={reload} />
                      <CreateOrUpdatePet id={pet.id} shouldRefetch={reload} />
                      <DeletePet id={pet.id} shouldRefetch={reload} />
                    </PetActions>
                  </StyledTableCell>
                </StyledTableRow>
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
      </StyledDiv>
    )
  }
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  @media only screen and (min-width: 480px) {
    padding: 20px;
    margin: 20px;
  }
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
    gap: 220px;
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
  @media only screen and (min-width: 480px) {
    width: 290px;
    height: 109px;
  }
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
  @media only screen and (min-width: 480px) {
    width: 800px;
    align-items: center;
  }
`
const Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #403423;
  margin: 5px;
  justify-self: left;
  align-self: start;
`
const StyledTable = styled(Table)`
  background: #ffffff;
  border-radius: 10px;
  border-collapse: unset;
  overflow: hidden;
`
const StyledTableCell = styled(TableCell)(
  ({ theme, isHiddenOnMobile }) => `
  &.${tableCellClasses.head} {
    background-color: ${theme.palette.common.white};
    color: ${theme.palette.common.black};
    font-size: 10;
    padding: 0px;
  }
  &.${tableCellClasses.body} {
    font-size: 10;
    padding: 0px;
  }
  display: ${isHiddenOnMobile ? 'none' : 'table-cell'};
  text-align: center;
  @media only screen and (min-width: 480px) {
    display: table-cell;
  }
`
)

const StyledTableRow = styled(TableRow)(
  ({ theme }) =>
    console.log(theme) || {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.secondary.light,
      },
      '&:last-child td, &:last-child th': {
        border: 0,
      },
    }
)

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  margin: 15px 10px;
  @media only screen and (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 220px;
  }
`
const StyledButton = styled(Button)`
  margin-top: 20px;
  width: 340px;
  height: 35px;
  @media only screen and (min-width: 480px) {
    margin-top: 0px;
    width: 290px;
    height: 35px;
  }
`
const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`
const PetActions = styled.div`
  display: flex;
  justify-content: center;
`
export default Dashboard
