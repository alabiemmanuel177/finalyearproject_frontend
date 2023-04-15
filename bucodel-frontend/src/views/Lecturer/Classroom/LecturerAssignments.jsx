import { Tabs, Tab, Box, Typography, Button } from '@mui/material';
import React, { useEffect } from 'react'
import Assignment from '../../../components/Lecturer/Assignment';
import PropTypes from 'prop-types';
import { useState } from 'react'
import './css/assignment.css'
import CreateAssignmentModal from '../../../components/Lecturer/modal/CreateAssignmentModal';
import axios from 'axios';
import config from '../../../config';
import io from "socket.io-client";
const socket = io(`${config.baseURL}`);

socket.on('NEW_ASSIGNMENT_UPLOADED', (message) => {
  console.log(message)
  window.location.reload();
});

socket.on('ASSIGNMENT_UPDATED', (message) => {
  console.log(message)
  window.location.reload();
});

socket.on('ASSIGNMENT_DELETED', (message) => {
  console.log(message)
  window.location.reload();
});


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function LecturerAssignments({ lecturer }) {
  const [value, setValue] = useState(0)
  const [open, setOpen] = useState(false)


  const handleOpen = () => setOpen(true);

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const [assignments, setAssignments] = useState([])
  useEffect(() => {
    const fetchAssignments = async () => {
      const res = await axios.get(`${config.baseURL}/lecturer/assignments/${lecturer._id}`);
      setAssignments(res.data);
    };
    fetchAssignments();
  }, [lecturer]);

  return (
    <div style={{ padding: '10px 0px' }}>
      <div className='main-assign-header'>
        <Typography color={'black'} fontWeight='bold' variant='h4'>Assignments</Typography>
        <Button onClick={handleOpen} sx={{ p: '8px 20px', textTransform: 'none', fontWeight: 'bold' }} className='assign-create' variant='contained' >Create</Button>
      </div>
      <div style={{ padding: '10px 0px' }}>
        <Tabs sx={{ borderBottom: '1px solid lightgray' }} value={value} onChange={handleChange}>
          <Tab sx={{ marginLeft: '25px', fontSize: '1.1rem', fontWeight: 'bold', textTransform: 'none', color: 'black' }} label={"Assigned"} {...a11yProps(0)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Assignment assignments={assignments} />
        </TabPanel>
      </div>
      <CreateAssignmentModal open={open} setOpen={setOpen} lecturer={lecturer._id} />
    </div>
  )

}
