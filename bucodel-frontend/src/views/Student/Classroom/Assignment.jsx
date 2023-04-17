import React, { useEffect } from 'react'
import './css/courses.css'
import {
    useState
} from "react";
import AssignmentList from '../../../components/Student/Classroom Student/AssignmentList';
import MissedList from '../../../components/Student/Classroom Student/MissedList';
import DoneList from '../../../components/Student/Classroom Student/DoneList';
import axios from 'axios';
import config from '../../../config';
import io from "socket.io-client";
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Tab } from '@mui/material';
const socket = io(`${config.baseURL}`);

socket.on('NEW_ASSIGNMENT_UPLOADED', (message) => {
    console.log(message)
    window.location.reload();
});

socket.on('ASSIGNMENT_UPDATED', (message) => {
    console.log(message)
    window.location.reload();
});

socket.on('ASSIGNMENT_DELETED', (message) => {
    console.log(message)
    window.location.reload();
});

const Assignment = ({ student }) => {
    const [value, setValue] = useState(localStorage.getItem('saactiveTab') || '1'); // Initialize the active tab value from localStorage, or default to '1'

    const handleChange = (event, newValue) => {
        setValue(newValue);
        localStorage.setItem('saactiveTab', newValue); // Store the active tab value in localStorage
    };
    const [empty, setEmpty] = useState(false);
    const [assignedAssignments, setAssignedAssignments] = useState([])
    const [isAssignedAssignments, setIsAssignedAssignments] = useState(true)
    useEffect(() => {
        const fetchAssignedAssignments = async () => {
            const res = await axios.get(`${config.baseURL}/student/${student._id}/assignments/notsubmitted`);
            setAssignedAssignments(res.data);
            setIsAssignedAssignments(false)
            if (!assignedAssignments) {
                setEmpty(true)
            }
        };
        fetchAssignedAssignments();
    }, [student]);

    const [empty1, setEmpty1] = useState(false);
    const [missedAssignments, setMissedAssignments] = useState([])
    const [isMissedAssignments, setIsMissedAssignments] = useState(true)
    useEffect(() => {
        const fetchMissedAssignments = async () => {
            const res = await axios.get(`${config.baseURL}/student/assignments/missed/${student._id}`);
            setMissedAssignments(res.data);
            setIsMissedAssignments(false)
            if (missedAssignments.length === 0) {
                setEmpty1(true)
            }
        };
        fetchMissedAssignments();
    }, [student]);


    const [empty2, setEmpty2] = useState(false);
    const [doneAssignments, setDoneAssignments] = useState([])
    const [isDoneAssignments, setIsDoneAssignments] = useState(true)
    useEffect(() => {
        const fetchDoneAssignments = async () => {
            const res = await axios.get(`${config.baseURL}/student/assignments/submitted/${student._id}`);
            setDoneAssignments(res.data);
            setIsDoneAssignments(false)
            if (!doneAssignments) {
                setEmpty2(true)
            }

        };
        fetchDoneAssignments();
    }, [student]);



    return (
        <div className="courses">
            <div className="title"><h3>Assignments</h3></div>
            <div>
                <TabContext value={value}>
                    <div style={{ padding: 0 }}>
                        <TabList sx={{ padding: 0, marginLeft: 1, paddingBottom: 0, textTransform: 'none' }} onChange={handleChange}>
                            <Tab sx={{ fontWeight: 'bold', color: 'black', paddingBottom: 0, textTransform: 'none' }} value={'1'} label='Assigned' />
                            <Tab sx={{ fontWeight: 'bold', color: 'black', paddingBottom: 0, textTransform: 'none' }} value={'2'} label='Missing' />
                            <Tab sx={{ fontWeight: 'bold', color: 'black', paddingBottom: 0, textTransform: 'none' }} value={'3'} label='Done' />
                        </TabList>
                    </div>
                    <TabPanel sx={{ p: 0 }} value={'1'}><AssignmentList assignedAssignments={assignedAssignments} empty={empty} isAssignedAssignments={isAssignedAssignments} /></TabPanel>
                    <TabPanel sx={{ p: 0 }} value={'2'}><MissedList missedAssignments={missedAssignments} isMissedAssignments={isMissedAssignments} empty1={empty1} /></TabPanel>
                    <TabPanel sx={{ p: 0 }} value={'3'}><DoneList doneAssignments={doneAssignments} isDoneAssignments={isDoneAssignments} empty2={empty2} /></TabPanel>
                </TabContext>
            </div>
        </div>
    )
}

export default Assignment