import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import Error404 from './components/Error404'
import Home from './Home'
import Shopall from './components/Shopall'
import Running from './components/Running'
import Casual from './components/Casual'
import Values from './components/Values'
import Football from './components/Football'
import Login from './components/Login'
import Reset from './components/Reset'
import Createaccount from './components/Createaccount'
import Cart from './components/Cart'
import Refundpolicy from './footercomponents/Refundpolicy'
import Shippinginfo from './footercomponents/Shippinginfo'
import Contact from './footercomponents/Contact'
import Privacy from './footercomponents/Privacy'
import Formal from './components/Formal'
import Nike from './components/Nike'
import Hushpuppies from './components/Hushpuppies'
import Adidas from './components/Adidas'
import Vans from './components/Vans'

function Connect() {
  return (
    <>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/running' element={<Running/>}/>
       <Route path='/shopall' element={<Shopall/>}/>
       <Route path='/casual' element={<Casual/>}/>
       <Route path='/values' element={<Values/>}/>
       <Route path='/football' element={<Football/>}/>
       <Route path='/formal' element={<Formal/>}/>
        <Route path='/nike' element={<Nike/>}/>
        <Route path='/hushpuppies' element={<Hushpuppies/>}/>
        <Route path='/adidas' element={<Adidas/>}/>
        <Route path='/vans' element={<Vans/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/resetpw' element={<Reset/>}/>
       <Route path='/create' element={<Createaccount/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/refundpolicy' element={<Refundpolicy/>}/>
       <Route path='/shippinginfo' element={<Shippinginfo/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/privacy' element={<Privacy/>}/>
       <Route path='/*' element={<Error404/>}/>
      </Routes>
       
    </>
  )
}

export default Connect