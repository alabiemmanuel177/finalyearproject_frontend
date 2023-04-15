import { Button } from '@mui/material'
import React, { useState } from 'react'
import CourseList from '../../../components/Admin/Courses/CourseList'
import CreateCourseModal from '../../../components/Admin/modals/CreateCourseModal'

export default function AdminCourses({ admin }) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);

  return (
    <div className='admin-courses-root' style={{ height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '25px', height: '90px' }} className="admin-courses-header">
        <h2 style={{ fontWeight: 'bold' }}>Courses</h2>
        <Button onClick={handleOpen} variant='contained'>Create Course</Button>
        <CreateCourseModal open={open} setOpen={setOpen}  />
      </div>
      <div className="admin-courses-body" style={{ height: '100%' }}>
        <CourseList />
      </div>
    </div>
  )
}
