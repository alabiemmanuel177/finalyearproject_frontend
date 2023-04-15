import React, { useEffect, useState } from 'react'
import './css/Dashboard.css'
import { HiOutlineBookmarkAlt } from "react-icons/hi";
import { HiOutlineDocumentText } from "react-icons/hi";
import Calendar from './Calendar';
import axios from 'axios';
import config from '../../../config';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { SkdashboardMetrics } from '../../../components/Skeleton Loader/dasboardMetrics';
import { SkdasboardContentBody } from '../../../components/Skeleton Loader/dasboardMetrics';
import { SkddashboardAssignment } from '../../../components/Skeleton Loader/dasboardMetrics';
import { SkdashboardNotice } from '../../../components/Skeleton Loader/dasboardMetrics';
const Dashboard = ({ student }) => {
  const [courseCount, setCourseCount] = useState("");
  const [isCCFetching, setIsCCFetching] = useState(true);
  useEffect(() => {
    const fetchCourseCount = async () => {
      const res = await axios.get(`${config.baseURL}/class/classes/${student.class}/course-count`);
      setCourseCount(res.data.courseCount);
      setIsCCFetching(false)
    };
    fetchCourseCount();
  });

  const [assignmentCount, setAssignmentCount] = useState("");
  const [isAssignmentCountFetching, setIsAssignmentCountFetching] = useState(true);

  useEffect(() => {
    const fetchAssignmentCount = async () => {
      const res = await axios.get(`${config.baseURL}/class/classes/${student.class}/assignment-count`);
      setAssignmentCount(res.data.assignmentCount);
      setIsAssignmentCountFetching(false)
    };
    fetchAssignmentCount();
  });

  const [notices, setNotices] = useState([]);
  const [isNotices, setIsNotices] = useState(true);
  useEffect(() => {
    const fetchNotices = async () => {
      const res = await axios.get(`${config.baseURL}/notice`);
      setNotices(res.data);
      setIsNotices(false)
    };
    fetchNotices();
  });

  const [assignedAssignments, setAssignedAssignments] = useState([])
  const [isAssignedAssignments, setIsAssignedAssignments] = useState(true)
  useEffect(() => {
    const fetchAssignedAssignments = async () => {
      const res = await axios.get(`${config.baseURL}/student/${student._id}/assignments/notsubmitted`);
      setAssignedAssignments(res.data);
      setIsAssignedAssignments(false)
    };
    fetchAssignedAssignments();
  }, [student._id]);
  return (
    <div className="dashboard">
      <div className="dashboardBody" >
        <div className="metricsbody">
          <div className="dashboardMetrics flexrow" >

            {isCCFetching ? <SkdashboardMetrics /> :
              <div className="dashboardCourses w222h98" >
                <h4>Courses this semester</h4>
                <div className='flexrow sb'>
                  <h3>{courseCount}</h3>
                  <div className="hw40">
                    <HiOutlineBookmarkAlt className='icon11 blue' />
                  </div>
                </div>
              </div>}
            {isAssignmentCountFetching ? <SkdashboardMetrics /> :
              <div className="dashboardAssignments w222h98">
                <h4>Assignments</h4>
                <div className='flexrow sb'>
                  <h3>{assignmentCount}</h3>
                  <div className="hw40">
                    <HiOutlineDocumentText className='icon11 blue' />
                  </div>
                </div>
              </div>}
            {isAssignmentCountFetching ? <SkdashboardMetrics /> :
              <div className="dashboardLevel w222h98">
                <h4>Level</h4>
                <div className='flexrow sb'>
                  <h3>{student.level}</h3>
                  <div className="hw40">
                    <HiOutlineDocumentText className='icon11 blue' />
                  </div>
                </div>
              </div>}
          </div>
        </div>

        <div className='dashboardContentBody'>
          {isAssignmentCountFetching ? <SkdasboardContentBody /> :
            <div className="dashboardContent flexrow" >
              <img src="https://res.cloudinary.com/manlikeemma/image/upload/v1677670946/BUCODEL/undraw_reading_time_re_phf7_1_sboim1.svg" alt="" style={{ height: "200px" }} />
              <div className="welcomeText flexColumn">
                <h4>Hello {student.firstname},</h4>
                <h5>Welcome to our platform, where you can discover, learn, and achieve your academic goals. Let's get started</h5>
              </div>
            </div>}</div>
        <div className="assnoticeblody">
          <div className="dashboardAssignmentNoticeBoard flexrow sb">
            {isAssignedAssignments ? <SkddashboardAssignment /> :
              <div className="dashboardAssignment" style={{ overflow: 'hidden auto' }}>
                <div className='flexrow sb ac'>
                  <h4>Assignment</h4>
                  <Link to={"/assignment"}><h5 className='blue'>View all</h5></Link>
                </div>
                <div className="dashboardAssignmentContent">
                  {assignedAssignments.map((p) => (
                    <Assignment assignedAssignment={p} key={p._id} />
                  ))}
                </div>

              </div>}
            {isNotices ? <SkdashboardNotice /> :<div className="dashboardNotice">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4>Notice</h4>
              </div>
              <div className="noticeContainer">
                {notices.map((p) => (
                  <Notice notice={p} key={p._id} />
                ))}
              </div>

            </div>}
          </div>
        </div>

      </div>
      <div className="dashboardUtil">
        <div className="calendar">
          <Calendar />
        </div>
      </div>
    </div>
  )
}

const Assignment = (assignedAssignment) => {
  const formattedDate = moment(assignedAssignment.assignedAssignment.dueDate).format("Do MMM, h:mm a");
  return (
    <Link to={`/doassignment/${assignedAssignment.assignedAssignment._id}`} style={{ textDecoration: 'none' }}>
      <div className="assignmentDash flexrow sb">
        <div className='flexColumn'>
          <h4>{`${assignedAssignment.assignedAssignment.courseId.courseabrev} : ${assignedAssignment.assignedAssignment.title}`}</h4>
          <h5 className='blue'>{`Due, ${formattedDate} `}</h5>
        </div>
        <div className="assignmentDashMark">
          <button>{`${assignedAssignment.assignedAssignment.grade} marks`}</button>
        </div>
      </div>
      <hr />
    </Link>)
}

function Notice({ notice }) {
  const formattedDate = moment(notice.createdAt).format("Do MMM, h:mm a");
  return (
    <div className="notice-dash-item">
      <div className="notice-dash-header">
        <Avatar sx={{ width: 30, height: 30 }}>A</Avatar>
        <div className="notice-dash-header-info">
          <h6 className='ass-info-title notice-date'>{notice.author.name}</h6>
          <p className='ass-info-date'>{formattedDate}</p>
        </div>
      </div>
      <div className="notice-dash-body">
        <p>{notice.description}</p>
      </div>
    </div>
  )
}




export default Dashboard