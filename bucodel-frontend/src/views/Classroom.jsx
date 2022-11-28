import React from 'react'
import Sidebar from '../components/Classroom/Sidebar'
import Courses from '../views/Classroom/Courses'
import "./css/Classroom.css"
import {
    useState,
    // useEffect
} from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

const Classroom = () => {
    const [active, setActive] = useState("dashboard");

    return (
        <div className="classroom">
            <div className="sidebarContainer">
                <Sidebar active={active} setActive={setActive} />
            </div>
            <div className='classScreen'>
                <div className="classroomContainer">
                    <div className="util">
                        <IoMdNotificationsOutline className='icon' />
                        <FaRegUserCircle className='icon1' />
                        <div>
                            <h3>Izu Onisokumen Preye</h3>
                            <h5>19/1485</h5>
                        </div>
                    </div>
                </div>
                {active === "dashboard" && <Courses />}
            </div>
        </div>
    )
}

export default Classroom