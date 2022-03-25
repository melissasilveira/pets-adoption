import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Main from '../components/Main'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import styled from '@emotion/styled'

function Home() {
  const [petName, setPetName] = useState('')

  return (
    <React.Fragment>
      <main>
        <NavBar />
        <Main />
        <Gallery setPetName={setPetName} />
        <Contact petName={petName} />
      </main>
      <Footer>
        <Footnote>Direitos reservados. 2022</Footnote>
      </Footer>
    </React.Fragment>
  )
}

const Footer = styled.footer`
  height: 80px;
  background: #e6bc7e;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Footnote = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  text-align: center;

  color: #403423;
`

export default Home
