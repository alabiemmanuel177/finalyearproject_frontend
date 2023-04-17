import React, { useEffect, useState } from 'react'
import { HiOutlineBookmarkAlt } from "react-icons/hi";
import { HiOutlineDocumentText } from "react-icons/hi";
import Calendar from './LecturerCalendar';
import axios from 'axios';
import config from '../../../config';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';
import NewNotice from '../../../components/Lecturer/modal/NewNotice';
import { SkdasboardContentBody, SkdashboardMetrics, SkdashboardNotice, SkddashboardAssignment } from '../../../components/Skeleton Loader/dasboardMetrics';

const Dashboard = ({ lecturer }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);

  const [courseCount, setCourseCount] = useState("");
  const [isCCFetching, setIsCCFetching] = useState(true);
  useEffect(() => {
    const fetchCourseCount = async () => {
      const res = await axios.get(`${config.baseURL}/lecturer/${lecturer._id}/count-courses`);
      setCourseCount(res.data)
      setIsCCFetching(false)
        ;
    };
    fetchCourseCount();
  });

  const [assignmentCount, setAssignmentCount] = useState("");
  const [isAssignmentCountFetching, setIsAssignmentCountFetching] = useState(true);
  useEffect(() => {
    const fetchAssignmentCount = async () => {
      const res = await axios.get(`${config.baseURL}/lecturer/${lecturer._id}/assignments/count`);
      setAssignmentCount(res.data.count);
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

  const [studentCount, setStudentCount] = useState("");
  const [isStudentCount, setIsStudentCount] = useState(true);
  useEffect(() => {
    const fetchStudentCount = async () => {
      const res = await axios.get(`${config.baseURL}/lecturer/${lecturer._id}/students-count`);
      setStudentCount(res.data.studentCount);
      setIsStudentCount(false)
    };
    fetchStudentCount();
  });

  const [assignedAssignments, setAssignedAssignments] = useState([])
  const [isAssignedAssignments, setIsAssignedAssignments] = useState(true)
  useEffect(() => {
    const fetchAssignedAssignments = async () => {
      const res = await axios.get(`${config.baseURL}/lecturer/assignments/${lecturer._id}`);
      setAssignedAssignments(res.data);
      setIsAssignedAssignments(false)
    };
    fetchAssignedAssignments();
  }, [lecturer._id]);

  const shouldRenderSkeletons = isStudentCount || isCCFetching || isAssignmentCountFetching || isNotices || isAssignedAssignments;

  return (
    <div className="dashboard">
      <div className="dashboardBody">
        <div className="metricsbody">
          <div className="dashboardMetrics flexrow">
            {shouldRenderSkeletons ? <SkdashboardMetrics /> :
              <div className="dashboardCourses w222h98">
                <h4>Courses tutoring</h4>
                <div className='flexrow sb'>
                  <h3>{courseCount.count}</h3>
                  <div className="hw40">
                    <HiOutlineBookmarkAlt className='icon11' />
                  </div>
                </div>
              </div>}
            {shouldRenderSkeletons ? <SkdashboardMetrics /> :
              <div className="dashboardAssignments w222h98">
                <h4>Assignments given</h4>
                <div className='flexrow sb'>
                  <h3>{assignmentCount}</h3>
                  <div className="hw40">
                    <HiOutlineDocumentText className='icon11' />
                  </div>
                </div>
              </div>}
            {shouldRenderSkeletons ? <SkdashboardMetrics /> :
              <div className="dashboardLevel w222h98">
                <h4>Total students</h4>
                <div className='flexrow sb'>
                  <h3>{studentCount}</h3>
                  <div className="hw40">
                    <HiOutlineDocumentText className='icon11' />
                  </div>
                </div>
              </div>}
          </div>
        </div>
        <div className='dashboardContentBody'>
          {isAssignmentCountFetching ? <SkdasboardContentBody /> :
            <div className="dashboardContent flexrow">
              <img src="https://res.cloudinary.com/manlikeemma/image/upload/v1677670946/BUCODEL/undraw_reading_time_re_phf7_1_sboim1.svg" alt="" style={{ height: "200px" }} />
              <div className="welcomeText flexColumn">
                <h4>Hello {lecturer.name},</h4>
                <h5>Welcome to our platform, where you can discover, learn, and achieve your academic goals. Let's get started</h5>
              </div>
            </div>}
        </div>
        <div className="assnoticeblody">
          <div className="dashboardAssignmentNoticeBoard flexrow">
            {shouldRenderSkeletons ? <SkddashboardAssignment /> :
              <div className="dashboardAssignment">
                <div className='flexrow sb ac'>
                  <h4>Assignment</h4>
                  <Link to={'/lecturerassignment'}><h5 className='blue'>View all</h5></Link>
                </div>
                <div className="dashboardAssignmentContent">
                  {assignedAssignments.map((p) => (
                    <Assignment assignedAssignment={p} key={p._id} />
                  ))}
                </div>
              </div>}
            {shouldRenderSkeletons ? <SkdashboardNotice /> : <div className="dashboardNotice">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4>Notice</h4>
                <Button
                  sx={{ textTransform: 'none', fontWeight: 'bold' }}
                  variant='text'
                  onClick={handleOpen}
                >
                  Add +
                </Button>
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
      <NewNotice open={open} setOpen={setOpen} author={lecturer._id} />
    </div>
  )
}

const Assignment = (assignedAssignment) => {
  const formattedDate = moment(assignedAssignment.assignedAssignment.dueDate).format("Do MMM, h:mm a");
  return (
    <Link to={`/lecturerdoassignment/${assignedAssignment.assignedAssignment._id}`} style={{ textDecoration: 'none' }}>
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