import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Main from '../components/Main'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'

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
      <footer>
        <p>Direitos reservados. 2022</p>
      </footer>
    </React.Fragment>
  )
}

export default Home
