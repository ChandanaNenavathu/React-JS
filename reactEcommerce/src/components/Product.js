import React from 'react'
import { NavLink } from 'react-router-dom'
import "./../App.css";
import FormatPrice from './Helpers/FormatPrice';

const Product = ({id, name, image, price, category}) => {
  return (
    <div className='Grid'>
      <NavLink to={`/singleproduct/${id}`}> 
        <div className="card">
            <figure>
                <img src={image} alt={name} className="product-image" height={321}/>
                <figcaption className='caption'>{category}</figcaption>
            </figure>
            <div className="card-data">
                <div className="card-data-flex">
                    <h3>{name}</h3>
                    <p className="card-data--price">{<FormatPrice price = {price}/>}</p>
                </div>
            </div>
        </div>
      </NavLink>
    </div>
  )
}

export default Product
