import React, { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) => {
    const Names = {
        "FirstName" : "React",
        "LastName" : "Context"
    }
    const [state, setState] = useState(Names);
    const update = () => {
        setTimeout(() => {
            setState({
                "FirstName" : "UseContext",
                "LastName" : "Api"
            })
        }, 2500)
    }
  return (
    <div>
      <NoteContext.Provider value={{state, update}}>
      <h3>{props.children}</h3>
      </NoteContext.Provider>

    </div>
  )
}

export default NoteState
