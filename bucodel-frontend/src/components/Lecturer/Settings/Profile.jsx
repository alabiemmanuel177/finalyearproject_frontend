import { Button } from '@mui/material'
import React, { useState } from 'react'
import './profile.css'
import axios from 'axios';
import config from '../../../config';
import ProfilePicture from '../../Student/Classroom Student/ProfilePicture';

export function SettingsInput({ label, placeholder, value }) {
    return (
        <div className='settings-input'>
            <label className='settings-input-label' htmlFor="settings-name">{label}</label>
            <input className='settings-input-tag' name="settings-name" type="text" placeholder={placeholder} value={value} readOnly />
        </div>
    )
}

function Profile({ lecturer }) {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleButtonClick = () => {
        document.querySelector('input[type="file"]').click();
    };

    const [error1, setError1] = useState(false);
    const handleProfilePic = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("profilePic", file);
            const response = await axios.post(
                `${config.baseURL}/lecturer/${lecturer._id}/profilePic`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log(response);
            alert("Profile Pic Update successfully");
            setFile(null);
            window.location.reload();
        } catch (err) {
            console.log(err);
            alert("Failed to upload profile pic");
            setError1(err.response.data.message);
        }
    };

    function handleImageDelete() {
        // send a request to the server to delete the profile picture
        axios
            .delete(`${config.baseURL}/admin/${lecturer._id}/profilepic`)
            .then((response) => console.log(response.data), window.location.reload())
            .catch((error) => console.error(error));
    }

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
                    <SettingsInput label="Department" placeholder={'Software Engineer'} value={lecturer.department.name} />
                    <SettingsInput label="Level" placeholder={'Facilitator'} />
                </div>
            </div>
            <div className='settings-unit-tab'>
                <div className='settings-unit-tab-name'>
                    <h6>Your Photo</h6>
                    <p style={{ fontSize: '0.8rem', color: 'gray' }}>This will be displayed on your profile</p>
                </div>
                <div className='settings-unit-tab-body'>
                    <div className="yourPhotoPic mgr100" onClick={handleButtonClick}>
                        <ProfilePicture lecturer={lecturer} />
                    </div>
                    <div>
                        <Button onClick={handleImageDelete}>Delete</Button>
                        <Button onClick={handleProfilePic}>Update</Button>
                        <input
                            type="file"
                            accept=".jpg,.jpeg,.png"
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile