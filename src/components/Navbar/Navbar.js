import React from 'react'
import './Navbar.css'

const Navbar = ({mobileView, setMobileView }) => {

  return (
    <div className='nav-container'>
      <div className='nav-heading-container'>
        <a href='#' className='nav-logo'></a>
        <div className={mobileView ? 'nav-links highlighted-link nav-menu' : 'nav-links nav-menu'} onClick={() => setMobileView((prev) => !prev)}>Menu</div>
      </div>
      
      <div className={mobileView ? "nav-links-container--mobile mobile-active" : "nav-links-container--mobile"}>
        <a href='#' className='nav-links'>Sign in</a>
        <a href='#' className='nav-links'>Create a Nolt board</a>
        <div className='nav-links__partition-line'></div>
        <a href='#' className='nav-links'>Features</a>
        <a href='#' className='nav-links'>Pricing</a>
        <a href='#' className='nav-links'>Help</a>
      </div>

      <div className='nav-links-container--desktop'>
        <a href='#' className='nav-links'>Features</a>
        <a href='#' className='nav-links'>Pricing</a>
        <a href='#' className='nav-links highlighted-link'>Help</a>
        <a href='#' className='nav-links'>Sign in</a>
        <a href='#' className='nav-links nav-links--blue'>Create a Nolt board</a>
      </div>
    </div>
  )
}

export default Navbar