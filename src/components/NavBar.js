import React from 'react'

function NavBar() {
  return (
    <React.Fragment>
      <div>
        <img src="/images/brand-logo (1).png" alt="logo" />
        <nav>
          <ul>
            <li>
              <a href="#login">LOGIN</a>
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
    </React.Fragment>
  )
}

export default NavBar
