import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <img
        className="navbar-logo"
        src="../../../public/img/MemeGeneratorLogo.gif"
      />
      <div className='navbar-title'>Meme Generator</div>
      <div className='navbar-subtile'>Cristian Cázares</div> 
    </nav>
  )
}

export default Navbar;
