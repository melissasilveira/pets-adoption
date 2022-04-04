import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'

import Login from './Login'
import useAuth from '../contexts/AuthContext'

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const { isAuthenticated } = useAuth()

  const handleMenuOpen = () => {
    setMenuOpen(true)
  }

  const handleMenuClose = () => {
    setMenuOpen(false)
  }

  const handleClickOpen = () => {
    isAuthenticated ? navigate('/dashboard') : setOpen(true)
  }

  return (
    <NavBarBox>
      <StyledDiv>
        <img src="/images/brand-logo (1).png" alt="logo" height="53px" />
        {menuOpen ? (
          <StyledButton onClick={handleMenuClose}>
            <img src="/images/Hamburguer-close.png" alt="burger close" />
          </StyledButton>
        ) : (
          <StyledButton onClick={handleMenuOpen}>
            <img
              src="/images/Hamburguer.png"
              alt="hamburger-menu"
              height="29px"
            />
          </StyledButton>
        )}
      </StyledDiv>
      <StyledNav isOpen={menuOpen}>
        <StyledUl>
          <li>
            <StyledButtonLink
              onClick={() => {
                handleMenuClose()
                handleClickOpen()
              }}
            >
              LOGIN
            </StyledButtonLink>
          </li>
          <li>
            <a href="#pet-gallery" onClick={handleMenuClose}>
              GALERIA
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleMenuClose}>
              CONTATO
            </a>
          </li>
        </StyledUl>
      </StyledNav>
      <Login open={open} setOpen={setOpen} />
    </NavBarBox>
  )
}

const NavBarBox = styled.div`
  background: #040404;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  @media only screen and (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
const StyledNav = styled.nav`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  @media only screen and (min-width: 480px) {
    display: flex;
  }
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

  @media only screen and (min-width: 480px) {
    flex-direction: row;
    padding: 5px 90px;

    li,
    a {
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      padding: 10px;
    }
  }
`
const StyledButtonLink = styled.button`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  color: #ffd18d;

  @media only screen and (min-width: 480px) {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    padding: 10px;
  }
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  margin: 0px 30px;
`

const StyledButton = styled.button`
  @media only screen and (min-width: 480px) {
    display: none;
  }
`
export default NavBar
