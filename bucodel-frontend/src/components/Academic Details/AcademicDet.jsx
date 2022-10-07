import React from "react";
import "../css/AcademicDets.css";
import { ImFolderDownload } from "react-icons/im";
import { Utilheadicons } from "../utilheadicons";
import { useState } from "react";
import { UnOffTrans } from "./UnOffTrans";
import { CheckListing } from "./CheckListing";
import { SemesterResult } from "./SemesterResult";

export const AcademicDet = () => {
  const [active, setActive] = useState("SemesterResult");
  const [downloadActive, setDownloadActive] = useState("NODownload");

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
                setActive("SemesterResult");
                setDownloadActive("NODownload");
              }}
            >
              Semester Result
            </h5>
            <h5
              className="action1"
              onClick={() => {
                setActive("UnOffTrans");
                setDownloadActive("Download");
              }}
            >
              Unofficial Transcript
            </h5>
            <h5
              className="action1"
              onClick={() => {
                setActive("CheckListing");
                setDownloadActive("NODownload");
              }}
            >
              Check Listing
            </h5>
          </div>
          {downloadActive === "Download" && (
            <div className="download_icon">
              <ImFolderDownload className="blue icon" />
            </div>
          )}
        </div>

        <hr />
        {active === "SemesterResult" && <SemesterResult />}
        {active === "UnOffTrans" && <UnOffTrans />}
        {active === "CheckListing" && <CheckListing />}
      </div>
    </>
  );
};
