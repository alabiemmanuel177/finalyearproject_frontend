import React from 'react'
import Sidebar from '../../../components/Student/Classroom Student/Sidebar'
import "./css/Classroom.css"
import { FaRegUserCircle } from "react-icons/fa";
import { Outlet } from 'react-router-dom';

const Classroom = ({ student }) => {

    return (
        <div className="classroom">
            <div className="sidebarContainer">
                <Sidebar />
            </div>
            <div className='classScreen'>
                <div className="classroomContainer">
                    <div className="util">
                        <FaRegUserCircle className='icon1' />
                        <div>
                            <h3>{student.firstname} {student.lastname} {student.middlename}</h3>
                            <h5>{student.matricno}</h5>
                        </div>
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default Classroom