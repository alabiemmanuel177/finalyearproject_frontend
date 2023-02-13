import { Button, Checkbox, MenuItem, Select } from '@mui/material'
import React from 'react'
import './index.css'
import StudentCard from './StudentCard'

export default function Sub() {
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
            <div className='submission-content-body'>
                <div className='sub-content-head'>
                    <h5 className='sub-content-head-word'>Izu Onisokumen Preye</h5>
                    <h6 className='sub-content-head-mark'>8/10</h6>
                </div>
                <div className='sub-content-mainbody'>
                    body
                </div>
                <div>Comment Section</div>
            </div>
        </div>
    </div>
  )
}
