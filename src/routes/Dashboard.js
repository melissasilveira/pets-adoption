import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
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
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { yupResolver } from '@hookform/resolvers/yup'

import useAuth from '../contexts/AuthContext'
import { registerSchema } from '../schemas/auth'
import { getPetList, postPet } from '../services/pets'

function Dashboard() {
  const [open, setOpen] = useState(false)
  const [pets, setPets] = useState([])

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const { data } = await getPetList()
        setPets(data.pets)
      } catch {
        console.log('Ocorreu um erro ao buscar a lista de pets')
      }
    }
    fetchPets()
  }, [])

  const navigate = useNavigate()

  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(registerSchema),
  })

  const handleRegister = async (data) => {
    try {
      console.log(data)
      await postPet(data)
      handleClose()
    } catch (error) {
      console.log(error)
    }
  }

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
              <TableRow key={row.petId}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.breed}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.species}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{row.adopted}</TableCell>
                <TableCell>
                  <IconButton aria-label="adopt-pet">
                    <img src="/images/donate-icon.png" alt="adopt-icon" />
                  </IconButton>
                  <IconButton aria-label="edit-pet">
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete-pet">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="outlined" onClick={handleClickOpen}>
        ENTRADA DE PET
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit(handleRegister)}>
          <DialogTitle>Cadastro de novo pet</DialogTitle>
          <DialogContent>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  margin="dense"
                  variant="outlined"
                  label="Nome"
                  color="secondary"
                  error={Boolean(errors.name)}
                  helperText={errors.name?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="breed"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  margin="dense"
                  variant="outlined"
                  label="Raça"
                  color="secondary"
                  error={Boolean(errors.breed)}
                  helperText={errors.breed?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="age"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                  margin="dense"
                  variant="outlined"
                  label="Idade"
                  color="secondary"
                  error={Boolean(errors.age)}
                  helperText={errors.age?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="species"
              label="Espécie"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <React.Fragment>
                  <InputLabel id="species-label">Espécie</InputLabel>
                  <Select
                    labelId="species-label"
                    id="species"
                    label="Espécie"
                    {...field}
                  >
                    <MenuItem value={'cachorro'}>Cachorro</MenuItem>
                    <MenuItem value={'gato'}>Gato</MenuItem>
                  </Select>
                </React.Fragment>
              )}
            />
            <Controller
              name="gender"
              label="Sexo"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <React.Fragment>
                  <InputLabel id="gender-label">Sexo</InputLabel>
                  <Select
                    labelId="gender-label"
                    id="gender"
                    label="Sexo"
                    {...field}
                  >
                    <MenuItem value={'Fêmea'}>Fêmea</MenuItem>
                    <MenuItem value={'Macho'}>Macho</MenuItem>
                  </Select>
                </React.Fragment>
              )}
            />
            <Controller
              name="url"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  margin="dense"
                  variant="outlined"
                  label="URL da Imagem"
                  color="secondary"
                  error={Boolean(errors.URL)}
                  helperText={errors.URL?.message}
                  {...field}
                />
              )}
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit">CADASTRAR</Button>
            <Button onClick={handleClose}>CANCELAR</Button>
          </DialogActions>
        </form>
      </Dialog>
      <Button onClick={handleLogout}>SAIR</Button>
    </Container>
  )
}

export default Dashboard
