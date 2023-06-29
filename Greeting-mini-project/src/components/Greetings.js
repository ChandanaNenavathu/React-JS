import React from 'react'

const Greetings = (props) => {
  return (
    <>
      <div>
       <h2>{props.Name}</h2>
       <h2 style={{ color: props.cssStyle }}>
          {props.greet}
        </h2>
      </div>
    </>
  )
}

export default Greetings
