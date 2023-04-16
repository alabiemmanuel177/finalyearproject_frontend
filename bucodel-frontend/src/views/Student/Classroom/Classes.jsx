import React, { useEffect, useState } from 'react'
import "./css/classes.css"
import ClassPost from '../../../components/Student/Classroom Student/ClassPost';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import config from '../../../config';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Tab } from '@mui/material';
import Resources from '../../../components/Student/Classroom Student/Resources';
import Groups from '../../../components/Student/Classroom Student/Groups';
import People from '../../../components/Student/Classroom Student/People';
import { SkclassTitle } from '../../../components/Skeleton Loader/dasboardMetrics';

const Classes = ({ student }) => {
    let { id } = useParams();
    const [value, setValue] = useState(localStorage.getItem('ssactiveTab') || '1'); // Initialize the active tab value from localStorage, or default to '1'

    const handleChange = (event, newValue) => {
        setValue(newValue);
        localStorage.setItem('ssactiveTab', newValue); // Store the active tab value in localStorage
    };

    const [course, setCourse] = useState([])
    const [lecturerList, setLecturerList] = useState();
    const [isCourse, setIsCourse] = useState(true)
    useEffect(() => {
        const fetchCourses = async () => {
            const res = await axios.get(`${config.baseURL}/course/${id}`);
            setCourse(res.data)
            setLecturerList(res.data.lecturer)
            setIsCourse(false)
        };
        fetchCourses();
    }, [id]);

    const [lecturer, setLecturer] = useState("");
    const [isLecturer, setIsLecturer] = useState(true);
    useEffect(() => {
        if (lecturerList && lecturerList.length > 0) {
            const fetchLecturer = async () => {
                const res = await axios.get(`${config.baseURL}/lecturer/${lecturerList[0]}`);
                setLecturer(res.data.name);
                setIsLecturer(false)
            };
            fetchLecturer();
        }
    }, [lecturerList]);

    const [posts, setPosts] = useState([])
    const [isFposts, setIsFPosts] = useState(true)
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`${config.baseURL}/classpost/posts/${id}`);
            setPosts(res.data);
            setIsFPosts(false)
        };
        fetchPosts();
    }, [id]);

    //Get class resources
    const [resources, setResources] = useState([])
    const [isResources, setIsResources] = useState(true)
    const [emptyRes, setEmptyRes] = useState(false);
    useEffect(() => {
        const fetchResources = async () => {
            const res = await axios.get(`${config.baseURL}/course/${id}/materials`);
            setResources(res.data.materials);
            setIsResources(false)
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
    const [isGroup, setIsGroup] = useState(true);
    useEffect(() => {
        const fetchGroup = async () => {
            const res = await axios.get(`${config.baseURL}/group/students/${student._id}/courses/${id}/groups`);
            if (res.data.message) {
                setMessage(res.data.message)
            } else {
                setGroup(res.data);
                setLeader(res.data.leader)
                setIsGroup(false)
                if (!group) {
                    setEmpty(true)
                }
            }
        };
        fetchGroup();
    }, [id, student._id, message, group]);

    const shouldRenderSkeletons = isCourse || isLecturer;


    return (
        <div className="classes">
            <div className="classHead">
                {shouldRenderSkeletons ? <SkclassTitle /> : <div className="classTitle">
                    <h3>{`${course.courseabrev}: ${course.title} `}</h3>
                    <div className='flexrow'>
                        <h5>{lecturer}</h5>
                    </div>
                </div>}
                <Link to={`/meeting/${course._id}`} style={{ textDecoration: 'none' }}>

                    <div className="virtualClassButton">
                        <button id="start-conference">Join Virtual Class</button>
                    </div>
                </Link>
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
                    <TabPanel sx={{ p: 0 }} value={'1'}><ClassPost posts={posts} course={id} student={student} isFposts={isFposts} /></TabPanel>
                    <TabPanel sx={{ p: 0 }} value={'2'}><People course={id} student={student} /></TabPanel>
                    <TabPanel sx={{ p: 0 }} value={'3'}><Groups isGroup={isGroup} group={group} empty={empty} leader={leader} student={student} /></TabPanel>
                    <TabPanel sx={{ p: 0 }} value={'4'}><Resources isResources={isResources} resources={resources} course={course} empty={emptyRes} /></TabPanel>
                </TabContext>
            </div>
        </div>
    )
}

export default Classes