import React, { useEffect, useState } from 'react'
import '../css/assignmentList.css'
import { Link } from 'react-router-dom';
import { BsRecordCircleFill } from "react-icons/bs";
import axios from 'axios';
import config from '../../../config';

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
    useEffect(() => {
        const fetchCourses = async () => {
            const res = await axios.get(`${config.baseURL}/course/${assignedAssignment.course}`);
            setCourse(res.data)
        };
        fetchCourses();
    }, []);
    return (
        <Link to="/doassignment" style={{ textDecoration: 'none' }}>
            <div className="assignment">
                <div className="top">
                    <button disabled="disabled">{assignedAssignment.mark} Marks</button>
                    <BsRecordCircleFill className='icon7' />
                </div>
                <h3>{`${course.courseabrev}: ${assignedAssignment.title}`}</h3>
                <h5>{assignedAssignment.assignmentQuestion}
                </h5>
                <h4>{`Due, ${assignedAssignment.dueDate} `}<span className='blue'>{assignedAssignment.dueTime}</span></h4>
            </div>
        </Link>
    )
}