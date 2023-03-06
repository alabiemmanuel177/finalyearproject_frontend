import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab } from '@mui/material'
import { useState } from 'react'
import Profile from '../../../components/Lecturer/Settings/Profile'
import Passwords from '../../../components/Lecturer/Settings/Passwords'
import './css/settings.css'

const LecturerSettings = ({ lecturer }) => {
    const [value, setValue] = useState('1')
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
                            <Tab className='tabunit' label="Profile" value={'1'}></Tab>
                            <Tab className='tabunit' label="Passwords" value={'2'}></Tab>
                        </TabList>
                    </Box>
                    <TabPanel sx={{ p: 0, m: 0 }} value={'1'}><Profile lecturer={lecturer} /></TabPanel>
                    <TabPanel sx={{ p: 0, m: 0 }} value={'2'}><Passwords lecturer={lecturer} /></TabPanel>
                </TabContext>
            </div>
        </div>

    )
}

export default LecturerSettings