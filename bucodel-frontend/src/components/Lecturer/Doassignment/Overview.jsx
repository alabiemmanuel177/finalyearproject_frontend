import moment from 'moment';
import React from 'react'
import './overview.css'

export default function Overview({ assignment }) {
  const momentObj = moment(assignment.dueDate)
  const date = momentObj.format('Do MMM'); // get the date string in the format of "YYYY-MM-DD"
  const time = momentObj.format('HH:mm');
  return (
    <div className='overview-root'>
      <div className='overview-header'>
        <h5 className='overview-ass-name'>{assignment.title}</h5>
        <p className='overview-ass-date'>{`Due, ${date} • ${time}`}</p>
        <p className='overview-ass-mark'>{assignment.grade} marks</p>
      </div>
      <div className='overview-body'>
        {assignment.description}
      </div>
    </div>
  )
}
