import React from "react";
import { ClassroomSidebar } from "../components/ClassroomSidebar";
import "./css/Classroom.css";
import { ClassroomUtil } from "../components/ClassroomUtil";
import { ClassroomMain } from "../components/ClassroomMain";

export const Classroom = () => {
  return (
    <div className="Classroom">
      <div className="classroom_sidebar_container">
        <ClassroomSidebar />
      </div>
      <div className="classroom_main_container">
        <ClassroomMain />
      </div>
      <div className="classroom_util_container">
        <ClassroomUtil />
      </div>
    </div>
  );
};
