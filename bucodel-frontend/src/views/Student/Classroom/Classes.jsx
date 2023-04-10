import React, { useEffect, useState } from 'react'
import "./css/classes.css"
import { FaRegUserCircle } from "react-icons/fa";
import ClassPost from '../../../components/Student/Classroom Student/ClassPost';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import config from '../../../config';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Tab } from '@mui/material';
import Resources from '../../../components/Student/Classroom Student/Resources';
import Groups from '../../../components/Student/Classroom Student/Groups';
import People from '../../../components/Student/Classroom Student/People';

const Classes = ({ student }) => {
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

    //Get class resources
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

    const [group, setGroup] = useState()
    const [empty, setEmpty] = useState(false);
    const [leader, setLeader] = useState()
    const [message, setMessage] = useState();
    useEffect(() => {
        const fetchGroup = async () => {
            const res = await axios.get(`${config.baseURL}/group/students/${student._id}/courses/${id}/groups`);
            if (res.data.message) {
                setMessage(res.data.message)
            } else {
                setGroup(res.data);
                setLeader(res.data.leader)
                if (!group) {
                    setEmpty(true)
                }
            }
        };
        fetchGroup();
    }, [id, student._id, message, group]);

    return (
        <div className="classes">
            <div className="classHead">
                <div className="classTitle">
                    <h3>{`${course.courseabrev}: ${course.title} `}</h3>
                    {/* <div className='flexrow'>
                        <FaRegUserCircle className='icon2' />
                        <h5>{lecturer}</h5>
                    </div> */}
                </div>
                {/* <div className="virtualClassButton">
                    <button onClick={handleClick} id="start-conference">Join Virtual Class</button>
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
                        </TabList>
                    </div>
                    <TabPanel sx={{ p: 0 }} value={'1'}><ClassPost posts={posts} course={id} student={student} /></TabPanel>
                    <TabPanel sx={{ p: 0 }} value={'2'}><People course={id} student={student} /></TabPanel>
                    <TabPanel sx={{ p: 0 }} value={'3'}><Groups group={group} empty={empty} leader={leader} /></TabPanel>
                    <TabPanel sx={{ p: 0 }} value={'4'}><Resources resources={resources} course={course} empty={emptyRes} /></TabPanel>
                </TabContext>
            </div>
        </div>
    )
}

export default Classes