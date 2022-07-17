import React from "react";
import "./css/classroom_sidebar.css";

export const Classroom_sidebar = () => {
  return (
    <div className="classroom_sidebar">
      <h1 className="loginhead head sidebar_head">BUCODeL</h1>
      <div className="sidebar_button">
        <button className="blue">Dashboard</button>
        <button className="blue">Academic Details</button>
        <button className="blue">Course Selection</button>
        <button className="blue">Classroom</button>
      </div>
      <div className="sidebar_util">
        <div className="sidebar_button">
          <button className="blue">Settings</button>
          <button className="blue">Logout</button>
        </div>
      </div>
    </div>
  );
};
