import React from 'react'

import './Header.scss'
const Header = ({ isLight, setIsLight }) => {
  return (
    <div className='header'>
      <div className="header__content">
        <div className="header__name">
          YOUSEF MAHMOUD
        </div>
        <div
          className="toggle-theme"
          onClick={() => setIsLight(!isLight)}
        >
          {
            isLight ? 'DARK THEME' : 'LIGHT THEME'
          }
        </div>
      </div>
    </div>
  )
}

export default Header