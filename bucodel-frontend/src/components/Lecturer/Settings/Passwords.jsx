import { Button } from '@mui/material'
import React from 'react'
import './profile.css'

export default function Passwords() {
  return (
    <div className='settings-profile-tab'>
        <div className='settings-unit-tab'>
            <div className='settings-unit-tab-name'>
                <h6>Current Password</h6>
            </div>
            <div className='settings-unit-tab-body'>
                <input type="password" className='password-input-tag'  />
            </div>
        </div>
        <div className='settings-unit-tab'>
            <div className='settings-unit-tab-name'>
                <h6>New Password</h6>
            </div>
            <div className='settings-unit-tab-body'>
                <input type="password" className='password-input-tag'  />
            </div>
        </div>
        <div className='settings-unit-tab'>
            <div className='settings-unit-tab-name'>
                <h6>Confirm New Password</h6>
            </div>
            <div className='settings-unit-tab-body'>
                <input type="password" className='password-input-tag'  />
            </div>
        </div>
        <Button sx={{textTransform: 'none', fontWeight: 'bold', float: 'right', margin: '30px 200px 0 0' }} variant='contained'>Update Password</Button>
    </div>
  )
}
