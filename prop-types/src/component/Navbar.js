import React from 'react'
import PropTypes from 'prop-types'


function Navbar(props) {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll;">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">{props.aboutProp}</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Link
                    </a>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">Action</a></li>
                    <li><a className="dropdown-item" href="/">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="/">Link</a>
                </li>
                </ul>
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            </div>
        </nav>
        <>
        <span className='card'>
            <h3>{props.name}</h3>
            <h3>{props.age}</h3>
            <p>{props.sample}</p>
        </span>
        </>
    </div>
  )
}
Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutProp : PropTypes.string,
    name : PropTypes.string,
}

// use defaultProps if values are not passed in

Navbar.defaultProps = {
    home : 'Prop Home',
}

export default Navbar

