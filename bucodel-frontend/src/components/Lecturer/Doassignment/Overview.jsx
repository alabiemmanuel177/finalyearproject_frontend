import React from 'react'
import './overview.css'

export default function Overview() {
  return (
    <div className='overview-root'>
        <div className='overview-header'>
            <h5 className='overview-ass-name'>Assignment 1</h5>
            <p className='overview-ass-date'>Due, Dec 5 • 8:00pm </p>
            <p className='overview-ass-mark'>10 marks</p>
        </div>
        <div className='overview-body'>
            Can you write about the Oracle database 12C Multitenant architecture?
        </div>
    </div>
  )
}
