import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Tab } from '@mui/material'
import React, { useState } from 'react'
import Lecturer from '../../../components/Admin/Database/Lecturer'
import Students from '../../../components/Admin/Database/Students'

export default function AdminDatabase() {
  const [value, setValue] = useState('1')
  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <div>
        <div style={{ padding: '15px 25px' }}>
            <h3 style={{ fontWeight: 'bold', marginTop: '10px' }}>Database</h3>
        </div>
        <div>
            <TabContext value={value}>
                <div style={{ padding: 0 }}>
                    <TabList sx={{ padding: 0, marginLeft: 1, paddingBottom: 0, textTransform: 'none' }} onChange={handleChange}>
                        <Tab sx={{ fontWeight: 'bold', color: 'black', paddingBottom: 0, textTransform: 'none' }} value={'1'} label='Student' />
                        <Tab sx={{ fontWeight: 'bold', color: 'black', paddingBottom: 0, textTransform: 'none' }} value={'2'} label='Lecturer'/>
                    </TabList>
                </div>
                <TabPanel sx={{ p: 0, }} value={'1'}><Students/></TabPanel>
                <TabPanel sx={{ p: 0, }} value={'2'}><Lecturer/></TabPanel>
            </TabContext>
        </div>
    </div>
  )
}
