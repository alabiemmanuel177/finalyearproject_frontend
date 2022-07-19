import React from "react";
import "./css/classroom_sidebar.css";
import { FcSettings } from "react-icons/fc";
import { HiLogout } from "react-icons/hi";
import { SiGoogleclassroom } from "react-icons/si";
import { BsBookFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

export const ClassroomSidebar = () => {
  return (
    <div className="classroom_sidebar">
      <h1 className="loginhead head sidebar_head">BUCODeL</h1>
      <div className="sidebar_button">
        <button className="blue">
          <MdDashboard className="icon" />
          Dashboard
        </button>
        <button className="blue">
          <FaGraduationCap className="icon" />
          Academic Details
        </button>
        <button className="blue">
          <BsBookFill className="icon" />
          Course Selection
        </button>
        <button className="blue">
          <SiGoogleclassroom className="icon" />
          Classroom
        </button>
      </div>
      <div className="sidebar_util">
        <div className="sidebar_button">
          <button className="blue">
            <FcSettings className="icon" />
            Settings
          </button>
          <button className="blue">
            <HiLogout className="icon" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
