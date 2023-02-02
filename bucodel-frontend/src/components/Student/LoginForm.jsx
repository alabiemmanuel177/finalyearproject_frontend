import React from "react";
import { Link } from "react-router-dom";
import "./css/LoginForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { studentContext } from "../../context/Context";
import { useContext, useRef } from "react";
import axios from "axios";
import config from "../../config";

export const LoginForm = () => {
  const matricnoRef = useRef();
  const passwordRef = useRef();
  const { dispatch } = useContext(studentContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(`${config.baseURL}/studentLogin`, {
        matricno: matricnoRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.data && window.location.replace("/dashboard");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div>
      <h2 className="loginhead" style={{ marginBottom: "40px" }}>
        Log In
      </h2>
      <form className="LoginForm" onSubmit={handleSubmit}>
        <div className="mb-3" id="UserLogin">
          <input
            type="text"
            placeholder="Matric Number"
            className="form-control loginEmail focus"
            ref={matricnoRef}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control loginPassword focus"
            placeholder="Password"
            ref={passwordRef}
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
