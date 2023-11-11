import React from 'react'
import Product from './Product'

const GridView = ({ products } ) => {
    // console.log("products", products)

  return (
    <><div className="container grid-three-column">
        {products.map((curElem) => {
                return <Product key={curElem.id} {...curElem} />
            })}
    </div>
      
    </>
  )
}

export default GridView
