import React from 'react'

const NewsItem = ({title, description, imageurl, newsurl}) => {
    
  return (
    <div className='my-4'>
        <div className="card" style={{ width: '18rem' }}>
            <img src={imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h5 className="card-title">{description}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-sm btn-primary">Read More...</a>
            </div>
        </div>
    </div>
  )
}

export default NewsItem
