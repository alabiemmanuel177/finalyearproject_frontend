import React, { useEffect, useState } from 'react'
import "./css/classes.css"
import { FaRegUserCircle } from "react-icons/fa";
import ClassPost from '../../../components/Lecturer/Classroom Lecturer/ClassPost';
import Groups from '../../../components/Lecturer/Classroom Lecturer/Groups';
import People from '../../../components/Lecturer/Classroom Lecturer/People';
import LecturerResources from '../../../components/Lecturer/Classroom Lecturer/Resources';
import Gradebook from '../../../components/Lecturer/Classroom Lecturer/Gradebook';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import config from '../../../config';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Tab } from '@mui/material';

const LecturerClasses = ({ lecturer }) => {
    let { id } = useParams();
    const [value, setValue] = useState('1')
    const handleChange = (event, newValue) => setValue(newValue);
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

    const [clazz, setClass] = useState([])
    useEffect(() => {
        const fetchClass = async () => {
            const res = await axios.get(`${config.baseURL}/course/${id}/class`);
            setClass(res.data.classId)
        };
        fetchClass();
    }, [id, lecturerList]);

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

    const [resources, setResources] = useState([])
    const [emptyRes, setEmptyRes] = useState(false);
    useEffect(() => {
        const fetchResources = async () => {
            const res = await axios.get(`${config.baseURL}/course/${id}/materials`);
            setResources(res.data.materials);
            if (res.data.materials.length > 0) {
                setEmptyRes(true)
            }
        };
        fetchResources();
    }, [id]);

    const [groups, setGroups] = useState([])
    const [empty, setEmpty] = useState(false);
    useEffect(() => {
        const fetchGroups = async () => {
            const res = await axios.get(`${config.baseURL}/group/courses/${id}/groups`);
            setGroups(res.data);
            if (res.data.length > 0) {
                setEmpty(true)
            }
        };
        fetchGroups();
    }, [id]);

    const [active2, setActive2] = useState("stream");
    return (
        <div className="classes">
            <div className="classHead">
                <div className="classTitle">
                    <h4>{`Courses / ${course.courseabrev}`}</h4>
                    <h3>{`${course.courseabrev}: ${course.title} `}</h3>
                    {/* <div className='flexrow'>
                        <FaRegUserCircle className='icon2' />
                        <h5>{lecturer.name}</h5>
                    </div> */}
                </div>
                {/* <div className="virtualClassButton">
                    <button onClick={handleClick}>Start Virtual Class</button>
                </div> */}
            </div>
            <div>
                <TabContext value={value}>
                    <div style={{ padding: 0 }}>
                        <TabList sx={{ padding: 0, marginLeft: 1, paddingBottom: 0, textTransform: 'none' }} onChange={handleChange}>
                            <Tab sx={{ fontWeight: 'bold', color: 'black', paddingBottom: 0, textTransform: 'none' }} value={'1'} label='Stream' />
                            <Tab sx={{ fontWeight: 'bold', color: 'black', paddingBottom: 0, textTransform: 'none' }} value={'2'} label='People' />
                            <Tab sx={{ fontWeight: 'bold', color: 'black', paddingBottom: 0, textTransform: 'none' }} value={'3'} label='Groups' />
                            <Tab sx={{ fontWeight: 'bold', color: 'black', paddingBottom: 0, textTransform: 'none' }} value={'4'} label='Resources' />
                            <Tab sx={{ fontWeight: 'bold', color: 'black', paddingBottom: 0, textTransform: 'none' }} value={'5'} label='GradeBook' />

                        </TabList>
                    </div>
                    <TabPanel sx={{ p: 0 }} value={'1'}><ClassPost posts={posts} course={id} lecturer={lecturer} /></TabPanel>
                    <TabPanel sx={{ p: 0 }} value={'2'}><People course={id} /></TabPanel>
                    <TabPanel sx={{ p: 0 }} value={'3'}><Groups groups={groups} empty={empty} course={id} clazz={clazz} /></TabPanel>
                    <TabPanel sx={{ p: 0 }} value={'4'}><LecturerResources resources={resources} course={course} empty={emptyRes} /></TabPanel>
                    <TabPanel sx={{ p: 0 }} value={'5'}><Gradebook /></TabPanel>
                </TabContext>
            </div>
            <hr />
        </div>
    )
}

export default LecturerClasses