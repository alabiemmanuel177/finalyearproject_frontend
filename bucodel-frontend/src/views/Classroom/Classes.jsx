import React from 'react'
import "./css/classes.css"
import { FaRegUserCircle } from "react-icons/fa";
import ClassPost from '../../components/Classroom Student/ClassPost';


const Classes = () => {
    const handleClick = () => {
        window.location.replace("/meeting")
    }
    return (
        <div className="classes">
            <div className="classHead">
                <div className="classTitle">
                    <h3>SENG 302: Object Oriented Software Development </h3>
                    <div className='flexrow'>
                        <FaRegUserCircle className='icon2' />
                        <h5>Dr. Adetofunmi Adetunji</h5>
                    </div>
                </div>
                <div className="virtualClassButton">
                    <button onClick={handleClick}>Join Virtual Class</button>
                </div>
            </div>
            <ClassPost />
        </div>
    )
}

export default Classes