
import React, { useState, useEffect } from "react"
import Data from "./Data";
import { BrowserRouter, Link,  } from "react-router-dom";

const Shopall = () => {
  
  return (
    <>
      
      <div className="container"><h2>Shop All</h2></div>
      <div className="container-col-auto" id="backend">
      <div className="card-container" id="bc-container">
        {Data.map((x) => (
          
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
  


export default Shopall