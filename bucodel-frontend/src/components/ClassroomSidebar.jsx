import React, { useState } from "react";
import "./css/classroom_sidebar.css";
import { IoMdSettings } from "react-icons/io";
import { HiLogout } from "react-icons/hi";
import { SiGoogleclassroom } from "react-icons/si";
import { BsBookFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { LogoutModal } from "./modal/LogoutModal";

export const ClassroomSidebar = ({ active, setActive }) => {
  var btnContainer = document.getElementById("sidebar_button");
  if (btnContainer !== null) {
    var btns = btnContainer.getElementsByClassName("sidebarbtn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  }
  const [showLogoutModal, setLogoutModal] = useState(false);

  const openLogoutModal = () => {
    setLogoutModal((prev) => !prev);
  };

  return (
    <div className="classroom_sidebar">
      <h1 className="sidebar_head">BucoDeL</h1>
      <div className="sidebar_button" id="sidebar_button">
        <btn
          className="sidebarbtn  active blue "
          onClick={() => setActive("Dashboard")}
        >
          <MdDashboard className="icon" />
          Dashboard
        </btn>
        <btn
          className="sidebarbtn blue"
          onClick={() => setActive("Academics")}
        >
          <FaGraduationCap className="icon" />
          Academic Details
        </btn>
        <btn
          className="sidebarbtn blue"
          onClick={() => setActive("Course Selection")}
        >
          <BsBookFill className="icon" />
          Course Selection
        </btn>
        <btn
          className="sidebarbtn blue"
          onClick={() => setActive("Classroom")}
        >
          <SiGoogleclassroom className="icon" />
          Classroom
        </btn>
      </div>
      <div className="sidebar_util">
        <div className="sidebar_button">
          <btn
            className="sidebarbtn blue"
            onClick={() => setActive("Settings")}
          >
            <IoMdSettings className="icon" />
            Settings
          </btn>
          <btn className="sidebarbtn blue" onClick={openLogoutModal}>
            <HiLogout className="icon" />
            Logout
          </btn>
          <LogoutModal
            showModal={showLogoutModal}
            setShowModal={setLogoutModal}
          />
        </div>
      </div>
    </div>
  );
};
