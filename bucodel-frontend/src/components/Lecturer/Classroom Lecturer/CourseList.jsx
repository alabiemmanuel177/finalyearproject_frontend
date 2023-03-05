import React from 'react'
import './css/courseList.css'
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';


const CourseList = () => {
    return (
        <div className="courseList">
        <div className="maincourse">
            <Link to="/lecturerclass" style={{ textDecoration: 'none' }}><div className="course">
                <div className="courseTitle">
                    <h3>SENG 302</h3>
                    <h3>Object Oriented Software Development</h3>
                </div>
                <div className="courseLecturer">
                    <div className='lectDet'>
                        <FaRegUserCircle className='icon2' />
                        <h3>Dr. Adetofunmi Adetunji</h3>
                    </div>
                    <button disabled="disabled">3 unit</button>
                    </div>
                </div>
            </Link>
        </div>
            <div className="maincourse">
                <Link to="/lecturerclass" style={{ textDecoration: 'none' }}><div className="course">
                    <div className="courseTitle">
                        <h3>SENG 302</h3>
                        <h3>Object Oriented Software Development</h3>
                    </div>
                    <div className="courseLecturer">
                        <div className='lectDet'>
                            <FaRegUserCircle className='icon2' />
                            <h3>Dr. Adetofunmi Adetunji</h3>
                        </div>
                        <button disabled="disabled">3 unit</button>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="maincourse">
                <Link to="/lecturerclass" style={{ textDecoration: 'none' }}><div className="course">
                    <div className="courseTitle">
                        <h3>SENG 302</h3>
                        <h3>Object Oriented Software Development</h3>
                    </div>
                    <div className="courseLecturer">
                        <div className='lectDet'>
                            <FaRegUserCircle className='icon2' />
                            <h3>Dr. Adetofunmi Adetunji</h3>
                        </div>
                        <button disabled="disabled">3 unit</button>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="maincourse">
                <Link to="/lecturerclass" style={{ textDecoration: 'none' }}><div className="course">
                    <div className="courseTitle">
                        <h3>SENG 302</h3>
                        <h3>Object Oriented Software Development</h3>
                    </div>
                    <div className="courseLecturer">
                        <div className='lectDet'>
                            <FaRegUserCircle className='icon2' />
                            <h3>Dr. Adetofunmi Adetunji</h3>
                        </div>
                        <button disabled="disabled">3 unit</button>
                        </div>
                    </div>
                </Link>
            </div>
            
        </div>
    )
}

export default CourseList