import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Tab } from '@mui/material'
import React, { useState } from 'react'
import Students from '../../../components/Admin/Courses/CourseInfo/Students'
import Lecturer from '../../../components/Admin/Courses/CourseInfo/Lecturer'

function AdminClass() {
    const [value, setValue] = useState('Student')
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

  return (
    <div>
        <div style={{ padding: '15px 25px' }}>
            <h6 style={{ fontSize: 'small', color: 'gray' }}>Courses / SENG 302</h6>
            <h4 style={{ fontWeight: 'bold', marginTop: '10px' }}>SENG 302: Object Oriented Software Development</h4>
        </div>
        <div>
            <TabContext value={value}>
                <div style={{ padding: 0 }}>
                    <TabList sx={{ padding: 0, marginLeft: 1, paddingBottom: 0, textTransform: 'none' }} onChange={handleChange}>
                        <Tab sx={{ fontWeight: 'bold', color: 'black', paddingBottom: 0, textTransform: 'none' }} value={'Student'} label='Student' />
                        <Tab sx={{ fontWeight: 'bold', color: 'black', paddingBottom: 0, textTransform: 'none' }} value={'Lecturer'} label='Lecturer'/>
                    </TabList>
                </div>
                <TabPanel sx={{ p: 0, }} value={'Student'}><Students /></TabPanel>
                <TabPanel sx={{ p: 0, }} value={'Lecturer'}><Lecturer /></TabPanel>
            </TabContext>
        </div>
    </div>
  )
}

export default AdminClass