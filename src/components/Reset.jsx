import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
function Reset() {
  return (
    <>
      <div className="credentials">
        <div className="header">Reset your Password</div>
        <p>We will send you an email to reset your passsword</p>
        <div className="content">
        <input id="email" size={40} type="email" placeholder="Email"></input>
        </div>
        <input
          id="submit"
          class="btn btn-primary"
          type="submit"
          value="Submit"
        ></input>
        
        <Link to="/login">
          <div className="create">Cancel</div>
        </Link>
      </div>
    </>
  );
}

export default Reset;
