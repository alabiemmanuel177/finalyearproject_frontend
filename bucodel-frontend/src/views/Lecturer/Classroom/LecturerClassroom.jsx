import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { FaBell, FaRegUserCircle } from "react-icons/fa";
import Sidebar from '../../../components/Lecturer/Classroom Lecturer/Sidebar'
import { IoMdNotificationsOutline } from 'react-icons/io';
import { Button, IconButton } from '@mui/material';
import { MenuItem, Menu } from '@mui/material';
import Notifications from '../../../components/Lecturer/modal/Notifications';

const LecturerClassroom = ({lecturer}) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div className="classroom">
      <div className="sidebarContainer">
        <Sidebar />
      </div>
      <div className='classScreen'>
        <div className="classroomContainer">
          <div className="util" style={{ borderRight: '1px solid lightgray' }}>
            <IconButton
              id='notification-button'
              aria-controls={open ? 'notification-button' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <IoMdNotificationsOutline className='icon1' />
            </IconButton>
            <Notifications open={open} anchorEl={anchorEl} handleClose={handleClose} />
          </div>
          <div className="util">
            <FaRegUserCircle className='icon1' />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: '15px'}}>
                <h3 style={{margin: '0'}}>{lecturer.name}</h3>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default LecturerClassroom