import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,
  MenuItem,
  Button,
  IconButton,
} from '@mui/material'
import { common } from '@mui/material/colors'
import { registerSchema } from '../schemas/auth'
import { postPet, editPet, getPet } from '../services/pets'
import EditIcon from '@mui/icons-material/Edit'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import styled from '@emotion/styled'

function CreateOrUpdatePet(props) {
  const [open, setOpen] = useState(false)
  const { id } = props
  const [petSpecies, setPetSpecies] = useState()
  const [petGender, setPetGender] = useState()

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

  const handleSpeciesChange = (event) => {
    setPetSpecies(event.target.value)
  }

  const handleGenderChange = (event) => {
    setPetGender(event.target.value)
  }

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
      await editPet(id, { ...body, adopted: false })
      handleClose()
      toast.success('Pet editado com sucesso.', {
        position: toast.POSITION.TOP_CENTER,
      })
      props.shouldRefetch()
    } catch (error) {
      toast.error('Ocorreu um erro ao tentar editar o pet.')
      console.log(error)
    }
  }

  const petSpeciesOptions = [
    {
      value: 'Cachorro',
      label: 'Cachorro',
    },
    {
      value: 'Gato',
      label: 'Gato',
    },
  ]
  const petGenderOptions = [
    {
      value: 'Macho',
      label: 'Macho',
    },
    {
      value: 'Fêmea',
      label: 'Fêmea',
    },
  ]

  return (
    <div>
      {id ? (
        <IconButton aria-label="edit" onClick={handleClickOpen}>
          <EditIcon sx={{ color: common.black }} />
        </IconButton>
      ) : (
        <StyledButton variant="contained" fullWidth onClick={handleClickOpen}>
          ENTRADA DE PET
        </StyledButton>
      )}
      <Dialog open={open} onClose={handleClose}>
        <FormBox>
          <form
            onSubmit={
              id ? handleSubmit(handleUpdate) : handleSubmit(handleRegister)
            }
          >
            <StyledDialogTitle>
              {id ? 'Editar pet' : 'Cadastro de novo pet'}
            </StyledDialogTitle>
            <FormContent>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    margin="dense"
                    variant="outlined"
                    label="Nome"
                    color="secondary"
                    backgroundColor="secondary.light"
                    size="small"
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
                  <StyledTextField
                    margin="dense"
                    variant="outlined"
                    label="Raça"
                    color="secondary"
                    size="small"
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
                  <StyledTextField
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    margin="dense"
                    variant="outlined"
                    label="Idade"
                    color="secondary"
                    size="small"
                    error={Boolean(errors.age)}
                    helperText={errors.age?.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="species"
                margin="dense"
                variant="outlined"
                label="Espécie"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <React.Fragment>
                    <StyledTextField
                      id="pet-species-select"
                      select
                      label="Espécie"
                      value={petSpecies}
                      onChange={handleSpeciesChange}
                      size="small"
                      {...field}
                    >
                      {petSpeciesOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </StyledTextField>
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
                    <StyledTextField
                      margin="dense"
                      variant="outlined"
                      id="pet-gender-select"
                      select
                      label="Sexo"
                      value={petGender}
                      onChange={handleGenderChange}
                      size="small"
                      {...field}
                    >
                      {petGenderOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </StyledTextField>
                  </React.Fragment>
                )}
              />
              <Controller
                name="url"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    margin="dense"
                    variant="outlined"
                    label="URL da Imagem"
                    color="secondary"
                    size="small"
                    error={Boolean(errors.URL)}
                    helperText={errors.URL?.message}
                    {...field}
                  />
                )}
              />
            </FormContent>
            <ButtonBox>
              <StyledDialogButton
                type="submit"
                variant="contained"
                color="primary"
              >
                {id ? 'SALVAR' : 'CADASTRAR'}
              </StyledDialogButton>
              <StyledDialogButton
                onClick={handleClose}
                variant="outlined"
                color="primary"
              >
                CANCELAR
              </StyledDialogButton>
            </ButtonBox>
          </form>
        </FormBox>
      </Dialog>
    </div>
  )
}

const StyledTextField = styled(TextField)`
  width: 210px;
  padding: 2px;
  margin: 5px;
`
const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  @media only screen and (min-width: 480px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`
const StyledButton = styled(Button)`
  width: 340px;
  height: 35px;
  @media only screen and (min-width: 480px) {
    margin-top: 0px;
    width: 290px;
    height: 35px;
  }
`
const StyledDialogButton = styled(Button)`
  width: 210px;
  height: 35px;
  border-radius: 10px;
  margin: 5px;
  padding: 0px;
`
const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  padding: 2px;
  padding-left: 10px;
`
const StyledDialogTitle = styled(DialogTitle)`
  text-align: center;
`
const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  @media only screen and (min-width: 480px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`
export default CreateOrUpdatePet
