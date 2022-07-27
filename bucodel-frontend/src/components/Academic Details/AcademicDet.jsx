import React from "react";
import "../css/AcademicDets.css";

import { Utilheadicons } from "../utilheadicons";
import { useState } from "react";
import { UnOffTrans } from "./UnOffTrans";
import { CheckListing } from "./CheckListing";
import { SemesterResult } from "./SemesterResult";

export const AcademicDet = () => {
  const [active, setActive] = useState("SemesterResult");

  var btnContainer = document.getElementById("academicDetailsActions");
  if (btnContainer !== null) {
  var btns = btnContainer.getElementsByClassName("action1");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("activeaction");
      current[0].className = current[0].className.replace(" activeaction", "");
      this.className += " activeaction";
    });
  }}

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
            onClick={() => setActive("SemesterResult")}
          >
            Semester Result
          </h5>
          <h5 className="action1" onClick={() => setActive("UnOffTrans")}>
            Unofficial Transcript
          </h5>
          <h5 className="action1" onClick={() => setActive("CheckListing")}>
            Check Listing
          </h5>
        </div>
        <hr />
        {active === "SemesterResult" && <SemesterResult />}
        {active === "UnOffTrans" && <UnOffTrans />}
        {active === "CheckListing" && <CheckListing />}
      </div>
    </>
  );
};
