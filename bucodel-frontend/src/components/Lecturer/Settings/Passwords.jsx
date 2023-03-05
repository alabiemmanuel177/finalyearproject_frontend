import { Button } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import config from '../../../config';
import PasswordChange from '../../Lecturer/modal/PasswordChange';
import './profile.css'

export default function Passwords({ lecturer }) {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confrirmNewPassword, setConfrirmNewPassword] = useState("");
    const id = lecturer._id;
    const [error, setError] = useState(null);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        if (newPassword !== confrirmNewPassword) {
            setError('Passwords do not match');
            console.log(error);
        }
        else {
            try {
                const res = await axios.post(`${config.baseURL}/lecturer/change-password`, {
                    id,
                    oldPassword,
                    newPassword
                });
                res.data && window.location.replace("/lecturersettings");
            } catch (err) {
                setError(err);
            }
        }
    };
    return (
        <div className='settings-profile-tab'>
            <div className='settings-unit-tab'>
                <div className='settings-unit-tab-name'>
                    <h6>Current Password</h6>
                </div>
                <div className='settings-unit-tab-body'>
                    <input type="password" className='password-input-tag' onChange={(e) => setOldPassword(e.target.value)} />
                </div>
            </div>
            <div className='settings-unit-tab'>
                <div className='settings-unit-tab-name'>
                    <h6>New Password</h6>
                </div>
                <div className='settings-unit-tab-body'>
                    <input type="password" className='password-input-tag' onChange={(e) => setNewPassword(e.target.value)} />
                </div>
            </div>
            <div className='settings-unit-tab'>
                <div className='settings-unit-tab-name'>
                    <h6>Confirm New Password</h6>
                </div>
                <div className='settings-unit-tab-body'>
                    <input type="password" className='password-input-tag' onChange={(e) => setConfrirmNewPassword(e.target.value)} />
                </div>
            </div>
            <Button sx={{ textTransform: 'none', fontWeight: 'bold', float: 'right', margin: '30px 200px 0 0' }} variant='contained' onClick={handleOpen}>Update Password</Button>
            <PasswordChange open={open} setOpen={setOpen} handleSubmit={handleSubmit} />
        </div>

    )
}
