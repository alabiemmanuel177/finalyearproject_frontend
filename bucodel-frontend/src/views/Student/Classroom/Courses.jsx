import React from 'react'
import CourseList from '../../../components/Student/Classroom Student/CourseList'
import Resources from '../../../components/Student/Classroom Student/Resources'
import './css/courses.css'
import {
  useState,
  useEffect
} from "react";
import config from '../../../config';
import axios from 'axios';

const Courses = ({ student }) => {
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
  const id = student.class

  //Get Courses from class
  const [objclass, setObjClass] = useState("");
  const [courses, setCourses] = useState([])
  useEffect(() => {
    const fetchCourses = async () => {
      const res = await axios.get(`${config.baseURL}/class/courses/${id}`);
      setObjClass(res.data);
      setCourses(res.data.courses)
    };
    fetchCourses();
  }, []);
  //Get class resources
  const [resources, setResources] = useState([])
  useEffect(() => {
    const fetchResources = async () => {
      const res = await axios.get(`${config.baseURL}/class/classes/${id}/resources`);
      setResources(res.data);
    };
    fetchResources();
  }, []);
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
      {active2 === "overview" && <CourseList courses={courses} />}
      {active2 === "resources" && <Resources resources={resources} />}
    </div>
  )
}

export default Courses