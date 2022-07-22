import React from "react";
import "./css/AcademicDets.css";

import { Utilheadicons } from "./utilheadicons";
import { useState } from "react";
import { UnOffTrans } from "./UnOffTrans";
import { CheckListing } from "./CheckListing";
import  {SelectCourses}  from "./SelectCourses";

export const CourseSelection = () => {
  const [active, setActive] = useState("SelectCourses");

  return (
    <>
      <div className="AcademicDetails">
        <div className="overviewHead">
          <h1>Overview</h1>
          <Utilheadicons />
        </div>
        <div className="academicDetailsActions">
          <h5 onClick={() => setActive("SelectCourses")}>Select Courses</h5>
          <h5 onClick={() => setActive("CourseList")}>Course list</h5>
          <h5 onClick={() => setActive("OutstandingCourses")}>Outstanding Courses</h5>
          <h5 onClick={() => setActive("SpecialSelection")}>Special Selection</h5>
        </div>
        <hr />
        {active === "SelectCourses" && <SelectCourses />}
        {active === "CourseList" && <UnOffTrans />}
        {active === "OutstandingCourses" && <CheckListing />}
        {active === "SpecialSelection" && <CheckListing />}
      </div>
    </>
  );
};
