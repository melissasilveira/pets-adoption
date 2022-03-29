import React, { useState } from 'react'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from '@mui/material'
import { IconButton } from '@mui/material'
import { toast } from 'react-toastify'
import { editPet } from '../services/pets'

function AdoptPet(props) {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleAdoption = async () => {
    try {
      await editPet(props.pet.id, { ...props.pet, adopted: true })
      toast.success('Pet adotado com sucesso.', {
        position: toast.POSITION.TOP_CENTER,
      })
      setOpen(false)
      props.shouldRefetch()
    } catch (error) {
      toast.error('Ocorreu um erro ao tentar adotar o pet.')
      console.log(error)
    }
  }

  return (
    <div>
      {props.pet.adopted ? (
        <IconButton aria-label="pet-adopted">
          <img src="/images/donate-icon-png-1 1.png" alt="adopted-icon" />
        </IconButton>
      ) : (
        <IconButton aria-label="adopt-pet" onClick={handleClickOpen}>
          <img src="/images/donate-icon.png" alt="adopt-icon" />
        </IconButton>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-describedby="adoption-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-adoption">
            O pet da lista foi adotado?{' '}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleAdoption}>
            Sim
          </Button>
          <Button variant="outlined" onClick={handleClose} autoFocus>
            Não
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AdoptPet
