import React, { useState } from 'react'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from '@mui/material'
import { IconButton } from '@mui/material'

function AdoptionAlertDialog() {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <IconButton aria-label="adopt-pet" onClick={handleClickOpen}>
        <img src="/images/donate-icon.png" alt="adopt-icon" />
      </IconButton>
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
          <Button onClick={handleClose}>Sim</Button>
          <Button onClick={handleClose} autoFocus>
            Não
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AdoptionAlertDialog
