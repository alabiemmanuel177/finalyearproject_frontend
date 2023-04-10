import React, { useEffect } from 'react'
import './css/courses.css'
import {
    useState
} from "react";
import AssignmentList from '../../../components/Student/Classroom Student/AssignmentList';
import MissingList from '../../../components/Student/Classroom Student/MissingList';
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

    const [value, setValue] = useState('1')
    const handleChange = (event, newValue) => setValue(newValue);
    const [empty, setEmpty] = useState(false);

    const [assignedAssignments, setAssignedAssignments] = useState([])
    useEffect(() => {
        const fetchAssignedAssignments = async () => {
            const res = await axios.get(`${config.baseURL}/student/${student._id}/assignments/notsubmitted`);
            setAssignedAssignments(res.data);
            if (!assignedAssignments) {
                setEmpty(true)
            }
        };
        fetchAssignedAssignments();
    }, [student]);

    const [missedAssignments, setMissedAssignments] = useState([])
    useEffect(() => {
        const fetchMissedAssignments = async () => {
            const res = await axios.get(`${config.baseURL}/student/assignments/missed/${student._id}`);
            setMissedAssignments(res.data);
        };
        fetchMissedAssignments();
    },);

    const [doneAssignments, setDoneAssignments] = useState([])
    useEffect(() => {
        const fetchDoneAssignments = async () => {
            const res = await axios.get(`${config.baseURL}/student/assignments/submitted/${student._id}`);
            setDoneAssignments(res.data);

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
                    <TabPanel sx={{ p: 0 }} value={'1'}><AssignmentList assignedAssignments={assignedAssignments} empty={empty} /></TabPanel>
                    <TabPanel sx={{ p: 0 }} value={'2'}><MissedList missedAssignments={missedAssignments} /></TabPanel>
                    <TabPanel sx={{ p: 0 }} value={'3'}><DoneList doneAssignments={doneAssignments} /></TabPanel>
                </TabContext>
            </div>
        </div>
    )
}

export default Assignment