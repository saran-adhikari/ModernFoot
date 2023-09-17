import React from "react";
import Connect from "../Connect";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
function Cart() {
  return (
    <>
      <div className="credentials">
        
        <div className="header">Your Cart is Empty!</div>

        <div className="content">
       <Link id="signin" class="btn btn-primary" type="submit" to='/shopall'>Continue shopping</Link>
       
          
        <div className="header"><h5>Have an Account?</h5></div>
          
           <p> <Link to="/login">Login</Link><span> To check out faster</span></p>
           
        </div>
          
         
          
          
        
     
    </div>
    </>
  );
}

export default Cart;
