import moment from 'moment';
import React, { useState } from 'react'
import './overview.css'
import { Button } from '@mui/material';
import EditAssignmentModal from '../modal/EditAssignment';

export default function Overview({ assignment, lecturer }) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);

  const momentObj = moment(assignment.dueDate)
  const date = momentObj.format('Do MMM'); // get the date string in the format of "YYYY-MM-DD"
  const time = momentObj.format('HH:mm');
  return (
    <div className='overview-root'>

      <div className='overview-header'>
        <div><h5 className='overview-ass-name'>{assignment.title}</h5>
          <p className='overview-ass-date'>{`Due, ${date} • ${time}`}</p>
          <p className='overview-ass-mark'>{assignment.grade} marks</p></div>

        <div>
          {assignment &&
            <Button onClick={handleOpen} sx={{ p: '8px 20px', textTransform: 'none', fontWeight: 'bold' }} className='assign-create' variant='contained' >Edit</Button>
          }
        </div>
      </div>
      <div className='overview-body'>
        {assignment.description}
      </div>
      {assignment && <EditAssignmentModal open={open} setOpen={setOpen} lecturer={lecturer._id} assignment={assignment} />}
    </div>
  )
}
