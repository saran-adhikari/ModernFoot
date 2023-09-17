import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
function Error404() {
  return (
    <>
    
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://cdn1.vectorstock.com/i/1000x1000/54/40/404-page-not-found-vector-11725440.jpg" className="w-100" alt="..." height="650"/>
            <div className="carousel-caption" id="value-body">
            <Link className="btn btn-primary" id="signup" to='/'>Go to Homepage</Link>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Error404