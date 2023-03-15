import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa'
import { Checkbox } from '@mui/material';

export default function StudentCard({ submission }) {
  console.log(submission);
  const student = submission.studentId
  return (
    <div className='submission-studentcard'>
      <Checkbox className='sub-checkbox' />
      <div className='sub-studentcard-pic'>
        <FaRegUserCircle className='sub-stdcard-icon' />
      </div>
      <div className='sub-studentcard-info'>
        <p className='sub-stdcard-name'>{`${student.lastname} ${student.firstname} ${student.middlename}`}</p>
        <p className='sub-stdcard-number'>{student.matricno}</p>
      </div>
    </div>
  )
}
