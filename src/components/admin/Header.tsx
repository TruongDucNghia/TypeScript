import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">React-TypeScript</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Admin</NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/products">Products</NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header