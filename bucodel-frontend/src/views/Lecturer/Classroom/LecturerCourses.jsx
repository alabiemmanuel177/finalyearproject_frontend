import React from 'react'
import CourseList from '../../../components/Lecturer/Classroom Lecturer/CourseList'
import './css/courses.css'
import {
  useState,
  useEffect
} from "react";
// import io from "socket.io-client";
import config from '../../../config';
import axios from 'axios';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Tab } from '@mui/material';
// const socket = io(`${config.baseURL}`);

const LecturerCourses = ({ lecturer }) => {

  const [value, setValue] = useState("Overview");
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
              <Tab sx={{ fontWeight: 'bold', color: 'black', paddingBottom: 0, textTransform: 'none' }} label={'Overview'} value={"Overview"} />
              {/* <Tab sx={{ fontWeight: 'bold', color: 'black', paddingBottom: 0, textTransform: 'none' }} label={'Schedule'} value={"Schedule"} /> */}
            </TabList>
            <TabPanel sx={{ p: 0 }} className='coursestab' value='Overview'>
              <CourseList courses={courses} />
            </TabPanel>
            {/* <TabPanel sx={{ p: 0 }} className='coursestab' value='Schedule'>Schedule</TabPanel> */}
          </div>
        </TabContext>
      </div>
    </div>
  )
}

export default LecturerCourses