import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error'>
      <h1>404</h1>
      <h2>UH OH! You're lost.</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas nemo ut voluptatem cupiditate repellat, eos soluta mollitia natus expedita nostrum, temporibus minima iusto sed maiores deserunt officiis vero culpa! Odio?</p>
      <NavLink to="/">
        <button>
          Go Back to Home
        </button>
      </NavLink>
      
    </div>
  )
}

export default Error
