import React from 'react'
import {faker} from '@faker-js/faker';

const Home = () => {
  const productsArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }))
  console.log(productsArray)
  return (
    <div>
      
    </div>
  )
}

export default Home
