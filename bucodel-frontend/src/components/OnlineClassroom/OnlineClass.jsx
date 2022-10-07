import React from "react";
import "../css/AcademicDets.css";
import { Utilheadicons } from "../utilheadicons";
import { useState } from "react";
import { Stream } from "./Stream";

export const OnlineClass = () => {
  const [active1, setActive1] = useState("Stream");

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
            onClick={() => setActive1("Stream")}
          >
            Stream
          </h5>
          <h5 className="action1" onClick={() => setActive1("Resources")}>
            Resources
          </h5>
          <h5 className="action1" onClick={() => setActive1("Classwork")}>
            Classwork
          </h5>
          <h5 className="action1" onClick={() => setActive1("People")}>
            People
          </h5>
        </div>
        <hr />
        {active1 === "Stream" && <Stream/>}
        {active1 === "Resources" && <></>}
        {active1 === "Classwork" && <></>}
        {active1 === "People" && <></>}
      </div>
    </>
  );
};
