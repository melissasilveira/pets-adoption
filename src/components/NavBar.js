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
import styled from '@emotion/styled'

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
    <NavBarBox>
      <StyledDiv>
        <img src="/images/brand-logo (1).png" alt="logo" height="53px" />
        <img src="/images/Hamburguer.png" alt="hamburger-menu" height="29px" />
      </StyledDiv>
      <StyledNav>
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
      </StyledNav>
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
    </NavBarBox>
  )
}

const NavBarBox = styled.div`
  background: #040404;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  margin: 0px 30px;
`

const StyledNav = styled.nav`
  display: none;
`
export default NavBar
