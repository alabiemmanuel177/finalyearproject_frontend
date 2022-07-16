import React from "react";
import "./css/LoginForm.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const LoginForm = () => {
  return (
    <div>
      <h2 className="loginhead" style={{marginBottom:"30px"}}>Login</h2>
      <form className="LoginForm">
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" placeholder="example@gmail.com" className="form-control loginEmail focus" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control loginPassword focus" placeholder="6+ strong character"/>
        </div>
        <p className="loginhead">Forgot Password?</p>        
        <button type="submit" className="btn btn-primary loginBtn">
          Login
        </button>
      </form>
    </div>
  );
};
