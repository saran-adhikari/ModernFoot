import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
function Createaccount() {
  return (
    <>
      <div className="credentials">
        <div className="header">Create Account</div>
        <div className="content">
        <input id="email" type="text" placeholder="First name" size={40}></input>
        <input id="email" type="text" placeholder="Last name" ></input>
        <input id='email' type="email" placeholder="Email" ></input>
        <input id='email' type="password" placeholder="Password" ></input>
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
