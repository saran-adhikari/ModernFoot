import React from "react";
import Connect from "./Connect";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Ads from "./components/Ads";
function Header() {
    
  return (
    <>
    
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <Ads/>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        id="heading"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link to='/' className="navbar-brand" href="#">
            Modern<span>Foot</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              
              <li className="nav-item">
                <Link to='/running' className="nav-link active" aria-current="page" >
                  Running Shoes 
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/football' className="nav-link active" aria-current="page">
                  Football Boots
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/casual' className="nav-link active" aria-current="page">
                  Casual
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/formal' className="nav-link active" aria-current="page">
                  Formal
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/shopall' className="nav-link active" aria-current="page">
                  Shop All
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/values' className="nav-link active" aria-current="page">
                  Values
                </Link>
              </li>
            </ul>
            
            
          
            <form className="d-flex" role="search">
              {/* <input id="searchbox" size="40"
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              /> */}
              <button
                id="search"
                className="btn btn-outline-success"
                type="submit"
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
              <Link to='/login' id="user" class="btn btn-primary" href="#" role="button">
              <i class="fa-regular fa-user"></i>
              </Link>
              <Link to='/cart' id="cart" class="btn btn-primary" href="#" role="button">
              <i class="fa-solid fa-cart-shopping"></i>
              </Link>
              
            </form>
            </div>
          </div>
        
        
        {/*  */}
      </nav>
      <Connect/>
    </>
  );
}

export default Header;
