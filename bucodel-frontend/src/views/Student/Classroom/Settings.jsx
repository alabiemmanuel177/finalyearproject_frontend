import React, { useState, useEffect } from 'react'
import Password from '../../../components/Student/Classroom Student/Password';
import Profile from '../../../components/Student/Classroom Student/Profile';
import axios from 'axios';
import config from "../../../config";
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Tab } from '@mui/material';

const Settings = ({ student }) => {
    const [value, setValue] = useState('1')
    const handleChange = (event, newValue) => setValue(newValue);

    const [department, setDepartment] = useState("");
    useEffect(() => {
        const fetchDepartment = async () => {
            const res = await axios.get(`${config.baseURL}/department/${student.department}`);
            setDepartment(res.data);
        };
        fetchDepartment();
    });

    return (
        <div className="courses">
            <div className="title"><h3>Settings</h3></div>
            <div>
                <TabContext value={value}>
                    <div style={{ padding: 0 }}>
                        <TabList sx={{ padding: 0, marginLeft: 1, paddingBottom: 0, textTransform: 'none' }} onChange={handleChange}>
                            <Tab sx={{ fontWeight: 'bold', color: 'black', paddingBottom: 0, textTransform: 'none' }} value={'1'} label='Profile' />
                            <Tab sx={{ fontWeight: 'bold', color: 'black', paddingBottom: 0, textTransform: 'none' }} value={'2'} label='Password' />
                        </TabList>
                    </div>
                    <TabPanel sx={{ p: 0 }} value={'1'}><Profile student={student} department={department} /></TabPanel>
                    <TabPanel sx={{ p: 0 }} value={'2'}><Password student={student} /></TabPanel>
                </TabContext>
            </div>
        </div>
    )
}

export default Settings