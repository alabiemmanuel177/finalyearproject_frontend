import React, { useEffect, useState } from 'react'
import '../css/assignmentList.css'
import { Link } from 'react-router-dom';
import { BsRecordCircleFill } from "react-icons/bs";
import moment from 'moment';

const MissedList = ({ missedAssignments }) => {
    return (
        <div className="assignmentList">
            {missedAssignments.map((p) => (
                <Assignment missedAssignment={p} key={p._id} />
            ))}
        </div>
    )
}

export default MissedList

export const Assignment = ({ missedAssignment }) => {
    const formattedDate = moment(missedAssignment.dueDate).format("Do MMM, h:mm a");
    return (
        <Link to={`/doassignment/${missedAssignment._id}`} style={{ textDecoration: 'none' }}>
            <div className="assignment">
                <div className="top">
                    <button disabled="disabled">{missedAssignment.grade} Marks</button>
                    <BsRecordCircleFill className='icon7 red' />
                </div>
                <h3>{`${missedAssignment.courseId.courseabrev}: ${missedAssignment.title}`}</h3>
                <h5>{missedAssignment.description}                </h5>
                <h4 className='red'>{`Due, ${formattedDate} `}</h4>

            </div>
        </Link>
    )
}