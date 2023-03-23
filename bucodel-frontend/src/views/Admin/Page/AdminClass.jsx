import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Tab } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Lecturer from '../../../components/Admin/Courses/CourseInfo/Lecturer'
import Students from '../../../components/Admin/Courses/CourseInfo/Students'
import config from '../../../config'

function AdminClass() {
    const [value, setValue] = useState('Student')
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    let { id } = useParams();
    const [members, setMemebers] = useState();
    const [message, setMessage] = useState();
    const [lecturers, setLecturers] = useState([]);
    const [students, setStudents] = useState([]);
    useEffect(() => {
        const fetchMembers = async () => {
            const res = await axios.get(`${config.baseURL}/course/${id}/members`);
            if (res.data.message) {
                setMessage(res.data.message)
            }
            else {
                setMemebers(res.data);
                setLecturers(res.data.course.lecturer)
                setStudents(res.data.students)
            }
            // console.log(members, message); 

        };
        fetchMembers();
    });

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

    return (
        <div>
            <div style={{ padding: '15px 25px' }}>
                <h6 style={{ fontSize: 'small', color: 'gray' }}>Courses / {course.courseabrev}</h6>
                <h4 style={{ fontWeight: 'bold', marginTop: '10px' }}>{`${course.courseabrev}: ${course.title} `}</h4>
            </div>
            <div>
                <TabContext value={value}>
                    <div style={{ padding: 0 }}>
                        <TabList sx={{ padding: 0, marginLeft: 1, paddingBottom: 0, textTransform: 'none' }} onChange={handleChange}>
                            <Tab sx={{ fontWeight: 'bold', color: 'black', paddingBottom: 0, textTransform: 'none' }} value={'Student'} label='Student' />
                            <Tab sx={{ fontWeight: 'bold', color: 'black', paddingBottom: 0, textTransform: 'none' }} value={'Lecturer'} label='Lecturer' />
                        </TabList>
                    </div>
                    <TabPanel sx={{ p: 0, }} value={'Student'}><Students students={students} /></TabPanel>
                    <TabPanel sx={{ p: 0, }} value={'Lecturer'}><Lecturer lecturers={lecturers} /></TabPanel>
                </TabContext>
            </div>
        </div>
    )
}

export default AdminClass