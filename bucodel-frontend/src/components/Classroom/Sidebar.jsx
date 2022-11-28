import React from 'react'
import "../css/Sidebar.css"
import { MdOutlineAssignment } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { HiOutlineBookmarkAlt } from "react-icons/hi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { RiDashboardLine } from "react-icons/ri";

const Sidebar = ({ active, setActive }) => {
    var btnContainer = document.getElementById("sidebarButton");
    if (btnContainer !== null) {
        var btns = btnContainer.getElementsByClassName("sidebar-button");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }
    }
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
                    <button className='sidebar-button active'
                        onClick={() => setActive("dashboard")}>
                        <RiDashboardLine className='icon' />
                        Dashboard
                    </button>
                    <button className='sidebar-button'
                        onClick={() => setActive("courses")}>
                        <HiOutlineBookmarkAlt className='icon' />
                        Courses
                    </button>
                    <button className='sidebar-button'
                        onClick={() => setActive("assignments")}>
                        <HiOutlineDocumentText className='icon' />
                        Assignments
                    </button>
                    <button className='sidebar-button'
                        onClick={() => setActive("resources")}>
                        <MdOutlineAssignment className='icon' />
                        Resources
                    </button>
                </div>
                <div className="settingButton">
                    <button className='sidebar-button'
                        onClick={() => setActive("setting")}>
                        <AiOutlineSetting className='icon' />
                        Settings
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Sidebar