import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab } from '@mui/material'
import React, { useState } from 'react';
import Overview from '../../components/Lecturer/Doassignment/Overview';
import Sub from '../../components/Lecturer/Doassignment/Submission';
import './css/doassignments.css'

export default function LecturerDoassignment() {
    const [value, setValue] = useState('1')

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <div className='lecturerdoass-root'>
            <div className='lecturerdoass-header'>
                <div className='lecturerdoass-direct'>
                    <p>Assignments &nbsp;/&nbsp; Assigned</p>
                </div>
                <div className='lecturerdoass-main'>
                    <h3>Assignment 1</h3>
                </div>
            </div>
            <div>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', margin: 0, p: 0 }}>
                        <TabList onChange={handleChange} sx={{p:0, m: 0}}>
                            <Tab className='tabunit' label='Overview' value='1' />
                            <Tab className='tabunit' label='Submissions' value='2' />
                        </TabList>
                    </Box>
                    <TabPanel className='tabpanel-doass' value='1'>
                        <Overview/>
                    </TabPanel>
                    <TabPanel className='tabpanel-doass' value='2'>
                        <Sub />
                    </TabPanel>
                </TabContext>
            </div>
        </div>
    )
}
