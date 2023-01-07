import React from "react";
import "./css/LoginForm.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const PasswordResetForm = () => {
  return (
    <div>
      <h2 className="loginhead" style={{ marginBottom: "40px" }}>
        Password Reset
      </h2>
      <form className="LoginForm">
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="form-control loginEmail focus"
          />
        </div>
        <button type="submit" className="btn btn-primary loginBtn">
          Reset Password
        </button>
      </form>
    </div>
  );
};
