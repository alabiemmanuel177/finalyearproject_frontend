import React from 'react'
import './css/courseList.css'
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Skcourse } from '../../Skeleton Loader/dasboardMetrics';

const CourseList = ({ courses, isCourses }) => {
    return (
        <div className="courseList">
            {courses.map((p) => (
                <CourseCard course={p} key={p._id} isCourses={isCourses} />
            ))}
        </div>
    )
}

const CourseCard = ({ course, isCourses }) => {
    return (
        <div className='maincourse'>
            <Link to={`/lecturerclass/${course._id}`} style={{ textDecoration: 'none' }}>
                {isCourses ? <Skcourse /> :
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
                    </div>}
            </Link>
        </div>
    )
}
export default CourseList