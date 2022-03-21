import { useForm, Controller } from 'react-hook-form'
import React, { useState } from 'react'
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
  FormControl,
} from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'

import { registerSchema } from '../schemas/auth'

function Dashboard() {
  const [open, setOpen] = useState(false)

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

  return (
    <Container>
      <div id="total-pets">
        <Card>
          <CardContent>
            <Typography>Total de Pets</Typography>
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
          <TableBody></TableBody>
        </Table>
      </TableContainer>
      <Button variant="outlined" onClick={handleClickOpen}>
        ENTRADA DE PET
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Cadastro de novo pet</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(handleClose)}>
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
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="species-label">Espécie</InputLabel>
              <Select
                labelId="species-label"
                id="species"
                value={''}
                label="Espécie"
              >
                <MenuItem value={'Gato'}>Gato</MenuItem>
                <MenuItem value={'Cachorro'}>Cachorro</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="sex-label">Sexo</InputLabel>
              <Select labelId="sex-label" id="sex" value={''} label="Sexo">
                <MenuItem value={'Feminino'}>Feminino</MenuItem>
                <MenuItem value={'Masculino'}>Masculino</MenuItem>
              </Select>
            </FormControl>
            <Controller
              name="URL"
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
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CADASTRAR</Button>
          <Button onClick={handleClose}>CANCELAR</Button>
        </DialogActions>
      </Dialog>
      <Button
        type="button"
        variant="contained"
        color="primary"
        style={{ marginTop: '10px' }}
      >
        SAIR
      </Button>
    </Container>
  )
}

export default Dashboard
