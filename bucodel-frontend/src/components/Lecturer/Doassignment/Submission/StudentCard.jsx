import React, { useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';

export default function StudentCard({ submission }) {

  return (
    <div className="submission-studentcard" >
      <div className='sub-studentcard-pic mgl10'>
        <FaRegUserCircle className='sub-stdcard-icon' />
      </div>
      <div className='sub-studentcard-info'>
        <p className='sub-stdcard-name'>{`${submission.studentId.lastname} ${submission.studentId.firstname}`}</p>
        <p className='sub-stdcard-number'>{submission.studentId.matricno}</p>
      </div>
    </div>
  );
}
