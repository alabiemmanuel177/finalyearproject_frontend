import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'

export default function AdminHeader({ admin }) {
  return (
    <div className='page-header-root'>
      <div className='page-header-logo'>
        <div className="logo">
          <div className="logoImg">
            <img src="https://res.cloudinary.com/manlikeemma/image/upload/v1669629509/BUCODEL/Babcock_Logo_c46jjo.jpg" alt="Babcock Logo" />
          </div>
          <div className="logoText">
            <h3>BUCODeL</h3>
            <h5>Admin</h5>
          </div>
        </div>
      </div>
      <div className='page-header-menu'>
        <div className="pclassroomContainer">
          <FaRegUserCircle className='icon1' />
          <div className='page-util-details'>
            <h3>{admin.name}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
