import React from "react";
import { PasswordResetForm } from "../components/PasswordResetForm";
import "./css/Login.css";

export const PasswordReset = () => {
  return (
    <div className="login">
      <div className="loginform_container">
        <h1 className="loginhead head">BUCODeL</h1>
        <PasswordResetForm />
      </div>
      <div className="logintext">
        <div className="logintext_container">
          <h1>Password Reset</h1>
          <h3>
            Enter your Email and click on the reset button a<br /> link will be
            sent to reset your password in your
            <br /> email.
            <span> NB: There must be an existing email.</span>
          </h3>
        </div>
      </div>
    </div>
  );
};
