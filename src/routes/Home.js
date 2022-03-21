import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'

function Home() {
  return (
    <React.Fragment>
      <main>
        <NavBar />
        <Header />
        <Gallery />
        <Contact />
      </main>
      <footer>
        <p>Direitos reservados. 2022</p>
      </footer>
    </React.Fragment>
  )
}

export default Home
