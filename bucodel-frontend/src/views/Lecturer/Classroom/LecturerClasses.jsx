import React from 'react'
import "./css/classes.css"
import { FaRegUserCircle } from "react-icons/fa";
import ClassPost from '../../../components/Lecturer/Classroom Lecturer/ClassPost';
import {
    useState,
    // useEffect
} from "react";
import Groups from '../../../components/Lecturer/Classroom Lecturer/Groups';
import People from '../../../components/Lecturer/Classroom Lecturer/People';
import LecturerResources from '../../../components/Lecturer/Classroom Lecturer/Resources';
import Gradebook from '../../../components/Lecturer/Classroom Lecturer/Gradebook';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import config from '../../../config';

const LecturerClasses = ({ lecturer }) => {
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

    const handleClick = () => {
        window.location.replace("/meeting")
    }
    var btnContainer = document.getElementById("headers");
    if (btnContainer !== null) {
        var btns = btnContainer.getElementsByClassName("headerButton");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active1");
                current[0].className = current[0].className.replace("active1", "");
                this.className += " active1";
            });
        }
    }

    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`${config.baseURL}/classpost/posts/${id}`);
            setPosts(res.data);
        };
        fetchPosts();
    }, [id]);


    const [active2, setActive2] = useState("stream");
    return (
        <div className="classes">
            <div className="classHead">
                <div className="classTitle">
                    <h4>{`Courses / ${course.courseabrev}`}</h4>
                    <h3>{`${course.courseabrev}: ${course.title} `}</h3>
                    <div className='flexrow'>
                        <FaRegUserCircle className='icon2' />
                        <h5>{lecturer.name}</h5>
                    </div>
                </div>
                <div className="virtualClassButton">
                    <button onClick={handleClick}>Start Virtual Class</button>
                </div>
            </div>
            <div className="headers mg20" id='headers'>
                <div className="overview headerButton active1"
                    onClick={() => setActive2("stream")}>
                    <h3>Stream</h3>
                </div>
                <div className="overview headerButton"
                    onClick={() => setActive2("people")}>
                    <h3>People</h3></div>
                <div className="overview headerButton "
                    onClick={() => setActive2("groups")}>
                    <h3>Groups</h3></div>
                <div className="overview headerButton"
                    onClick={() => setActive2("resources")}>
                    <h3>Resources</h3></div>
                <div className="overview headerButton "
                    onClick={() => setActive2("gradebook")}>
                    <h3>Gradebook</h3></div>
            </div>
            <hr />
            {active2 === "stream" && <ClassPost posts={posts} course={id} lecturer={lecturer} />}
            {active2 === "people" && <People course={id}/>}
            {active2 === "groups" && <Groups />}
            {active2 === "resources" && <LecturerResources />}
            {active2 === "gradebook" && <Gradebook />}

        </div>
    )
}

export default LecturerClasses