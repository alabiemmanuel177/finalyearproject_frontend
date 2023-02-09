import React, { useEffect, useState } from 'react'
import './css/Dashboard.css'
import { HiOutlineBookmarkAlt } from "react-icons/hi";
import { HiOutlineDocumentText } from "react-icons/hi";
import Calendar from './Calendar';
import { FaRegUserCircle } from "react-icons/fa";
import axios from 'axios';
import config from '../../../config';

const Dashboard = ({ student }) => {
  const [courseCount, setCourseCount] = useState("");
  useEffect(() => {
    const fetchCourseCount = async () => {
      const res = await axios.get(`${config.baseURL}/class/classes/${student.class}/course-count`);
      setCourseCount(res.data.courseCount);
    };
    fetchCourseCount();
  });

  const [assignmentCount, setAssignmentCount] = useState("");
  useEffect(() => {
    const fetchAssignmentCount = async () => {
      const res = await axios.get(`${config.baseURL}/class/classes/${student.class}/assignment-count`);
      setAssignmentCount(res.data.assignmentCount);
    };
    fetchAssignmentCount();
  });

  return (
    <div className="dashboard">
      <div className="dashboardBody">
        <div className="dashboardMetrics flexrow">
          <div className="dashboardCourses w222h98">
            <h4>Courses this semester</h4>
            <div className='flexrow sb'>
              <h3>{courseCount}</h3>
              <div className="hw40">
                <HiOutlineBookmarkAlt className='icon11' />
              </div>
            </div>

          </div>
          <div className="dashboardAssignments w222h98">
            <h4>Assignments</h4>
            <div className='flexrow sb'>
              <h3>{assignmentCount}</h3>
              <div className="hw40">
                <HiOutlineDocumentText className='icon11' />
              </div>
            </div>
          </div>
          <div className="dashboardLevel w222h98">
            <h4>Level</h4>
            <div className='flexrow sb'>
              <h3>{student.level}</h3>
              <div className="hw40">
                <HiOutlineDocumentText className='icon11' />
              </div>
            </div>
          </div>
        </div>
        <div className="dashboardContent"></div>
        <div className="dashboardAssignmentNoticeBoard flexrow">
          <div className="dashboardAssignment">
            <div className='flexrow sb ac'>
              <h4>Assignment</h4>
              <h5 className='blue'>View all</h5>
            </div>
            <div className="dashboardAssignmentContent">
              <div className="assignmentDash flexrow sb">
                <div className='flexColumn'>
                  <h4>SENG 302: Assignment 1</h4>
                  <h5>Due, Dec 5 <span className='blue'>8:00 PM</span></h5>
                </div>

                <div className="assignmentDashMark">
                  <button>10 Marks</button>
                </div>
              </div>
              <hr />
              <div className="assignmentDash flexrow sb">
                <div className='flexColumn'>
                  <h4>SENG 302: Assignment 1</h4>
                  <h5>Due, Dec 5 <span className='blue'>8:00 PM</span></h5>
                </div>

                <div className="assignmentDashMark">
                  <button>10 Marks</button>
                </div>
              </div>
              <hr />
              <div className="assignmentDash flexrow sb">
                <div className='flexColumn'>
                  <h4>SENG 302: Assignment 1</h4>
                  <h5>Due, Dec 5 <span className='blue'>8:00 PM</span></h5>
                </div>

                <div className="assignmentDashMark">
                  <button>10 Marks</button>
                </div>
              </div>
              <hr />
              <div className="assignmentDash flexrow sb">
                <div className='flexColumn'>
                  <h4>SENG 302: Assignment 1</h4>
                  <h5>Due, Dec 5 <span className='blue'>8:00 PM</span></h5>
                </div>

                <div className="assignmentDashMark">
                  <button>10 Marks</button>
                </div>
              </div>
              <hr />
            </div>

          </div>
          <div className="dashboardNotice">
            <div>
              <h4>Notice</h4>
            </div>
            <div className="dashboardNoticeContent">
              <div className="noticeHead flexrow">
                <div ><FaRegUserCircle className='icon13' /></div>
                <div className="NameandTime">
                  <h4>Dr. Adetofunmi Adetunji</h4>
                  <h5>Dec 5 8:00 PM</h5>
                </div>
              </div>
              <div className="noticeContent">
                <h5>Your mid semester test would be on 1 August by 11am at WRA come with all necessary tools. Assignments would also be submitted. Goodluck!</h5>
              </div>
            </div>
            <div className="dashboardNoticeContent">
              <div className="noticeHead flexrow">
                <div ><FaRegUserCircle className='icon13' /></div>
                <div className="NameandTime">
                  <h4>Dr. Adetofunmi Adetunji</h4>
                  <h5>Dec 5 8:00 PM</h5>
                </div>
              </div>
              <div className="noticeContent">
                <h5>Your mid semester test would be on 1 August by 11am at WRA come with all necessary tools. Assignments would also be submitted. Goodluck!</h5>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="dashboardUtil">
        <div className="calendar">
          <Calendar />
        </div>
        <div className="taskBar">
          <h4 className='blue addTask'>+ Add Task</h4>
          <div className="task">
            <h4>Reviewing and summarizing a chapter of a textbook related to the student's specific area of study</h4>
          </div>
          <div className="task">
            <h4>Reviewing and summarizing a chapter of a textbook related to the student's specific area of study</h4>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard