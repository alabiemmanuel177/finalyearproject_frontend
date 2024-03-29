import React, { useEffect, useState } from 'react'
import '../css/assignmentList.css'
import { Link } from 'react-router-dom';
import { BsRecordCircleFill } from "react-icons/bs";
import moment from 'moment';

const MissingList = ({ missingAssignments }) => {

    return (
        <div className="assignmentList">
            {missingAssignments.map((p) => (
                <Assignment doneAssignment={p} key={p._id} />
            ))}
        </div>
    )
}

export default MissingList

export const Assignment = ({ missingAssignment }) => {
    const formattedDate = moment(missingAssignment.dueDate).format("Do MMM, h:mm a");
    return (
        <Link to="/doassignment" style={{ textDecoration: 'none' }}>
            <div className="assignment">
                <div className="top">
                    <button disabled="disabled">{missingAssignment.grade} Marks</button>
                    <BsRecordCircleFill className='icon7 red' />
                </div>
                <h3>{`${missingAssignment.courseId.courseabrev}: ${missingAssignment.title}`}</h3>
                <h5>{missingAssignment.description}                </h5>
                <h4 className='red'>{`Due, ${formattedDate} `}</h4>

            </div>
        </Link>
    )
}