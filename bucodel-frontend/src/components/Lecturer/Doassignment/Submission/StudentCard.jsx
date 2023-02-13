import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa'
import { Checkbox } from '@mui/material';

export default function StudentCard() {
  return (
    <div className='submission-studentcard'>
        <Checkbox className='sub-checkbox'/>
        <div className='sub-studentcard-pic'>
            <FaRegUserCircle className='sub-stdcard-icon' />
        </div>
        <div className='sub-studentcard-info'>
            <p className='sub-stdcard-name'>Izu Onisokumen Preye</p>
            <p className='sub-stdcard-number'>19/1485</p>
        </div>
    </div>
  )
}
