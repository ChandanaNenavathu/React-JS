import React, { useContext, useEffect } from 'react'
import AppContext from '../context/NoteContext'


const Navbar = () => {
    const nav = useContext(AppContext)
    useEffect(() => {
        nav.update();
    },[])
  return (
    <div>  
      <h4> Hi this is NavBar using {nav.state.FirstName} {nav.state.LastName}</h4>
    </div>
  )
}

export default Navbar
