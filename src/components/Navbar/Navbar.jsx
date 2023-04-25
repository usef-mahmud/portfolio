import React from 'react'

import './Navbar.scss'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="toggle-button">
        MENU
      </div>
      <div className="navbar__links">
        <div className="link">
          <NavLink to='/' activeClassName='active'>HOME</NavLink>
        </div>
        <span className="dot"></span>
        <div className="link">
          <NavLink to='/projects' activeClassName='active'>PROJECTS</NavLink>
        </div>
        <span className="dot"></span>
        <div className="link">
          <NavLink to='/about' activeClassName='active'>ABOUT</NavLink>
        </div>
        <span className="dot"></span>
        <div className="link">
          <NavLink to='/contact' activeClassName='active'>CONTACT</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar