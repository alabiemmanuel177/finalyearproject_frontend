import { Button } from '@mui/material'
import React from 'react'
import './profile.css'

export function SettingsInput({ label, placeholder }) {
    return(
        <div className='settings-input'>
            <label className='settings-input-label' htmlFor="settings-name">{label}</label>
            <input className='settings-input-tag' name="settings-name" type="text" placeholder={placeholder} />
        </div>
    )
}

function Profile() {
  return (
    <div className='settings-profile-tab'>
        <div className='settings-unit-tab'>
            <div className='settings-unit-tab-name'>
                <h6>Personal Info</h6>
            </div>
            <div className='settings-unit-tab-body'>
                <SettingsInput label="Name" placeholder={'Dr Adetofunmi Adetunji'} />
                <SettingsInput label="ID Number" placeholder={'19/1485'} />
                <SettingsInput label="Email" placeholder={'tofunmi@mail.com'} />
            </div>
        </div>
        <div className='settings-unit-tab'>
            <div className='settings-unit-tab-name'>
                <h6>Academic Info</h6>
            </div>
            <div className='settings-unit-tab-body'>
                <SettingsInput label="Department" placeholder={'Software Engineer'} />
                <SettingsInput label="Level" placeholder={'Facilitator'} />
            </div>
        </div>
        <div className='settings-unit-tab'>
            <div className='settings-unit-tab-name'>
                <h6>Your Photo</h6>
                <p style={{ fontSize: '0.8rem', color: 'gray' }}>This will be displayed on your profile</p>
            </div>
            <div className='settings-unit-tab-body'>
                <div className='profile-image'></div>
                <div>
                    <Button>Delete</Button>
                    <Button>Update</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile