
import React, { useState, useEffect } from "react";

import Data from "./Data";
import { BrowserRouter, Link } from "react-router-dom";
function Running() {
  const filteredData = Data.filter((x) => x.category.includes("RUNNING"));
  return (
    
    <>
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://img.freepik.com/free-photo/healthy-lifestyles-jogging-through-autumn-forest-landscape-generated-by-ai_188544-11832.jpg?t=st=1694937169~exp=1694940769~hmac=96b6b8619105d72c7725ad92215b141334f059e81498bbb53a58fe6a944c9325&w=2000" className="w-100" alt="..." height="500"/>
            <div className="carousel-caption" id="value-body">
              
              <h5>Running Shoes </h5>
              <p>
                A collection of your favourite running shoes 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2>Running Shoes</h2>
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

export default Running