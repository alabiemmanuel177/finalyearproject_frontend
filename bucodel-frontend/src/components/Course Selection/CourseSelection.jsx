import React from "react";
import "../css/AcademicDets.css";

import { Utilheadicons } from "../utilheadicons";
import { useState } from "react";
import { SelectCourses } from "./SelectCourses";
import { CourseList } from "./CourseList";
import { OutstandingCourses } from "./OutstandingCourses";
import { SpecialSelection } from "./SpecialSelection";

export const CourseSelection = () => {
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
          <h1>Overview</h1>
          <Utilheadicons />
        </div>
        <div className="academicDetailsActions" id="academicDetailsActions">
          <h5
            className="action1 activeaction"
            onClick={() => setActive("SelectCourses")}
          >
            Select Courses
          </h5>
          <h5 className="action1" onClick={() => setActive("CourseList")}>
            Course list
          </h5>
          <h5
            className="action1"
            onClick={() => setActive("OutstandingCourses")}
          >
            Outstanding Courses
          </h5>
          <h5 className="action1" onClick={() => setActive("SpecialSelection")}>
            Special Selection
          </h5>
        </div>
        <hr />
        {active === "SelectCourses" && <SelectCourses />}
        {active === "CourseList" && <CourseList />}
        {active === "OutstandingCourses" && <OutstandingCourses />}
        {active === "SpecialSelection" && <SpecialSelection />}
      </div>
    </>
  );
};
