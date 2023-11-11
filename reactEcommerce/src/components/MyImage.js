import React, { useState } from 'react'

const MyImage = ({ imgs = [{url: ''}]}) => {
  console.log("images", imgs)
  const [ mainImage, setMainImage ] = useState(imgs[0]);

  return (
    <>
    <div className="grid-container">
      <div className="text-wrapper">
        { imgs && imgs.map(( curElm, index) => {
          return (
            <figure  key={index}>
            <img
              src={curElm.url}
              alt={ curElm.filename } 
              className='box-image--style'
              style={{ height: '80px', width: '100px' }}
              onClick={() => setMainImage(curElm)}
            />
          </figure>
          )
        })}
      </div>
          {/* 2nd column */}
          <div className="image-wrapper">
            <img src={mainImage.url} alt={imgs[0].filename} style={{ height: '200px', width: '200px', marginTop: '124px'}} />
          </div>
      </div>

    </>
  )
}

export default MyImage
