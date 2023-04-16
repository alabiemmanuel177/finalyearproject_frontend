import React from 'react';
import { TabContext, TabPanel, TabList } from '@mui/lab';
import { Tab } from '@mui/material';
import CourseList from '../../../components/Student/Classroom Student/CourseList'
import Resources from '../../../components/Student/Classroom Student/Courses Resources'
import './css/courses.css'
import {
  useState,
  useEffect
} from "react";
import config from '../../../config';
import axios from 'axios';
import io from "socket.io-client";
const socket = io(`${config.baseURL}`);

socket.on('LECTURER_UPLOADED_NEW_COURSES', (message) => {
  console.log(message)
  window.location.reload();
});

const Courses = ({ student }) => {

  const [value, setValue] = useState(localStorage.getItem('scactiveTab') || 'Overview'); // Initialize the active tab value from localStorage, or default to '1'

  const handleChange = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem('scactiveTab', newValue); // Store the active tab value in localStorage
  };
  const id = student.class

  //Get Courses from class
  const [objclass, setObjClass] = useState("");
  const [courses, setCourses] = useState([])
  const [isCourses, setIsCourses] = useState(true)
  useEffect(() => {
    const fetchCourses = async () => {
      const res = await axios.get(`${config.baseURL}/class/courses/${id}`);
      setObjClass(res.data);
      setCourses(res.data.courses)
      setIsCourses(false)
    };
    fetchCourses();
  }, [id]);

  //Get class resources
  const [resources, setResources] = useState([])
  const [isResources, setIsResources] = useState(true)
  useEffect(() => {
    const fetchResources = async () => {
      const res = await axios.get(`${config.baseURL}/class/classes/${id}/resources`);
      setResources(res.data);
      setIsResources(false)
    };
    fetchResources();
  }, [id]);
  return (
    <div className="courses">
      <div className='courseheader'>
        <div className="title"><h3>Courses</h3></div>
        <div>
          <TabContext value={value}>
            <div style={{ padding: 0 }}>
              <TabList sx={{ padding: 0, marginLeft: 1, paddingBottom: 0, textTransform: 'none' }} onChange={handleChange}>
                <Tab sx={{ fontWeight: 'bold', color: 'black', paddingBottom: 0, textTransform: 'none' }} value={'Overview'} label='Overview' />
                <Tab sx={{ fontWeight: 'bold', color: 'black', paddingBottom: 0, textTransform: 'none' }} value={'Schedule'} label='Resources' />
              </TabList>
            </div>
            <TabPanel sx={{ p: 0 }} value={'Overview'}><CourseList courses={courses} isCourses={isCourses} /></TabPanel>
            <TabPanel sx={{ p: 0 }} value={'Schedule'}><Resources resources={resources} isResources={isResources} /></TabPanel>
          </TabContext>
        </div>
      </div>
    </div>
  )
}

export default Courses