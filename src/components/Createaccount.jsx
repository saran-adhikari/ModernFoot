import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
function Createaccount() {
  return (
    <>
      <div className="credentials">
        <div className="header">Create Account</div>
        <div className="content">
        <input id="text" type="text" placeholder="First name" size={40}></input>
        <input id="text" type="text" placeholder="Last name" size={40}></input>
        <input id='email' type="email" placeholder="Email" size={40}></input>
        <input id='password' type="password" placeholder="Password" size={40}></input>
        </div>
        <input id='create' class="btn btn-primary" type="submit" value="Create"></input>
        <Link to="/login">
          <div className="create">Cancel</div>
        </Link>
      </div>
    </>
  );
}

export default Createaccount;
