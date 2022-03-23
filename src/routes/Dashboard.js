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
  IconButton,
  CircularProgress,
  Box,
} from '@mui/material'

import useAuth from '../contexts/AuthContext'
import { getPetList } from '../services/pets'
import DeleteAlertDialog from '../components/DeleteAlertDialog'
import CreateOrUpdatePet from '../components/CreateOrUpdatePet'

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
              {pets.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.breed}</TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell>{row.species}</TableCell>
                  <TableCell>{row.gender}</TableCell>
                  <TableCell>{row.adopted ? 'Sim' : 'Não'}</TableCell>
                  <TableCell>
                    <IconButton aria-label="adopt-pet">
                      <img src="/images/donate-icon.png" alt="adopt-icon" />
                    </IconButton>
                    <CreateOrUpdatePet id={row.id} shouldRefetch={reload} />
                    <DeleteAlertDialog id={row.id} shouldRefetch={reload} />
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
