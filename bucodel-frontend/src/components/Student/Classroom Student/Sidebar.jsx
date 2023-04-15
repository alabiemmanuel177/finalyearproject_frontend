import React from 'react'
import "../css/Sidebar.css"
import { AiOutlineSetting } from "react-icons/ai";
import { HiOutlineBookmarkAlt } from "react-icons/hi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { HiOutlineLogout } from "react-icons/hi";
import { RiDashboardLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import LogOutModal from '../modal/LogOutModal';

const Sidebar = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    return (
        <div className="sidebar">
            <div className="logo">
                <div className="logoImg">
                    <img src="https://res.cloudinary.com/manlikeemma/image/upload/v1669629509/BUCODEL/Babcock_Logo_c46jjo.jpg" alt="Babcock Logo" />
                </div>
                <div className="logoText">
                    <h3>BUCODeL</h3>
                    <h5>Student</h5>
                </div>
            </div>
            <div className="sidebarButton" id='sidebarButton'>
                <div className="classroomButton">
                    <NavLink to="/dashboard">
                        <button className='sidebar-button'>
                            <RiDashboardLine className='icon' />
                            Dashboard
                        </button>
                    </NavLink>
                    <NavLink to="/courses">
                        <button className='sidebar-button'>
                            <HiOutlineBookmarkAlt className='icon' />
                            Courses
                        </button>
                    </NavLink>
                    <NavLink to="/assignment">
                        <button className='sidebar-button'>
                            <HiOutlineDocumentText className='icon' />
                            Assignments
                        </button>
                    </NavLink>
                    <div className="mgt200"></div>
                
                <NavLink to="/settings">
                    <button className='sidebar-button' >
                        <AiOutlineSetting className='icon' />
                        Settings
                    </button>
                </NavLink>
                <button className='sidebar-button' onClick={handleOpen}>
                    <HiOutlineLogout className='icon' />
                    Log Out
                </button>

            </div>
            <LogOutModal open={open} setOpen={setOpen} />
</div>
        </div>
    )
}

export default Sidebar