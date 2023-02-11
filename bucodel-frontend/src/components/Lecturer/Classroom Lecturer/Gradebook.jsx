import React from 'react';
import StudentCard from '../Doassignment/Submission/StudentCard';
import { Button, Select, MenuItem, Checkbox } from '@mui/material';

const Gradebook = () => {
  return (
    <div className='submission-root'>
      <div className='submission-header'>
          <div>
              <Checkbox className='sub-checkbox'/>
              <Button size='small' variant='contained' color='primary'>Return</Button>
          </div>
          <Select size='small' defaultValue={10} sx={{ width: '100px' }}>
              <MenuItem>10</MenuItem>
          </Select>
      </div>
      <div className='submission-content'>
          <div className='submission-studentlist'>
              <div className='submission-studentlist-wrap'>
                  <StudentCard/>
                  <StudentCard/>
                  <StudentCard/>
                  <StudentCard/>
                  <StudentCard/>
                  <StudentCard/>
                  <StudentCard/>
                  <StudentCard/>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Gradebook