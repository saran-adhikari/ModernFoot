import React from "react";
import { BrowserRouter,Link, Route, Routes } from "react-router-dom";


// const HUSHPUPPIES = Data.filter((x) => x.category.includes("HUSHPUPPIES"));
// const ADIDAS = Data.filter((x) => x.category.includes("ADIDAS"));
// const VANS = Data.filter((x) => x.category.includes("VANS"));
function Home() {
  return (
    <>
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://www.treehugger.com/thmb/jllq6YHyfzEsTwH3dy4nuBEr3BU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/RC_Munjoi_18-f36ba8ab464c4c97949da0b153f12c07.jpg" className="w-100" alt="..." height="650"/>
            <div className="carousel-caption" id="body">
              <h5>Stay Dry and Comfy All Day Long</h5>
              <p>
              Thoughtfully Made Outdoor Footwear 
              </p>
              <button id="shop" class="btn btn-primary" type="submit"><Link to='/shopall' id="link">SHOP ALL</Link></button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2> "Step into Nature,<br/> Leave No Trace.<br/> #BeOutside"</h2>
      </div>
        <div className="card-container">      
        <div className="card" >
        
        <Link to='/nike'><img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8439f823-86cf-4086-81d2-4f9ff9a66866/air-max-90-big-kids-shoe-1wzwJM.jpg" className="card-img-top" alt="..." /></Link>
        
        
           <Link className="btn btn-primary" id="click" to='/nike'>Nike <i class="fa-solid fa-arrow-right"></i></Link>
           
        </div>
        
        <div className="card">
        <Link to='/hushpuppies'><img src="https://img.freepik.com/free-photo/brown-leather-slip-men-s-shoes-fashion_53876-101531.jpg?w=826&t=st=1694777311~exp=1694777911~hmac=0c8847ce27ac2e30adaf950b884effa82a31252f83c9516cd47e32c63ed7b595" className="card-img-top" alt="..." /></Link>
        
           
            <Link className="btn btn-primary" id="click" to='/hushpuppies'>Hushpuppies <i class="fa-solid fa-arrow-right"></i></Link>
        
        </div>
        <div className="card">
        <Link to='/adidas'><img src="https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/d0720712d81e42b1b30fa80800826447_9366/Stan_Smith_Shoes_White_M20607_M20607_01_standard.jpg" className="card-img-top" alt="..." /></Link>
        
           
            <Link className="btn btn-primary" id="click" to='/adidas'>Adidas <i class="fa-solid fa-arrow-right"></i></Link>
        
        </div>
        <div className="card">
        <Link to='/vans'><img src="https://images.vans.com/is/image/Vans/UUK24I-HERO?$583x583$" className="card-img-top" alt="..." /></Link>       
            <Link className="btn btn-primary" id="click" to='/vans'>Vans <i class="fa-solid fa-arrow-right"></i></Link>
        
        </div>
        </div>  
      <div className="fall">
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-inner">
          <div className="carousel-item active" id="autumn">
            <img src="https://www.themodestman.com/wp-content/uploads/2020/01/Grant_Stone_Diesel_Boot_Chromexcel.jpg" className="w-100" alt="..." height="700"/>
            <div className="carousel-caption" id="aut">
              <h5>Step into Comfort, Stride in Style!</h5>
              <p>
              Discover the perfect blend of comfort and fashion with our casual shoes, designed to elevate your every step.
              </p>
              <Link id="explore" class="btn btn-primary" type="submit" to='/casual'>Shop Now</Link>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* <div className="container">
        <h2> Our Bestsellers </h2>
      </div>
      <div className="bestsellers">
      <div className="card-container">      
        <div className="card" id="pics" >
        <img src="https://thesusoutdoors.com/cdn/shop/files/Bestsellers_-_Scarlet.png?v=1686866447&width=400" className="card-img-top" alt="..." />
        
           
           <button className="btn btn-primary" id="click">Weekend Boot in Scarlet <i class="fa-solid fa-arrow-right"></i></button>
        </div>
        
        <div className="card" id="pics">
        <img src="https://thesusoutdoors.com/cdn/shop/files/Bestsellers_-_Rain.png?v=1686866447&width=400" className="card-img-top" alt="..." />
        
           
            <button className="btn btn-primary" id="click">Anyday Rain Boot in Black <i class="fa-solid fa-arrow-right"></i></button>
        
        </div>
        <div className="card" id="pics">
        <img src="https://thesusoutdoors.com/cdn/shop/files/Bestsellers_-_Farrah.png?v=1687466131&width=400" className="card-img-top" alt="..." />
        
           
            <button className="btn btn-primary" id="click">Weekend Boot in Farrah <i class="fa-solid fa-arrow-right"></i></button>
        
        </div>
        <div className="card" id="pics">
        <img src="https://thesusoutdoors.com/cdn/shop/files/Bestsellers_-_Sage_Terrus.png?v=1687466153&width=400" className="card-img-top" alt="..." />
       
            <button className="btn btn-primary" id="click">Terrus Clog in Sage <i class="fa-solid fa-arrow-right"></i></button>
        
        </div>
        </div>  
        </div> */}

        <div className="section-primary" id="value-content">
        <div className="row">
          <div className="col">
          <img src="https://thesusoutdoors.com/cdn/shop/files/Images_with_Text.png?v=1686324998&width=750" alt="" width='100%' height='600'/>
          </div>
          <div className="col" id="footwear"> 
            <h2>Our footwear is thoughtfully designed from natural and recycled materials</h2>
            <p>Each pair diverts 1-2 kg of waste from our waterways and landfill, reduces 20kg of CO2 from the atmosphere, and conserves 10L of water when compared to your traditional leather boot.</p>
            <Link type="button" className="btn btn-primary" to='/values'>Learn More</Link>

          </div>
        </div>
        </div>
        <div className="container-end">
          <div className="wrap">
        <h2>Let's stay in touch.<br/> Get $10 off your first purchase, early access to new releases and outdoor tips, trips and education. </h2>
        <p>Be the first to know about new collections and exclusive offers.</p>
        
        <input id= "email" type="email"  placeholder="E-Mail"></input>
        <input id='signup' class="btn btn-primary" type="submit" value="Sign Up"></input>
        
        </div>
      </div>
      
      
    </>
  );
}

export default Home;
