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
      <div className="login_svg-1">
          <img
            src="https://res.cloudinary.com/manlikeemma/image/upload/v1664703033/BUCODEL/Group_1_gc0czt.svg"
            alt=""
          />
        </div>
        <div className="passrest_text_container">
          <h1>Password Reset</h1>
          <h3>
            Enter your Email and click on the reset button a<br /> link will be
            sent to reset your password in your
            <br /> email.
            <span> NB: There must be an existing email.</span>
          </h3>
        </div>
        <div className="passwordResetsvg">
          <img
            src="https://res.cloudinary.com/manlikeemma/image/upload/v1659024784/BUCODEL/Password_Reset_zkytni.svg"
            alt=""
          />
        </div>
        <div className="login_svg-3">
          <img
            src="https://res.cloudinary.com/manlikeemma/image/upload/v1664703033/BUCODEL/Group_2_zkqorp.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
