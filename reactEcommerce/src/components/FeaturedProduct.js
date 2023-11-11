import React from 'react'
import { useProductContext } from './context/ProductContext'
import Product from './Product';


const FeaturedProduct = () => {
    const { isLoading, featureProducts } = useProductContext();
    if(isLoading) {
        return <div><h3>......Loading</h3></div>
    }
    console.log("featureProduct", featureProducts);
    
  return (
    <div className='feature'>
      <div className="container">
        <div className="common-heading"><h2>Our Feature Services</h2></div>
        <div className="grid-grid-three-column">
            {
              featureProducts.map((curElem) => {            
                  return <Product key ={curElem.id} {...curElem}/>
              })
            }
        </div>
      </div>
    </div>
  )
}

export default FeaturedProduct
