import React from 'react';
import { Outlet } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import Sidebar from '../../../components/Lecturer/Classroom Lecturer/Sidebar'

const LecturerClassroom = () => {
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
              <h3>Izu Onisokumen Preye</h3>
              <h5>19/1485</h5>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default LecturerClassroom