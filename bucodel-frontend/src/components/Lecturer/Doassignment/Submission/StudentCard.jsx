import React, { useState, useEffect } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';

export default function StudentCard({ submission, student }) {
  const [name, setName] = useState('');
  const [matricno, setMatricno] = useState('');

  useEffect(() => {
    if (submission) {
      setName(`${submission.studentId.lastname} ${submission.studentId.firstname}`);
      setMatricno(submission.studentId.matricno);
    } else if (student) {
      setName(`${student.lastname} ${student.firstname}`);
      setMatricno(student.matricno);
    }
  }, [submission, student]);

  return (
    <div className="submission-studentcard">
      <div className='sub-studentcard-pic mgl10'>
        <FaRegUserCircle className='sub-stdcard-icon' />
      </div>
      <div className='sub-studentcard-info'>
        <p className='sub-stdcard-name'>{name}</p>
        <p className='sub-stdcard-number'>{matricno}</p>
      </div>
    </div>
  );
}
