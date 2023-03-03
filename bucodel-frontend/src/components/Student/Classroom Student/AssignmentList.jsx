import React, { useEffect, useState } from 'react'
import '../css/assignmentList.css'
import { Link } from 'react-router-dom';
import { BsRecordCircleFill } from "react-icons/bs";
import moment from 'moment';

const AssignmentList = ({ assignedAssignments }) => {

    return (
        <div className="assignmentList">
            {assignedAssignments.map((p) => (
                <Assignment assignedAssignment={p} key={p._id} />
            ))}
        </div>
    )
}

export default AssignmentList

export const Assignment = ({ assignedAssignment }) => {
    const formattedDate = moment(assignedAssignment.dueDate).format("Do MMM, h:mm a");
    return (
        <Link to={`/doassignment/${assignedAssignment._id}`} style={{ textDecoration: 'none' }}>
            <div className="assignment">
                <div className="top">
                    <button disabled="disabled">{assignedAssignment.grade} Marks</button>
                    <BsRecordCircleFill className='icon7 blue' />
                </div>
                <h3 className='blue'>{`${assignedAssignment.courseId.courseabrev}: ${assignedAssignment.title}`}</h3>
                <h5>{assignedAssignment.description}
                </h5>
                <h4 className='blue'>{`Due, ${formattedDate} `}</h4>
            </div>
        </Link>
    )
}