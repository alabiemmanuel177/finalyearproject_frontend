import React, { useState, useEffect } from 'react'
import Password from '../../components/Admin/Page/Password';
import Profile from '../../components/Admin/Page/Profile';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Tab } from '@mui/material';

const AdminSettings = ({ admin }) => {
    const [value, setValue] = useState('1')
    const handleChange = (event, newValue) => setValue(newValue);

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
                    <TabPanel sx={{ p: 0 }} value={'1'}><Profile admin={admin} /></TabPanel>
                    <TabPanel sx={{ p: 0 }} value={'2'}><Password admin={admin} /></TabPanel>
                </TabContext>
            </div>
            <hr />


        </div>

    )
}

export default AdminSettings