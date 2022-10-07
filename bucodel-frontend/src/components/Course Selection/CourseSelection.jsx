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
  const [submitActive, setSubmitActive] = useState("Submit");

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
          <h2>Overview</h2>
          <Utilheadicons />
        </div>
        <div className="academicDetHead">
          <div className="academicDetailsActions" id="academicDetailsActions">
            <h5
              className="action1 activeaction"
              onClick={() => {
                setActive("SelectCourses");
                setSubmitActive("Submit");
              }}
            >
              Select Courses
            </h5>
            <h5
              className="action1"
              onClick={() => {
                setActive("CourseList");
                setSubmitActive("Submit");
              }}
            >
              Course list
            </h5>
            <h5
              className="action1"
              onClick={() => {
                setActive("OutstandingCourses");
                setSubmitActive("NoSubmit");
              }}
            >
              Outstanding Courses
            </h5>
            <h5
              className="action1"
              onClick={() => {
                setActive("SpecialSelection");
                setSubmitActive("NoSubmit");
              }}
            >
              Special Selection
            </h5>
          </div>
          {submitActive === "Submit" && (
            <div className="download_icon">
              <button className="coursesubmit-btn">Submit</button>
            </div>
          )}
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
