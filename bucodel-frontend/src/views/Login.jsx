import React from "react";
import { LoginForm } from "../components/LoginForm";
import "./css/Login.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="loginform_container">
        <h1 className="loginhead head">BUCODeL</h1>
        <LoginForm />
      </div>
      <div className="logintext">
        <div className="logintext_container">
          <h1>Welcome Back!</h1>
          <h3>
            Study and earn a degree in Babcock <br/>
            University through its
            <span>
              {" "}
              Center for Open <br/>
              Distance and E-Learning(E-tech/ <br/>BUCODeL)
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};
