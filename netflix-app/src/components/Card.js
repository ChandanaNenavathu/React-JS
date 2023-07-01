import React from 'react'

const Card = (props) => {
    
  return ( 
    <div className='container'>
      <div className="card">
        <img src={props.imgsrc} alt="myPic" className='cardImg'/>
        <div className="cardInfo">
          <span className='cardCategory'>{props.title}</span>
          <h3 className='cardTitle'> {props.sname} </h3>
          <a href={props.links} target= "blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card;
