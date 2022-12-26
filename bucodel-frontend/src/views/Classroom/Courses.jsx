import React from 'react'
import CourseList from '../../components/Classroom Student/CourseList'
import Resources from '../../components/Classroom Student/Resources'
import './css/courses.css'
import {
  useState,
  // useEffect
} from "react";

const Courses = () => {
  var btnContainer = document.getElementById("headers");
  if (btnContainer !== null) {
    var btns = btnContainer.getElementsByClassName("headerButton");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active1");
        current[0].className = current[0].className.replace("active1", "");
        this.className += " active1";
      });
    }
  }
  const [active2, setActive2] = useState("overview");

  return (
    <div className="courses">
      <div className="title"><h3>Courses</h3></div>
      <div className="headers" id='headers'>
        <div className="overview headerButton active1"
          onClick={() => setActive2("overview")}><h3>Overview</h3></div>
        <div className="schedule headerButton"
          onClick={() => setActive2("resources")}><h3>Resources</h3></div>
      </div>
      <hr />
      {active2 === "overview" && <CourseList />}
      {active2 === "resources" && <Resources />}
    </div>
  )
}

export default Courses