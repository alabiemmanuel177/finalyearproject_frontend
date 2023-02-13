import React, { useEffect, useState } from 'react'
import '../css/assignmentList.css'
import { Link } from 'react-router-dom';
import { BsRecordCircleFill } from "react-icons/bs";
import axios from 'axios';
import config from '../../../config';
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
    const [course, setCourse] = useState([])
    const formattedDate = moment(assignedAssignment.dueDate).format("Do MMM, h:mm a");
    useEffect(() => {
        const fetchCourses = async () => {
            const res = await axios.get(`${config.baseURL}/course/${assignedAssignment.courseID}`);
            setCourse(res.data)
        };
        fetchCourses();
    }, []);
    return (
        <Link to="/doassignment" style={{ textDecoration: 'none' }}>
            <div className="assignment">
                <div className="top">
                    <button disabled="disabled">{assignedAssignment.mark} Marks</button>
                    <BsRecordCircleFill className='icon7 blue' />
                </div>
                <h3 className='blue'>{`${course.courseabrev}: ${assignedAssignment.title}`}</h3>
                <h5>{assignedAssignment.assignmentQuestion}
                </h5>
                <h4 className='blue'>{`Due, ${formattedDate} `}</h4>
            </div>
        </Link>
    )
}