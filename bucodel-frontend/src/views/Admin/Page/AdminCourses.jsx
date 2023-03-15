import { Button } from '@mui/material'
import React from 'react'
import CourseList from '../../../components/Admin/Courses/CourseList'

export default function AdminCourses({ admin }) {
  return (
    <div className='admin-courses-root' style={{ height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '25px', height: '90px' }} className="admin-courses-header">
        <h2 style={{ fontWeight: 'bold' }}>Courses</h2>
        <Button variant='contained'>Create Course</Button>
      </div>
      <div className="admin-courses-body" style={{ height: '100%' }}>
        <CourseList />
      </div>
    </div>
  )
}
