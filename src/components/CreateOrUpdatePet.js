import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
  IconButton,
} from '@mui/material'
import { registerSchema } from '../schemas/auth'
import { postPet, editPet, getPet } from '../services/pets'
import EditIcon from '@mui/icons-material/Edit'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'

function CreateOrUpdatePet(props) {
  const [open, setOpen] = useState(false)
  const { id } = props

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const { data } = await getPet(id)
        setValue('name', data.pet.name, { shouldValidate: true })
        setValue('breed', data.pet.breed, { shouldValidate: true })
        setValue('age', data.pet.age, { shouldValidate: true })
        setValue('species', data.pet.species, { shouldValidate: true })
        setValue('gender', data.pet.gender, { shouldValidate: true })
        setValue('url', data.pet.url, { shouldValidate: true })
      } catch (error) {
        console.log('Ocorreu um erro ao buscar o pet.')
        console.log(error)
      }
    }
    if (id) {
      fetchPet()
    }
  }, [id])

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
      props.shouldRefetch()
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdate = async (body) => {
    try {
      await editPet(id, body)
      handleClose()
      toast.success('Pet editado com sucesso.', {
        position: toast.POSITION.TOP_CENTER,
      })
      props.shouldRefetch()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {id ? (
        <IconButton aria-label="edit" onClick={handleClickOpen}>
          <EditIcon />
        </IconButton>
      ) : (
        <Button variant="outlined" onClick={handleClickOpen}>
          ENTRADA DE PET
        </Button>
      )}
      <Dialog open={open} onClose={handleClose}>
        <form
          onSubmit={
            id ? handleSubmit(handleUpdate) : handleSubmit(handleRegister)
          }
        >
          <DialogTitle>
            {id ? 'Editar pet' : 'Cadastro de novo pet'}
          </DialogTitle>
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
                    <MenuItem value={'Cachorro'}>Cachorro</MenuItem>
                    <MenuItem value={'Gato'}>Gato</MenuItem>
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
            <Button type="submit">{id ? 'SALVAR' : 'CADASTRAR'}</Button>
            <Button onClick={handleClose}>CANCELAR</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  )
}

export default CreateOrUpdatePet
