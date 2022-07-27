import { React, useState } from "react";
import { ClassroomSidebar } from "../components/ClassroomSidebar";
import "./css/Classroom.css";
import { Dashboard } from "../components/Dashboard";
import { AcademicDet } from "../components/Academic Details/AcademicDet";
import { CourseSelection } from "../components/CourseSelection";
import { OnlineClass } from "../components/OnlineClassroom/OnlineClass";
import { Settings } from "../components/Settings";


export const Classroom = () => {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="Classroom">
      <div className="classroom_sidebar_container">
        <ClassroomSidebar active={active} setActive={setActive} />
      </div>
      {active === "Dashboard" && <Dashboard />}
      {active === "Academics" && <AcademicDet />}
      {active === "Course Selection" && <CourseSelection />}
      {active === "Classroom" && <OnlineClass />}
      {active === "Settings" && <Settings />}
    </div>
  );
};
