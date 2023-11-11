import React from 'react'
import Sort from './Sort'
import ProductList from './ProductList'
import FilterSection from './FilterSection'
import { useFilterContext } from './context/Filter_contex'

const Products = () => {
  const { filter_products } = useFilterContext();

  return (
    <>
      <div className="grid-FilContainer">
        <div className="column-chandana">
          <FilterSection />
        </div>
        <section className="column-sort">
          <div className="row-1">
            <Sort /> 
          </div>
          <div className="row-2">
            <ProductList products={filter_products}/> 
          </div>
        </section>
    </div>
    </>
  )
}

export default Products
