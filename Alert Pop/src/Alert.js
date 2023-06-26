import React from 'react'
import './App.css'

const Alert = ({closeAlert}) => {
  return (
    <div className="alert alert-warning">
        <strong>Warning!</strong> This is a warning message.
        <button type="button" className="close" data-dismiss="alert" onClick={() => closeAlert(false)}>close</button>
    </div>
  )
}

export default Alert
