import React, { useEffect, useState } from 'react'
import '../css/assignmentList.css'
import { Link } from 'react-router-dom';
import { BsRecordCircleFill } from "react-icons/bs";
import axios from 'axios';
import config from '../../../config';

const MissingList = ({ missingAssignments }) => {
    return (
        <div className="assignmentList">
            {missingAssignments.map((p) => (
                <Assignment missingAssignment={p} key={p._id} />
            ))}
        </div>
    )
}

export default MissingList

export const Assignment = ({ missingAssignment }) => {
    const [course, setCourse] = useState([])
    useEffect(() => {
        const fetchCourses = async () => {
            const res = await axios.get(`${config.baseURL}/course/${missingAssignment.course}`);
            setCourse(res.data)
        };
        fetchCourses();
    }, []);
    return (
        <Link to="/doassignment" style={{ textDecoration: 'none' }}>
            <div className="assignment">
                <div className="top">
                    <button disabled="disabled">{missingAssignment.mark} Marks</button>
                    <BsRecordCircleFill className='icon7 red' />
                </div>
                <h3>{`${course.courseabrev}: ${missingAssignment.title}`}</h3>
                <h5>{missingAssignment.assignmentQuestion}                </h5>
                <h4>{`Due, ${missingAssignment.dueDate} `}<span className='red'>{missingAssignment.dueTime}</span></h4>

            </div>
        </Link>
    )
}