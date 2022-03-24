import { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton } from '@mui/material'
import { toast } from 'react-toastify'

import { deletePet } from '../services/pets'

function DeletePet(props) {
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDelete = async () => {
    try {
      await deletePet(props.id)
      toast.success('Pet deletado com sucesso.', {
        position: toast.POSITION.TOP_CENTER,
      })
      setOpen(false)
      props.shouldRefetch()
    } catch (error) {
      toast.error('Ocorreu um erro ao tentar deletar o pet.')
      console.log(error)
    }
  }

  return (
    <div>
      <IconButton aria-label="delete" onClick={handleClickOpen}>
        <DeleteIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Certeza de que deseja remover o pet da lista de adoção?{' '}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete}>Sim</Button>
          <Button onClick={handleClose} autoFocus>
            Não
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DeletePet
