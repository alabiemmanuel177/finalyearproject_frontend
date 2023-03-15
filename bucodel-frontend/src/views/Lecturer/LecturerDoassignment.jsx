import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Overview from '../../components/Lecturer/Doassignment/Overview';
import Sub from '../../components/Lecturer/Doassignment/Submission';
import config from '../../config';
import './css/doassignments.css'

export default function LecturerDoassignment() {
    let { id } = useParams();

    const [value, setValue] = useState('Overview')

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    const [assignment, setAssignment] = useState([])
    useEffect(() => {
        const fetchAssignments = async () => {
            const res = await axios.get(`${config.baseURL}/assignment/${id}`);
            setAssignment(res.data.assignment);
        };
        fetchAssignments();
    }, [id]);

    const [submissions, setSubmissions] = useState([])
    useEffect(() => {
        const fetchSubmissions = async () => {
            const res = await axios.get(`${config.baseURL}/assignment-answer/${id}/answers`);
            setSubmissions(res.data);
        };
        fetchSubmissions();
    }, [id]);
    return (
        <div className='lecturerdoass-root'>
            <div className='lecturerdoass-header'>
                <div className='lecturerdoass-direct'>
                    <p>Assignments &nbsp;/&nbsp; Assigned</p>
                </div>
                <div className='lecturerdoass-main'>
                    <h3>{assignment.title}</h3>
                </div>
            </div>
            <div>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', margin: 0, p: 0 }}>
                        <TabList onChange={handleChange} sx={{ p: 0, m: 0 }}>
                            <Tab className='tabunit' label='Overview' value='Overview' />
                            <Tab className='tabunit' label='Submissions' value='Submissions' />
                        </TabList>
                    </Box>
                    <TabPanel className='tabpanel-doass' value='Overview'>
                        <Overview assignment={assignment} />
                    </TabPanel>
                    <TabPanel className='tabpanel-doass' value='Submissions' >
                        <Sub submissions={submissions} />
                    </TabPanel>
                </TabContext>
            </div>
        </div>
    )
}
