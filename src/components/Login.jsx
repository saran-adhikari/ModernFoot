import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Connect from "../Connect";

function Login() {
  return (
    <>
      <div className="credentials">
        
          <div className="header">Login</div>

          <div className="content">
          <input id="email" size={40} type="email" placeholder="Email"></input>
          <input id="password" size={40} type="password" placeholder="Password"></input>
          
          <Link to="/resetpw">
            <div className="reset">Forgot your password?</div>
          </Link>
          </div>
          <input id="signin" class="btn btn-primary" type="submit" value="Sign in"></input>
          <Link to="/create">
            <div className="create">Create Account</div>
          </Link>
       
      </div>
    </>
  );
}

export default Login;
