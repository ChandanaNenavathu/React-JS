import React from 'react'
import FormatPrice from './Helpers/FormatPrice';
import { NavLink } from 'react-router-dom';

const ListView = ( { products} ) => {
  return (
    <div className='container grid'>
      {
        products.map((curElem) => {
            const { id, name, image, price, description } = curElem;
            return (
                <div className="card grid grid-two-column">
                    <figure>
                        <img src={image} alt={name} style={{ width: '300px', height: 'auto', marginTop : '103px'}}/>
                    </figure>
                    <div className="card-data">
                      <h3>{name}</h3>
                      <p>< FormatPrice price={price}/></p>
                      <p>{description.slice(0,90)}...</p>
                      <NavLink to={`/singleproduct/${id}`} className={'btn-main'}>
                        <button className='btn'>
                          ReadMore
                        </button>
                      </NavLink>
                    </div>
                </div>

            )
        })
      }
    </div>
  )
}

export default ListView
