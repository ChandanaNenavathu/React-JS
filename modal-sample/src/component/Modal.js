import React from 'react'
import "./Modal.css";

const modal = ({closeModal}) => {
  return (
    <div className='modalBackground'>
       <div className="modalContainer my-3">
          <div className='titleCloseBtn my-3'>
          <button onClick={() =>closeModal(false)}> X </button>
          </div>
          <div className="title">
            <h1>Are You Sure Want To Continue</h1>
          </div>
          <div className="body">
            <p>The Next Page is Awesome ! You should move forward, you will enjoy it.</p>
          </div>
          <div className="footer">
            <button onClick={() =>closeModal(false)} id ="cancelbtn" > Cancel </button>
            <button>Continue</button>
          </div>
       </div>
    </div>
  )
}

export default modal
