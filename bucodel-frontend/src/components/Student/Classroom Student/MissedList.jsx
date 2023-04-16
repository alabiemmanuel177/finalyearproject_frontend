import React from 'react'
import '../css/assignmentList.css'
import { Link } from 'react-router-dom';
import { BsRecordCircleFill } from "react-icons/bs";
import moment from 'moment';
import EmptyAssignment from './EmptyAssignment';
import { Skcourse } from '../../Skeleton Loader/dasboardMetrics';

const MissedList = ({ missedAssignments, isMissedAssignments, empty1 }) => {
    return (
        <> {isMissedAssignments ? <Skcourse /> : <>{!empty1 ? (
            <div className="assignmentList">
                {missedAssignments.map((p) => (
                    <Assignment missedAssignment={p} key={p._id} />
                ))}
            </div>
        ) : (<EmptyAssignment />)}
        </>}
        </>
    )
}

export default MissedList

export const Assignment = ({ missedAssignment }) => {
    const momentObj = moment(missedAssignment.dueDate)
    const date = momentObj.format('Do MMM'); // get the date string in the format of "YYYY-MM-DD"
    const time = momentObj.format('HH:mm');
    return (
        <Link to={`/doassignment/${missedAssignment._id}`} style={{ textDecoration: 'none' }}>
            <div className="assignment">
                <div className="top">
                    <button disabled="disabled">{missedAssignment.grade} Marks</button>
                    <BsRecordCircleFill className='icon7 red' />
                </div>
                <h3>{`${missedAssignment.courseId.courseabrev}: ${missedAssignment.title}`}</h3>
                <h5>{missedAssignment.description}                </h5>
                <h4>Due, {date}<span style={{ color: 'red', fontWeight: 'bold' }}>{time}</span></h4>

            </div>
        </Link>
    )
}