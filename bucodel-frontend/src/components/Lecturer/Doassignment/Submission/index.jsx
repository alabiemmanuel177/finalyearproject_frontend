import { Button, Checkbox, MenuItem, Select } from '@mui/material'
import React from 'react'
import './index.css'
import StudentCard from './StudentCard'
import io from "socket.io-client";
import config from '../../../../config';
import FileViewer from './FileViewer';
const socket = io(`${config.baseURL}`);

socket.on('ASSIGNMENT_ANSWER_DELETED', (message) => {
    console.log(message)
    window.location.reload();
});

export default function Sub({ submissions }) {
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
                        {submissions.map((p) => (
                            <StudentCard submission={p} key={p._id} />
                        ))}
                    </div>
                </div>
                <div className='submission-content-body'>
                    <div className='sub-content-head'>
                        <h5 className='sub-content-head-word'>Izu Onisokumen Preye</h5>
                        <h6 className='sub-content-head-mark'>8/10</h6>
                    </div>
                    <div className='sub-content-mainbody'>
                        <FileViewer />

                    </div>
                    <div>Comment Section</div>
                </div>
            </div>
        </div>
    )
}
