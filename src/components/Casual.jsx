import React, { useState, useEffect } from "react";
import Data from './Data';
import { BrowserRouter, Link } from 'react-router-dom';
function Casual() {
  const filteredData = Data.filter((x) => x.category.includes("CASUAL"));
  return (
    <>
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://img.freepik.com/free-photo/black-leather-sports-shoe-with-elegant-shoelace-generated-by-ai_188544-19647.jpg?w=2000&t=st=1694937606~exp=1694938206~hmac=5682a6054910ae441eb537b39057a4d174e93acba4f395d1e75b13cb3bdf1b3a" className="w-100" alt="..." height="500"/>
            <div className="carousel-caption" id="value-body">
              
              <h5>The Anyday Casual Shoes </h5>
              <p>
               City Essential. Unisex.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2>Casual Shoes</h2>
      </div>
      <div className="container-col-auto" id="backend">
      <div className="card-container" id="bc-container">
        {filteredData.map((x) =>  (
          
          <div id='bc-card' className="card" style={{width: '18rem'}} key={x.id}>
            <img src={x.imageURL} id='bc-img' className="card-img-top" alt="..." />
            <div className="card-body" id="bc-body">
              <h5 className="card-title" id="bc-title">{x.title}</h5>
            </div>
            <ul className="list-group list-group-flush" id="bc-ul">
              <li className="list-group-item">Brand: {x.brand}</li>
              <li className="list-group-item">Gender: {x.gender}</li>
              <li className="list-group-item">Category: {x.category}</li>
              <li className="list-group-item">Price: ${x.price}</li>
              
              
                <Link className="btn btn-primary" id="bc-btn" to='/cart' >Add to Cart</Link>
              
            
            </ul>
            
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Casual