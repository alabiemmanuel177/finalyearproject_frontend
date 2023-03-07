import React from 'react'
import CourseList from '../../../components/Lecturer/Classroom Lecturer/CourseList'
import Resources from '../../../components/Lecturer/Classroom Lecturer/Resources'
import './css/courses.css'
import {
  useState,
  useEffect
} from "react";
import io from "socket.io-client";
import config from '../../../config';
import axios from 'axios';
const socket = io(`${config.baseURL}`);

const LecturerCourses = ({ lecturer }) => {
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
  const [courses, setCourses] = useState([])
  useEffect(() => {
    const fetchCourses = async () => {
      const res = await axios.get(`${config.baseURL}/lecturer/${lecturer._id}/courses`);
      setCourses(res.data)
    };
    fetchCourses();
  });
  return (
    <div className="courses">
      <div className="title"><h3>Courses</h3></div>
      <div className="headers" id='headers'>
        <div className="overview headerButton active1"
          onClick={() => setActive2("overview")}><h3>Overview</h3>
        </div>
        {/* <div className="schedule headerButton"
          onClick={() => setActive2("resources")}><h3>Resources</h3>
        </div> */}
      </div>
      <hr />
      {active2 === "overview" && <CourseList courses={courses} />}
      {/* {active2 === "resources" && <Resources />} */}
    </div>
  )
}

export default LecturerCourses