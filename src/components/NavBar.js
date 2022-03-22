import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  TextField,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
} from '@mui/material'
import { toast } from 'react-toastify'

import useAuth from '../contexts/AuthContext'
import { loginSchema } from '../schemas/auth'

function NavBar() {
  const [open, setOpen] = useState(false)

  const navigate = useNavigate()

  const { login } = useAuth()

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
  } = useForm({
    resolver: yupResolver(loginSchema),
  })

  const handleLogin = async ({ email, password }) => {
    try {
      await login(email, password)
      toast.success('Login realizado com sucesso!')
      navigate('/dashboard')
    } catch (error) {
      toast.error('Usuário ou senha incorretos.')
      console.log(error)
    }
  }

  return (
    <React.Fragment>
      <div>
        <img src="/images/brand-logo (1).png" alt="logo" />
        <nav>
          <ul>
            <li>
              <button onClick={handleClickOpen}>LOGIN</button>
            </li>
            <li>
              <a href="#pet-gallery">GALERIA</a>
            </li>
            <li>
              <a href="#contact">CONTATO</a>
            </li>
          </ul>
        </nav>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit(handleLogin)}>
          <DialogContent>
            <img src="/images/brand-logo (1).png" alt="logo" />
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  margin="dense"
                  variant="outlined"
                  s
                  label="Email"
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  type="password"
                  margin="dense"
                  variant="outlined"
                  label="Senha"
                  error={Boolean(errors.password)}
                  helperText={errors.password?.message}
                  {...field}
                />
              )}
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit">ENTRAR</Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  )
}

export default NavBar
