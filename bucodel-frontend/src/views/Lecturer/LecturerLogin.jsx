import React, { useContext, useRef, useState } from 'react'
import './css/lecturerlogin.css'
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { lecturerContext } from '../../context/Context';
import axios from 'axios';
import config from "../../config";
import { InfinitySpin } from 'react-loader-spinner';

const LecturerLogin = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(lecturerContext);
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set isLoading to true when submitting
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(`${config.baseURL}/lecturer/login`, {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.data && window.location.replace("/lecturerdashboard");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setError(err.response.data.message);
      setIsLoading(false); // Set isLoading to false when submitting
    }
  };
  return (
    <div className="lecturerLogin">
      <div className="loginNavbar">
        <div className="BULogo flexrow ">
          <div className="logoImg">
            <img src="https://res.cloudinary.com/manlikeemma/image/upload/v1669629509/BUCODEL/Babcock_Logo_c46jjo.jpg" alt="Babcock Logo" />
          </div>
          <div className="logoText">
            <h3>BUCODeL</h3>
          </div>
        </div>
        <hr className='hrMargin' />
      </div>
      <div className='LoginContainer mgt60'>
        <div className="lecturerLoginForm flexColumn">
          <NavLink to='/' style={{ textDecoration: 'none', color: 'black' }}>
            <div className="back">
              <IoMdArrowRoundBack className="icon20" />
            </div>
          </NavLink>
          <form className='lectlogin flexColumn' onSubmit={handleSubmit}>
            <h3>Log In</h3>
            <label>Email</label>
            <input type="text" placeholder='Email' ref={emailRef} />
            <label>Password</label>
            <input type="password" placeholder='Your Password' ref={passwordRef} />
            <NavLink to='/lecturerreset' style={{ textDecoration: 'none' }}>
              <h4>Forgot Password?</h4>
            </NavLink>
            <button type='submit' style={{ alignItems: "center", display: "flex", justifyContent: "center" }} disabled={isFetching}>{isLoading ? <InfinitySpin width='80' color='white' /> : "Log In"}</button>
            {error && <p className="error">{"Wrong Credential"}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default LecturerLogin