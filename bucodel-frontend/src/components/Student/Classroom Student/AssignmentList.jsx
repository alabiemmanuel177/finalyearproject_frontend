import React from 'react'
import '../css/assignmentList.css'
import { Link } from 'react-router-dom';
import { BsRecordCircleFill } from "react-icons/bs";
import moment from 'moment';
import EmptyAssignment from './EmptyAssignment';

const AssignmentList = ({ assignedAssignments, empty }) => {

    return (
        <> {empty ? (
            <div className="assignmentList">
                {assignedAssignments.map((p) => (
                    <Assignment assignedAssignment={p} key={p._id} />
                ))}
            </div>
        ) : (<EmptyAssignment />)}
        </>
    )
}

export default AssignmentList

export const Assignment = ({ assignedAssignment }) => {
    const momentObj = moment(assignedAssignment.dueDate)
    const date = momentObj.format('Do MMM'); // get the date string in the format of "YYYY-MM-DD"
    const time = momentObj.format('HH:mm');
    return (
        <Link to={`/doassignment/${assignedAssignment._id}`} style={{ textDecoration: 'none' }}>
            <div className="assignment">
                <div className="top">
                    <button disabled="disabled">{assignedAssignment.grade} Marks</button>
                    <BsRecordCircleFill className='icon7 blue' />
                </div>
                <h3>{`${assignedAssignment.courseId.courseabrev}: ${assignedAssignment.title}`}</h3>
                <h5>{assignedAssignment.description}
                </h5>
                <h4>Due, {date}<span style={{ color: '#0A3697', fontWeight: 'bold' }}>{time}</span></h4>
            </div>
        </Link>
    )
}