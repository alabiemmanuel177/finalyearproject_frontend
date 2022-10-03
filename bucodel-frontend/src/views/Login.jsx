import React from "react";
import { LoginForm } from "../components/LoginForm";
import "./css/Login.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="loginform_container">
        <h1 className="loginhead head">BUCODeL</h1>
        <LoginForm className="L-form"/>
      </div>
      <div className="logintext">
        <div className="logintext_container">
          <h1>Welcome Back!</h1>
          <h3>
            Study and earn a degree in Babcock <br />
            University through its
            <span>
              {" "}
              Center for Open <br />
              Distance and E-Learning(E-tech/ <br />
              BUCODeL)
            </span>
          </h3>
        </div>
        <div className="loginsvg">
          <img
            src="https://res.cloudinary.com/manlikeemma/image/upload/v1659024078/BUCODEL/Log_In_g36kpt.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
