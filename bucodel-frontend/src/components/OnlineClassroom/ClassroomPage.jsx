import React from "react";
import "../css/AcademicDets.css";

import { Utilheadicons } from "../utilheadicons";
import { useState } from "react";
import { SelectCourses } from "../Course Selection/SelectCourses";
import { Classes } from "./Classes";
// import { OutstandingCourses } from "./OutstandingCourses";
// import { SpecialSelection } from "./SpecialSelection";

export const ClassroomPage = () => {
  const [active, setActive] = useState("SelectCourses");

  var btnContainer = document.getElementById("academicDetailsActions");
  if (btnContainer !== null) {
    var btns = btnContainer.getElementsByClassName("action1");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("activeaction");
        current[0].className = current[0].className.replace(
          " activeaction",
          ""
        );
        this.className += " activeaction";
      });
    }
  }
  return (
    <>
      <div className="AcademicDetails">
        <div className="overviewHead">
          <h1>Classroom</h1>
          <Utilheadicons />
        </div>
        <div className="academicDetailsActions" id="academicDetailsActions">
          <h5 className="action1 activeaction" onClick={() => setActive("Classes")}>
            Classes
          </h5>
          <h5 className="action1" onClick={() => setActive("")}>
            Assignments
          </h5>
          <h5 className="action1" onClick={() => setActive("")}>
            Schedule
          </h5>
        </div>
        <hr />
        {active === "Classes" && <Classes />}
        {active === "CourseList" && <SelectCourses />}
        {active === "OutstandingCourses" && <SelectCourses />}
      </div>
    </>
  );
};
