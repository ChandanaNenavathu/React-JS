import React from 'react'
import { NavLink } from 'react-router-dom'


const HeroSection = ({ myData })=> {
  console.log(myData)
  
  return (
    <div className='container'>
      <div className="grid grid-two-coloumn">
        <div className="hero-section-data">
            {/* <p className="intro-data">Welcome to</p>
            <h1>{myData.name}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda repellat sit nulla, hic eum dolor quidem ratione quod fugit dolorum ipsum? Amet, ad? Ipsam cupiditate molestiae voluptate aspernatur voluptates reiciendis eveniet itaque, qui pariatur, sit vel. Dignissimos ut, id corporis eius praesentium minima, sed soluta in necessitatibus voluptas officiis!</p> */}
            <NavLink to='/'>
                <button>Shop Now</button>
            </NavLink>
        </div>
        {/* <div className="hero-section-img">
          <h2>Image</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo eos facere corporis. Veniam delectus similique praesentium at porro, voluptatem officia autem. Vero excepturi sint quasi ex molestias non illo, delectus aspernatur, iusto odit, ipsum nobis voluptate cum optio? Sunt!</p>
        </div> */}

      </div>
    </div>
  )
}

export default HeroSection
