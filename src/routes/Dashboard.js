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
      <Container>
        <div id="total-pets">
          <Card>
            <CardContent>
              <Typography>Total de Pets</Typography>
              <Typography>{pets.length}</Typography>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardContent>
              <Typography>Total de Pets Adotados</Typography>
              <Typography>{petsAdopted.length}</Typography>
            </CardContent>
          </Card>
        </div>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Raça</TableCell>
                <TableCell>Idade</TableCell>
                <TableCell>Espécie</TableCell>
                <TableCell>Sexo</TableCell>
                <TableCell>Adotado(a)</TableCell>
                <TableCell>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pets.map((pet) => (
                <TableRow key={pet.id}>
                  <TableCell>{pet.name}</TableCell>
                  <TableCell>{pet.breed}</TableCell>
                  <TableCell>{pet.age}</TableCell>
                  <TableCell>{pet.species}</TableCell>
                  <TableCell>{pet.gender}</TableCell>
                  <TableCell>{pet.adopted ? 'Sim' : 'Não'}</TableCell>
                  <TableCell>
                    <AdoptPet pet={pet} shouldRefetch={reload} />
                    <CreateOrUpdatePet id={pet.id} shouldRefetch={reload} />
                    <DeletePet id={pet.id} shouldRefetch={reload} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <CreateOrUpdatePet shouldRefetch={reload} />
        <Button onClick={handleLogout}>SAIR</Button>
      </Container>
    )
  }
}

export default Dashboard
