import React from 'react'
import { NavLink } from 'react-router-dom'

import './FullNavbar.scss'
const FullNavbar = ({ isActive, setIsActive }) => {
    const pages = [
        'home', 'projects', 'about', 'contact'
    ]
    return isActive ? (
        <div className='full-navbar'>
            <div className="navbar__links">
                {
                    pages.map(page => {
                        return (
                            <div className="link">
                                <NavLink
                                    to={page == 'home' ? '/' : `/${page}`}
                                    activeClassName='active'
                                    onClick={() => setIsActive(false)}
                                >{page.toUpperCase()}</NavLink>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    ) : (
        <></>
    )
}

export default FullNavbar