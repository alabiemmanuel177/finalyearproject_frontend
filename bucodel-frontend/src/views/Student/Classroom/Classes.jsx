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
    const [lecturerList, setLecturerList] = useState();
    useEffect(() => {
        const fetchCourses = async () => {
            const res = await axios.get(`${config.baseURL}/course/${id}`);
            setCourse(res.data)
            setLecturerList(res.data.lecturer)
        };
        fetchCourses();
    }, [id]);


    const [lecturer, setLecturer] = useState("");
    useEffect(() => {
        if (lecturerList && lecturerList.length > 0) {
            const fetchLecturer = async () => {
                const res = await axios.get(`${config.baseURL}/lecturer/${lecturerList[0]}`);
                setLecturer(res.data.name);
            };
            fetchLecturer();
        }
    }, [lecturerList]);

    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`${config.baseURL}/classpost/posts/${id}`);
            setPosts(res.data);
        };
        fetchPosts();
    }, [id]);

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
                    <button onClick={handleClick} id="start-conference">Join Virtual Class</button>
                </div>
            </div>
            <ClassPost posts={posts} course={id} student={student} />
        </div>
    )
}

export default Classes