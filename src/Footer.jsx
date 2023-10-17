import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
function Footer() {
  return (
    <>
    <footer>
      <div className="col-md-12" id="foot">
        <div className="area">
        <div className="row">
          <div className="col"><header id="sh">ModernFoot</header>
          <li id="soc">Ethically and sustainably conscious outdoor footwear</li>

          {/* <li id="soc"><span id="fb"><i class="fa-brands fa-facebook"></i></span>
           <span id="insta"><i class="fa-brands fa-instagram"></i> </span>
            <span id='tiktok'><i class="fa-brands fa-tiktok"></i></span>
            <span id="twitter"> <i class="fa-brands fa-x-twitter"></i></span>
            </li> */}
          </div>
          <div className="col"><header>Our Shop</header>
          
            <Link to='/shopall' id="link"><li>All Products</li></Link>
            <Link to='/casual' id="link"><li>Casual Wear</li></Link>
            <Link to='/football' id="link"><li>Football Boots</li></Link>
            <Link to='/formal' id="link"><li>Formals </li></Link>
            
          </div>
          <div className="col"><header>Help</header>
          
            <Link to='/privacy' id="link"><li>Privacy Policy</li></Link>
            <Link to='/shippinginfo' id="link"><li>Shipping Information</li></Link>
            <Link to='/refundpolicy' id="link"><li>Refund Policy</li></Link>
            {/* <li>Wear and Care FAQ</li> */}
          
          </div>
          <div className="col"><header>About us</header>
          
            <Link to='/values' id="link"><li>Values</li></Link>
            <Link to='/contact' id="link"><li>Contact us</li></Link>
            
          
          </div>
        </div>
        <hr/>
        <p>&copy; 2023, ModernFoot. All Rights Reserved</p>
        </div>
      </div>
      </footer>
    </>
  );
}

export default Footer;
