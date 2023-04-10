import React, { useState } from 'react'
import Sidebar from '../../../components/Student/Classroom Student/Sidebar'
import "./css/Classroom.css"
import { FaRegUserCircle } from "react-icons/fa";
import { Outlet } from 'react-router-dom';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IconButton } from '@mui/material';
import Notifications from '../../../components/Lecturer/modal/Notifications';
import {ProfilePicture} from "../../../components/Student/Classroom Student/ProfilePicture"
const Classroom = ({ student }) => {
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
                        <ProfilePicture student={student} />
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: '12px'}}>
                            <h3 style={{margin: '0 0 5px 0'}}>{student.firstname} {student.lastname} {student.middlename}</h3>
                            <h5 style={{margin:0}}>{student.matricno}</h5>
                        </div>
                    </div>
                </div>
                <div className='classoutlet'><Outlet /></div>
            </div>
        </div>
    )
}

export default Classroom