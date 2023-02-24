import { Button } from '@mui/material'
import React from 'react'
import CourseList from '../../../components/Admin/Courses/CourseList'

export default function AdminCourses() {
  return (
    <div className='admin-courses-root'>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '25px' }} className="admin-courses-header">
        <h2 style={{ fontWeight: 'bold' }}>Courses</h2>
        <Button variant='contained'>Create Course</Button>
      </div>
      <div className="admin-courses-body">
        <CourseList/>
      </div>
    </div>
  )
}
