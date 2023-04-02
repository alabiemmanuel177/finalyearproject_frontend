import React, { useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa'

export default function StudentCard({ submission, onSelect }) {
  const [selectedCard, setSelectedCard] = useState(false);
  const student = submission.studentId;

  const handleCardClick = () => {
    setSelectedCard(!selectedCard);
    onSelect(submission); // Call onSelect function to pass submission details to parent component
  };

  const cardClassName = selectedCard ? 'submission-studentcard selected' : 'submission-studentcard';

  return (
    <div className={cardClassName} onClick={handleCardClick}>
      <div className='sub-studentcard-pic mgl10'>
        <FaRegUserCircle className='sub-stdcard-icon' />
      </div>
      <div className='sub-studentcard-info'>
        <p className='sub-stdcard-name'>{`${student.lastname} ${student.firstname}`}</p>
        <p className='sub-stdcard-number'>{student.matricno}</p>
      </div>
    </div>
  )
}
