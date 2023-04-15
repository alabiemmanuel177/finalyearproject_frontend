import React, { useContext, useRef, useState } from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { adminContext } from '../../context/Context';
import axios from 'axios';
import config from "../../config";

const AdminLogin = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(adminContext);
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(`${config.baseURL}/admin/login`, {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.data && window.location.replace("/admindashboard");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setError(err.response.data.message);
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
          <div className="flexRow jcsb ac"><NavLink to='/' style={{ textDecoration: 'none', color: 'black' }}>
            <div className="back">
              <IoMdArrowRoundBack className="icon20" />
            </div>
          </NavLink>
            <h4>Admin</h4> </div>

          <form className='lectlogin flexColumn' onSubmit={handleSubmit}>
            <h3>Log In</h3>
            <label>Email</label>
            <input type="text" placeholder='Email' ref={emailRef} />
            <label>Password</label>
            <input type="password" placeholder='Your Password' ref={passwordRef} />
            <NavLink to='/lecturerreset' style={{ textDecoration: 'none' }}>
              <h4>Forgot Password?</h4>
            </NavLink>
            <button type='submit' disabled={isFetching}>Log In</button>
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin