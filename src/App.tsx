import React from 'react';
import { useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css'
import AboutPage from './pages/aboutPage';
import ContactPage from './pages/contactPage';
import HomePage from './pages/homePage';
import ProductsPage from './pages/productsPage';


function App() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">React-TypeScript</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Home</NavLink>
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
      <main>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/products' element={<ProductsPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
