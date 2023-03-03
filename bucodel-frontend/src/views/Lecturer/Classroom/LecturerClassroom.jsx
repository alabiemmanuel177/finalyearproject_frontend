import React from 'react';
import { Outlet } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import Sidebar from '../../../components/Lecturer/Classroom Lecturer/Sidebar'

const LecturerClassroom = ({lecturer}) => {
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
              <h3>{lecturer.name}</h3>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default LecturerClassroom