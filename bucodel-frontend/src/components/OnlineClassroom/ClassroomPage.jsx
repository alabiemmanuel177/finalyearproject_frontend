import React from "react";
import "../css/AcademicDets.css";
import { Utilheadicons } from "../utilheadicons";
import { useState } from "react";
import { SelectCourses } from "../Course Selection/SelectCourses";
import { Classes } from "./Classes";
import { Assignment } from "./Assignment";

export const ClassroomPage = ({ active, setActive }) => {
  const [active1, setActive1] = useState("Classes");

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
          <h2>Classroom</h2>
          <Utilheadicons />
        </div>
        <div className="academicDetailsActions" id="academicDetailsActions">
          <h5
            className="action1 activeaction"
            onClick={() => setActive1("Classes")}
          >
            Classes
          </h5>
          <h5 className="action1" onClick={() => setActive1("Assignments")}>
            Assignments
          </h5>
          <h5 className="action1" onClick={() => setActive1("")}>
            Schedule
          </h5>
        </div>
        <hr />
        {active1 === "Classes" && <Classes active={active} setActive={setActive}/>}
        {active1 === "Assignments" && <Assignment />}
        {active1 === "Schedule" && <SelectCourses />}
      </div>
    </>
  );
};
