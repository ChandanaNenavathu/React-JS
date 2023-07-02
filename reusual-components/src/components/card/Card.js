import React from 'react'
import "./Card.css"

function card(props) {
  return (
   <>
    <div className="card">
      <div className="card-body">
        <h1>{props.id}</h1>
        <h3>{props.title}</h3>
        <a href="">{props.url}</a>
        <img src={props.thumbnailUrl} alt = "Nothing" />
      </div>
    </div>
   </>
  )
}

export default card
