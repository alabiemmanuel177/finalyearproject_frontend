import React from "react";
import "./css/AcademicDets.css";

import { Utilheadicons } from "./utilheadicons";
import { useState } from "react";
import { UnOffTrans } from "./UnOffTrans";
import { CheckListing } from "./CheckListing";
import { SemesterResult } from "./SemesterResult";

export const AcademicDet = () => {
  const [active, setActive] = useState("SemesterResult");

  return (
    <>
      <div className="AcademicDetails">
        <div className="overviewHead">
          <h1>Overview</h1>
          <Utilheadicons />
        </div>
        <div className="academicDetailsActions">
          <h5 onClick={() => setActive("SemesterResult")}>Semester Result</h5>
          <h5 onClick={() => setActive("UnOffTrans")}>Unofficial Transcript</h5>
          <h5 onClick={() => setActive("CheckListing")}>Check Listing</h5>
        </div>
        <hr />
        {active === "SemesterResult" && <SemesterResult />}
        {active === "UnOffTrans" && <UnOffTrans />}
        {active === "CheckListing" && <CheckListing />}
      </div>
    </>
  );
};
