import { Button } from '@mui/material'
import React from 'react'
import './profile.css'

export function SettingsInput({ label, placeholder, value }) {
    return (
        <div className='settings-input'>
            <label className='settings-input-label' htmlFor="settings-name">{label}</label>
            <input className='settings-input-tag' name="settings-name" type="text" placeholder={placeholder} value={value} readOnly />
        </div>
    )
}

function Profile({ lecturer }) {
    console.log(lecturer);
    return (
        <div className='settings-profile-tab'>
            <div className='settings-unit-tab'>
                <div className='settings-unit-tab-name'>
                    <h6>Personal Info</h6>
                </div>
                <div className='settings-unit-tab-body'>
                    <SettingsInput label="Name" placeholder={'Dr Adetofunmi Adetunji'} value={lecturer.name} />
                    <SettingsInput label="ID Number" placeholder={'19/1485'} value={""} />
                    <SettingsInput label="Email" placeholder={'tofunmi@mail.com'} value={lecturer.email} />
                </div>
            </div>
            <div className='settings-unit-tab'>
                <div className='settings-unit-tab-name'>
                    <h6>Academic Info</h6>
                </div>
                <div className='settings-unit-tab-body'>
                    <SettingsInput label="Department" placeholder={'Software Engineer'} value={lecturer.department.name}/>
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