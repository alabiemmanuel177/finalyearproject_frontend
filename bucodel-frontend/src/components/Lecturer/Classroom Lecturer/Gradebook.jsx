import React, { useEffect, useState } from 'react';
import StudentCard from '../Doassignment/Submission/StudentCard';
import { Button, Select, MenuItem, Checkbox } from '@mui/material';
import axios from 'axios';
import config from '../../../config';

const Gradebook = ({ course }) => {
  const [message, setMessage] = useState();
  const [students, setStudents] = useState([]);
  const [empty, setEmpty] = useState(false);
  useEffect(() => {
    const fetchMembers = async () => {
      const res = await axios.get(`${config.baseURL}/course/${course}/members`);
      if (res.data.message) {
        setMessage(res.data.message)
        setEmpty(true)
      }
      else {
        setStudents(res.data.students)
      }
    };
    fetchMembers();
  });
  return (
    <div className='submission-root'>
      <div className='submission-header'>
        <div>
          <Checkbox className='sub-checkbox' />
          <Button size='small' variant='contained' color='primary'>Return</Button>
        </div>
        <Select size='small' defaultValue={10} sx={{ width: '100px' }}>
          <MenuItem>10</MenuItem>
        </Select>
      </div>
      <div className='submission-content'>
        <div className='submission-studentlist'>
          <div className='submission-studentlist-wrap'>
            {students?.map((p) => (<StudentCard student={p} />))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gradebook