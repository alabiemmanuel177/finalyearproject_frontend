import React, { useState } from 'react'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab } from '@mui/material'
import Profile from '../../../components/Lecturer/Settings/Profile'
import Passwords from '../../../components/Lecturer/Settings/Passwords'
import './css/settings.css'

const LecturerSettings = ({ lecturer }) => {
    const [value, setValue] = useState('Profile')
    const handleTabChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <div className="courses">
            <div className="title">
                <h3 style={{ fontWeight: 'bold' }}>Settings</h3>
            </div>
            <div>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', margin: '-5px 10px', p: 0 }}>
                        <TabList onChange={handleTabChange} sx={{ p: 0, m: 0 }}>
                            <Tab className='tabunit' label="Profile" value={"Profile"}></Tab>
                            <Tab className='tabunit' label="Passwords" value={"Password"}></Tab>
                        </TabList>
                    </Box>
                    <TabPanel sx={{ p: 0, m: 0 }} value={"Profile"}><Profile lecturer={lecturer} /></TabPanel>
                    <TabPanel sx={{ p: 0, m: 0 }} value={"Password"}><Passwords lecturer={lecturer} /></TabPanel>
                </TabContext>
            </div>
        </div>

    )
}
export default LecturerSettings