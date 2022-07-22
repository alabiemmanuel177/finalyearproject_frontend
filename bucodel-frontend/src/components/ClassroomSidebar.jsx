import React, { useState } from "react";
import "./css/classroom_sidebar.css";
import { FcSettings } from "react-icons/fc";
import { HiLogout } from "react-icons/hi";
import { SiGoogleclassroom } from "react-icons/si";
import { BsBookFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { LogoutModal } from "./modal/LogoutModal";

export const ClassroomSidebar = ({ active, setActive }) => {
  const [showLogoutModal, setLogoutModal] = useState(false);

  const openLogoutModal = () => {
    setLogoutModal((prev) => !prev);
  };

  var btnContainer = document.getElementById("sidebar_button")
  var btns = document.getElementsByClassName("sidebarbtn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }


  return (
    <div className="classroom_sidebar">
      <h1 className="loginhead head sidebar_head">BUCODeL</h1>
      <div className="sidebar_button" id="sidebar_button">
        <button className=" sidebarbtn active blue " onClick={() => setActive("Dashboard")}>
          <MdDashboard className="icon" />
          Dashboard
        </button>
        <button className="sidebarbtn blue" onClick={() => setActive("Academics")}>
          <FaGraduationCap className="icon" />
          Academic Details
        </button>
        <button className="sidebarbtn blue" onClick={() => setActive("Course Selection")}>
          <BsBookFill className="icon" />
          Course Selection
        </button>
        <button className="sidebarbtn blue" onClick={() => setActive("Classroom")}>
          <SiGoogleclassroom className="icon" />
          Classroom
        </button>
      </div>
      <div className="sidebar_util">
        <div className="sidebar_button">
          <button className="sidebarbtn blue" onClick={() => setActive("Settings")}>
            <FcSettings className="icon" />
            Settings
          </button>
          <button className="sidebarbtn blue" onClick={openLogoutModal}>
            <HiLogout className="icon" />
            Logout
          </button>
          <LogoutModal
            showModal={showLogoutModal}
            setShowModal={setLogoutModal}
          />
        </div>
      </div>
    </div>
  );
};
