import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { toast } from 'react-toastify'

import useAuth from '../contexts/AuthContext'
import { loginSchema } from '../schemas/schemas'

function Login({ open, setOpen }) {
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const { login } = useAuth()

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
      setIsLoading(true)
      await login(email, password)
      toast.success('Login realizado com sucesso!')
      navigate('/dashboard')
    } catch (error) {
      toast.error('Usuário ou senha incorretos.')
      console.log(error)
    }
  }
  return (
    <Dialog open={open}>
      <DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <form onSubmit={handleSubmit(handleLogin)}>
        <DialogContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src="/images/brand-logo (1).png" alt="logo" width="102px" />
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
                size="small"
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
                size="small"
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
                {...field}
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit" variant="contained">
            {isLoading ? (
              <CircularProgress
                size="20px"
                sx={{
                  color: 'secondary.light',
                }}
              />
            ) : (
              'ENTRAR'
            )}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default Login
