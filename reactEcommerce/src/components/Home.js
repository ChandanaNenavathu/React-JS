import React from 'react'
import HeroSection from './HeroSection'
import FeaturedProduct from './FeaturedProduct'

const Home = () => {
  const data = {
    name :"React Home"
  }
  return (
    <div>
      <HeroSection myData={data}/>
      <FeaturedProduct />
    </div>
  )
}

export default Home
