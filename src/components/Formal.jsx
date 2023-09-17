import React from 'react'
import Data from './Data';
import { BrowserRouter, Link } from 'react-router-dom';
function Formal() {
  const filteredData = Data.filter((x) => x.category.includes("FORMAL"));
  return (
    <>
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://img.freepik.com/free-photo/pair-brown-shoes-with-black-leather-sole-word-bottom_123827-23446.jpg?w=2000&t=st=1694936923~exp=1694937523~hmac=9391509a4429ee06ca4ad8ba25eff56bb6d3ab13ae32e45b24729a3b3eb6092e" className="w-100" alt="..." height="500"/>
            <div className="carousel-caption" id="value-body">
              
              <h5>Formal </h5>
              <p>
                A collection of your favourite formals 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2>Formals</h2>
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

export default Formal