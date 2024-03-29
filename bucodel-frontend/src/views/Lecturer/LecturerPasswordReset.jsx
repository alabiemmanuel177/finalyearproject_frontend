import React from 'react'
import './css/lecturerlogin.css'
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const LecturerPasswordReset = () => {
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
          <NavLink to='/lecturerlogin' style={{ textDecoration: 'none', color: 'black'}}>
            <div className="back">
              <IoMdArrowRoundBack className="icon20" />
            </div> </NavLink>
          <form className='lectlogin flexColumn'>
            <h3>Password Reset</h3>
            <label>Email</label>
            <input type="email" placeholder='johndoe@gmail.com' />

            <button>Log In</button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default LecturerPasswordReset