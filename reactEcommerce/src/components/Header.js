import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './Nav'

const Header = () => {
  return (
    <div>
        <NavLink to ='/'>
            <a href="">Go to Home</a>
        </NavLink>
        <Nav />
    </div>
  )
}

export default Header
