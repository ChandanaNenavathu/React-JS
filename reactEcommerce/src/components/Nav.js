import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='navbar'>
      <ul className='navbar-list'>
        <li className='li-nav'>
          <NavLink to='/' className='navbar-link home-link'>
            Home
          </NavLink>
        </li>
        <li className='li-nav'>
          <NavLink to='/about' className='navbar-link'>
            About
          </NavLink>
        </li>
        <li className='li-nav'>
          <NavLink to='/products' className='navbar-link '>
            Products
          </NavLink>
        </li>
        <li className='li-nav'>
          <NavLink to='/contact' className='navbar-link '>
            Contact
          </NavLink>
        </li>
        <li className='li-nav'>
          <NavLink to='/cart' className='navbar-link '>
            Cart
          </NavLink>
        </li>
      </ul>

      {/* two button for open and close of menu*/}
      <div className="mobile-navbar-btn">
        <h3><a href="">Menu</a></h3>
        <h3><a href="">Close Btn</a></h3>
      </div>
    </div>
  )
}

export default Nav
