import React from 'react'
import './css/courseList.css'
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';


const CourseList = ({ courses }) => {
    return (
        <div className="courseList">
            {courses.map((p) => (
                <CourseCard course={p} key={p._id}/>
            ))}            
        </div>
    )
}

const CourseCard = ({ course }) => {
    return (
        <>
            <Link to={`/lecturerclass/${course._id}`} style={{ textDecoration: 'none' }}>
                <div className="course">
                    <div className="courseTitle">
                        <h3>{course.courseabrev}</h3>
                        <h3>{course.title}</h3>
                    </div>
                    <div className="courseLecturer">
                        <div className='lectDet'>
                            <FaRegUserCircle className='icon2' />
                            <h3>{course.lecturer[0].name}</h3>
                        </div>
                        <button disabled="disabled">{course.unit} unit</button>
                    </div>
                </div>
            </Link>
        </>
    )
}
export default CourseList