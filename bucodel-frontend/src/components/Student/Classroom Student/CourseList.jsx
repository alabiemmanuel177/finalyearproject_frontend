import React, { useEffect, useState } from 'react'
import '../css/courseList.css'
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import config from '../../../config';
import axios from 'axios';

const CourseList = ({ courses }) => {
    return (
        <div className="courseList">
            {courses.map((p) => (
                <CourseCard course={p} key={p._id} />
            ))}
        </div>
    )
}
const CourseCard = ({ course }) => {
    const [lecturerList, setLecturerList] = [course.lecturer];
    const [lecturer, setLecturer] = useState("");
    useEffect(() => {
        const fetchLecturer = async () => {
            const res = await axios.get(`${config.baseURL}/lecturer/${lecturerList[0]}`);
            setLecturer(res.data.name);
        };
        fetchLecturer();
    });
    return (
        <div className='maincourse'>
            <Link to={`/class/${course._id}`} style={{ textDecoration: 'none', height: '192px' }}>
                <div className="course">
                    <div className="courseTitle">
                        <h3>{course.courseabrev}</h3>
                        <h3>{course.title}</h3>
                    </div>
                    <div className="courseLecturer">
                        <div className='lectDet'>
                            <FaRegUserCircle className='icon2' />
                            <h3>{lecturer}</h3>
                        </div>
                        <button disabled="disabled">{course.unit} unit</button>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CourseList