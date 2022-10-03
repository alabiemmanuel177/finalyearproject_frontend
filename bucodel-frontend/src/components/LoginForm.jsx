import React from "react";
import { Link } from "react-router-dom";
import "./css/LoginForm.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const LoginForm = () => {
  return (
    <div>
      <h2 className="loginhead" style={{ marginBottom: "40px" }}>
        Log In
      </h2>
      <form className="LoginForm">
        <div className="mb-3" id="UserLogin">
          <input
            type="email"
            placeholder="Username"
            className="form-control loginEmail focus"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control loginPassword focus"
            placeholder="Password"
          />
          <Link to="/passwordreset">
            <p className="F-pass">Forgot Password?</p>
          </Link>
        </div>

        <button type="submit" className="btn btn-primary loginBtn">
          Login
        </button>
      </form>
    </div>
  );
};
