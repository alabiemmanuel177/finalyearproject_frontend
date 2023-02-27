import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Tab } from '@mui/material'
import React, { useState } from 'react'

function AdminClass() {
    const [value, setValue] = useState(1)
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

  return (
    <div>
        <div>
            <h6>Courses/SENG 302</h6>
            <h4>SENG 302: Object Oriented Software Development</h4>
        </div>
        <div>
            <TabContext value={value}>
                <div>
                    <TabList onChange={handleChange}>
                        <Tab value={1}>Student</Tab>
                        <Tab value={2}>Lecturer</Tab>
                    </TabList>
                </div>
                <TabPanel value={1}>Student</TabPanel>
                <TabPanel value={2}>Lecturer</TabPanel>
            </TabContext>
        </div>
    </div>
  )
}

export default AdminClass