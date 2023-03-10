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
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Tab } from '@mui/material';
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
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => setValue(newValue);
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
        <TabContext value={value}>
          <div>
            <TabList onChange={handleChange}>
              <Tab label={'Overview'} value={"1"} />
              <Tab label={'Schedule'} value={"2"} />
            </TabList>
            <TabPanel className='coursestab' value='1'>
              <CourseList courses={courses} />
            </TabPanel>
            <TabPanel className='coursestab' value='2'>Schedule</TabPanel>
          </div>
        </TabContext>
      </div>
    </div>
  )
}

export default LecturerCourses