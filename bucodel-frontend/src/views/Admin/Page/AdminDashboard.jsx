import { Add, BookmarkRounded, MoreHoriz, Person } from '@mui/icons-material'
import { Avatar, Button, IconButton } from '@mui/material'
import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { FaChalkboardTeacher } from 'react-icons/fa'
import config from '../../../config'
import Calendar from '../../Lecturer/Classroom/LecturerCalendar'
import '../Page/css/dashboard.css'

export default function AdminDashboard() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const [courseCount, setCourseCount] = useState("");
  useEffect(() => {
    const fetchCourseCount = async () => {
      const res = await axios.get(`${config.baseURL}/admin/courses/count`);
      setCourseCount(res.data.count);
    };
    fetchCourseCount();
  });

  const [studentCount, setStudentCount] = useState("");
  useEffect(() => {
    const fetchStudentCount = async () => {
      const res = await axios.get(`${config.baseURL}/admin/students/count`);
      setStudentCount(res.data.count);
    };
    fetchStudentCount();
  });

  const [lecturerCount, setLecturerCount] = useState("");
  useEffect(() => {
    const fetchLecturerCount = async () => {
      const res = await axios.get(`${config.baseURL}/admin/lecturers/count`);
      setLecturerCount(res.data.count);
    };
    fetchLecturerCount();
  });
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    const fetchNotices = async () => {
      const res = await axios.get(`${config.baseURL}/notice`);
      setNotices(res.data);
    };
    fetchNotices();
  });

  return (
    <div className='admin-dash-root'>
      <div className='main-1'>
        <div className='level-1'>
          <div className='level-1-box'>
            <p className='level-1-box-name'>Number of Courses</p>
            <div className='level-1-box-info'>
              <h5 className='level-1-box-value'>{courseCount}</h5>
              <IconButton sx={{ backgroundColor: '#d3d3d35e' }} color='primary' size='small'>
                <BookmarkRounded />
              </IconButton>
            </div>
          </div>
          <div className='level-1-box'>
            <p className='level-1-box-name'>Number of Lecturers</p>
            <div className='level-1-box-info'>
              <h5 className='level-1-box-value'>{lecturerCount}</h5>
              <IconButton sx={{ backgroundColor: '#d3d3d35e' }} color='primary' size='small'>
                <Person />
              </IconButton>
            </div>
          </div>
          <div className='level-1-box'>
            <p className='level-1-box-name'>Number of Students</p>
            <div className='level-1-box-info'>
              <h5 className='level-1-box-value'>{studentCount}</h5>
              <IconButton sx={{ backgroundColor: '#d3d3d35e' }} color='primary' size='small'>
                <FaChalkboardTeacher />
              </IconButton>
            </div>
          </div>
        </div>
        <div className='level-2'>Level 2</div>
        <div className='level-3'>
          <div className="level-3-box">
            <div className='admin-dash-assign-header'>
              <h4>Assignment</h4>
              <Button>View All</Button>
            </div>
            <div className='admin-dash-assign-list'>
              <AssignmentItem />
              <AssignmentItem />
              <AssignmentItem />
              <AssignmentItem />
              <AssignmentItem />
              <AssignmentItem />
              <AssignmentItem />
              <AssignmentItem />
              <AssignmentItem />
              <AssignmentItem />
              <AssignmentItem />
              <AssignmentItem />
              <AssignmentItem />
              <AssignmentItem />
            </div>
          </div>
          <div className="dashboardNotice">
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
            {notices.map((p) => (
              <Notice notice={p} key={p._id} />
            ))}
          </div>
        </div>
      </div>
      <div className='main-2'>
        <div className='level-4'>
          <Calendar />
        </div>
        {/* <div className="level-5">
          <div className='admin-task-header'>
            <Button sx={{ textTransform: 'none', fontWeight: 'bold', float: 'right' }}>
              <Add /> Add Task
            </Button>
          </div>
          <div className='admin-task-list'>
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
          </div>
        </div> */}
      </div>
    </div>
  )
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

function TaskItem() {
  return (
    <div className="admin-task-item">
      <IconButton sx={{ width: '30px', height: '20px', marginLeft: '90%', position: 'relative' }}>
        <MoreHoriz />
      </IconButton>
      <p>Assertively aggregate 24/365 infomediaries rather than inexpensive communities.</p>
    </div>
  )
}

function AssignmentItem() {
  return (
    <div className='admin-dash-assign-item'>
      <div className='ass-info'>
        <h6 className='ass-info-title'>SENG 302: Assignment 1</h6>
        <p className='ass-info-date'>Due, Dec 5 • 8:00 PM</p>
      </div>
      <div className='pill'>10 Marks</div>
    </div>
  )
}