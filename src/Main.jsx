import React from "react";
import  ReactDOM  from "react-dom/client";
import All from "./All";
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.createRoot(document.querySelector('#root')).render(
    
    <BrowserRouter>
    <ScrollToTop/>
    <All/>
    </BrowserRouter>
    
)


