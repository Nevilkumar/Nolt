import React from 'react'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='nav-heading-container'>
            <a href='#' className='nav-logo'></a>
        </div>
        {/* <div>Menu</div> */}
        <div className='nav-links-container--desktop'>
            <a href='#' className='nav-links'>Features</a>
            <a href='#' className='nav-links'>Pricing</a>
            <a href='#' className='nav-links'>Help</a>
            <a href='#' className='nav-links'>Sign in</a>
            <a href='#' className='nav-links nav-links--blue'>Create a Nolt board</a>
        </div>
    </div>
  )
}

export default Navbar