import React, { useEffect, useState } from 'react'
import "./css/classes.css"
import { FaRegUserCircle } from "react-icons/fa";
import ClassPost from '../../../components/Student/Classroom Student/ClassPost';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import config from '../../../config';

const Classes = ({ student }) => {
    let { id } = useParams();

    const [course, setCourse] = useState([])
    useEffect(() => {
        const fetchCourses = async () => {
            const res = await axios.get(`${config.baseURL}/course/${id}`);
            setCourse(res.data)
        };
        fetchCourses();
    }, []);

    const [lecturerList, setLecturerList] = [course.lecturer];
    const [lecturer, setLecturer] = useState("");
    useEffect(() => {
        const fetchLecturer = async () => {
            const res = await axios.get(`${config.baseURL}/lecturer/${lecturerList[0]}`);
            setLecturer(res.data.name);
        };
        fetchLecturer();
    });

    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`${config.baseURL}/classpost/posts/${course._id}`);
            setPosts(res.data);
        };
        fetchPosts();
    }, []);

    const handleClick = () => {
        window.location.replace("/meeting")
    }
    return (
        <div className="classes">
            <div className="classHead">
                <div className="classTitle">
                    <h3>{`${course.courseabrev}: ${course.title} `}</h3>
                    <div className='flexrow'>
                        <FaRegUserCircle className='icon2' />
                        <h5>{lecturer}</h5>
                    </div>
                </div>
                <div className="virtualClassButton">
                    <button onClick={handleClick}>Join Virtual Class</button>
                </div>
            </div>
            <ClassPost posts={posts} course={course._id} student={student} />
        </div>
    )
}

export default Classes