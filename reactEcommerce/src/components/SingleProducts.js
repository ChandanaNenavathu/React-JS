import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from './context/ProductContext';
import PageNavigation from './PageNavigation';
import MyImage from './MyImage';
import FormatPrice from "./Helpers/FormatPrice";
import Star from './Star';
import AddToCart from './AddToCart';

const API = "https://api.pujakaitem.com/api/products";


const SingleProducts = () => {
    const { getSingleProduct, isSingleloading, singleProduct } = useProductContext();
    const { id } = useParams();
    const {
        id: alias,
        name,
        company,
        price,
        description,
        category,
        stock,
        stars,
        reviews,
        image,
    } = singleProduct;

    useEffect(() => {
        getSingleProduct(`${API}?id=${id}`)
    }, []);

    if(isSingleloading) {
        return<div className='page_loading'>...loading</div>
    }

    
  return (
    <div>
      <PageNavigation title={singleProduct.name}/>
      <div className='container'>
        <div className="grid-two-column"></div>
        {/* Product Image */}
        <div className="product-image">
          <MyImage imgs={image}/>
          <div className='imageContainer'>
        {/* {
          image && image.map((curEle, index)=>{
            return(
              <figure>
                <img
                  className='categoryImages'
                  src={curEle.url}
                  alt={curEle.filename}
                  key={index}
                  // onClick={() => setMainImage(curEle)}
                  style={{height: '50px', width: '50px'}}
                />
              </figure>
            )
          })
        } */}
      </div>
        </div>

        {/*product data*/}
        <div className="product-data">
          <h2>{name}</h2>
          <Star stars={stars} reviews={reviews}/>
          <p className="product-data-price">MRP
            <del>
              <FormatPrice price={price + 250000}  />
            </del>
          </p>
          <p className="product-data-price product-dta-real-price">
            Deal of the Day: <FormatPrice price={price} />
          </p>
          <p className='description'>{description}</p>
          <div className="product-data-warranty">
            <div className="product-warranty-data">
              <p>Free Delivery</p>
            </div>
            <div className="product-data-info">
              <p>Available : 
                <span>
                { stock > 0 ? " In Stock" : " Not Available"}
                </span>
                </p>
                <p>
                  ID : <span>{ id }</span>
                </p>
                <p>
                  Brand : <span>{ company }</span>
                </p>
            </div>
          </div>
          <hr />
          { stock > 0 && <AddToCart product={ singleProduct } />}
       </div>
      </div>
    </div>
  )
}

export default SingleProducts

