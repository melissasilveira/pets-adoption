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

  const handleMenuOpen = () => {
    let menuOpen = document.getElementById('menu-mobile')
    menuOpen.style.display = 'block'
    let burgerMenu = document.getElementById('burger-menu')
    burgerMenu.style.display = 'none'
    let burgerClose = document.getElementById('burger-close')
    burgerClose.style.display = 'block'
  }

  const handleMenuClose = () => {
    let menuClose = document.getElementById('menu-mobile')
    menuClose.style.display = 'none'
    let burgerMenu = document.getElementById('burger-menu')
    burgerMenu.style.display = 'block'
    let burgerClose = document.getElementById('burger-close')
    burgerClose.style.display = 'none'
  }

  return (
    <NavBarBox>
      <StyledDiv>
        <img src="/images/brand-logo (1).png" alt="logo" height="53px" />
        <img
          src="/images/Hamburguer.png"
          alt="hamburger-menu"
          id="burger-menu"
          height="29px"
          onClick={handleMenuOpen}
        />
        <img
          src="/images/Hamburguer-close.png"
          alt="burger close"
          id="burger-close"
          onClick={handleMenuClose}
        />
      </StyledDiv>
      <StyledNav id="menu-mobile">
        <StyledUl>
          <li>
            <StyledButtonLink onClick={handleClickOpen}>LOGIN</StyledButtonLink>
          </li>
          <li>
            <a href="#pet-gallery">GALERIA</a>
          </li>
          <li>
            <a href="#contact">CONTATO</a>
          </li>
        </StyledUl>
      </StyledNav>
      <Dialog open={open} onClose={handleClose}>
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
            <Button onClick={handleClose} variant="outlined">
              CANCELAR
            </Button>
            <Button type="submit" variant="contained">
              ENTRAR
            </Button>
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

  #burger-close {
    display: none;
  }

  @media only screen and (min-width: 480px) {
    #burger-menu {
      display: none;
    }
  }
`
const StyledNav = styled.nav`
  display: none;
`
const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  color: #ffd18d;
  list-style: none;
  padding-bottom: 80px;

  li,
  a {
    display: inline-flex;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    color: #ffd18d;
    padding: 20px;
  }
`
const StyledButtonLink = styled.button`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  color: #ffd18d;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  margin: 0px 30px;
`
export default NavBar
