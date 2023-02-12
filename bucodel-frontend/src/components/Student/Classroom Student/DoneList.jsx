import React, { useEffect, useState } from 'react'
import '../css/assignmentList.css'
import { Link } from 'react-router-dom';
import { BsRecordCircleFill } from "react-icons/bs";
import axios from 'axios';
import config from '../../../config';

const DoneList = ({ doneAssignments }) => {
    return (
        <div className="assignmentList">
            {doneAssignments.map((p) => (
                <Assignment doneAssignment={p} key={p._id} />
            ))}

        </div>
    )
}

export default DoneList

export const Assignment = ({ doneAssignment }) => {
    const [course, setCourse] = useState([])
    useEffect(() => {
        const fetchCourses = async () => {
            const res = await axios.get(`${config.baseURL}/course/${doneAssignment.courseID}`);
            setCourse(res.data)
        };
        fetchCourses();
    }, []);
    return (
        <Link to="/doassignment" style={{ textDecoration: 'none' }}>
            <div className="assignment">
                <div className="top">
                    <button disabled="disabled">{doneAssignment.mark} Marks</button>
                    <BsRecordCircleFill className='icon7 green' />
                </div>
                <h3>{`${course.courseabrev}: ${doneAssignment.title}`}</h3>
                <h5>{doneAssignment.assignmentQuestion}</h5>
                <h4><span className='green'>Done</span></h4>

            </div>
        </Link>
    )
}