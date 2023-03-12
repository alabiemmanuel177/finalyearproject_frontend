import { Add, BookmarkRounded, MoreHoriz, Person } from '@mui/icons-material'
import { Avatar, Button, IconButton } from '@mui/material'
import React from 'react'
import { FaChalkboardTeacher } from 'react-icons/fa'
import Calendar from '../../Lecturer/Classroom/LecturerCalendar'
import '../Page/css/dashboard.css'

export default function AdminDashboard() {
  return (
    <div className='admin-dash-root'>
      <div className='main-1'>
        <div className='level-1'>
          <div className='level-1-box'>
            <p className='level-1-box-name'>Number of Courses</p>
            <div className='level-1-box-info'>
              <h5 className='level-1-box-value'>10</h5>
              <IconButton sx={{backgroundColor: '#d3d3d35e'}} color='primary' size='small'>
                <BookmarkRounded/>
              </IconButton>
            </div>
          </div>
          <div className='level-1-box'>
            <p className='level-1-box-name'>Number of Lecturers</p>
            <div className='level-1-box-info'>
              <h5 className='level-1-box-value'>6</h5>
              <IconButton sx={{backgroundColor: '#d3d3d35e'}} color='primary' size='small'>
                <Person/>
              </IconButton>
            </div>
          </div>
          <div className='level-1-box'>
            <p className='level-1-box-name'>Number of Students</p>
            <div className='level-1-box-info'>
              <h5 className='level-1-box-value'>500</h5>
              <IconButton sx={{backgroundColor: '#d3d3d35e'}} color='primary' size='small'>
                <FaChalkboardTeacher/>
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
          <div className="level-3-box">
            <div className='admin-dash-assign-header'>
              <h4>Noticeboard</h4>
            </div>
            <div className='admin-dash-assign-list'>
              <Notice/>
              <Notice/>
              <Notice/>
              <Notice/>
              <Notice/>
            </div>
          </div>
        </div>
      </div>
      <div className='main-2'>
        <div className='level-4'>
          <Calendar />
        </div>
        <div className="level-5">
          <div className='admin-task-header'>
            <Button sx={{textTransform: 'none', fontWeight: 'bold', float: 'right'}}>
              <Add /> Add Task
            </Button>
          </div>
          <div className='admin-task-list'>
            <TaskItem/>
            <TaskItem/>
            <TaskItem/>
            <TaskItem/>
            <TaskItem/>
          </div>
        </div>
      </div>
    </div>
  )
}


function Notice() {
  return (
    <div className="notice-dash-item">
      <div className="notice-dash-header">
        <Avatar sx={{ width: 30, height: 30 }}>A</Avatar>
        <div className="notice-dash-header-info">
          <h6 className='ass-info-title notice-date'>Dr Adetofunmi Adetunji</h6>
          <p className='ass-info-date'>Dec 5 • 8:00 PM</p>
        </div>
      </div>
      <div className="notice-dash-body">
        <p>Compellingly evolve evolve worldwide functionalities functionalities via high-payoff scenarios. Seamlessly initiate worldwide resources and.</p>
      </div>
    </div>
  )
}

function TaskItem() {
  return (
    <div className="admin-task-item">
      <IconButton sx={{ width: '30px', height: '20px', marginLeft: '90%', position: 'relative'}}>
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