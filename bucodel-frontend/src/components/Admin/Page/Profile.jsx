import React, { useState } from 'react';
import axios from 'axios';
import config from '../../../config';
import ProfilePicture from './ProfilePicture';

const Profile = ({ admin }) => {
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
                `${config.baseURL}/admin/${admin._id}/profilePic`,
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
            .delete(`${config.baseURL}/admin/${admin._id}/profilepic`)
            .then((response) => console.log(response.data), window.location.reload())
            .catch((error) => console.error(error));
    }

    return (
        <div className="profile">
            <div className="personalInfo flexRow">
                <div className="personalInfoText">
                    <h4>Personal Info</h4>
                </div>
                <div className="personalInfoForm">
                    <div>
                        <h4 className="label">Name</h4>
                        <input
                            type="text"
                            className="mgb68"
                            placeholder="Name"
                            value={admin.name || ''}
                            readOnly
                        />
                    </div>
                    <h4 className="label">Email</h4>
                    <input
                        type="text"
                        placeholder="Email"
                        value={admin.email || ''}
                        readOnly
                    />
                </div>
            </div>
            <hr />
            <div className="yourPhoto flexRow">
                <div className="yourPhotoText">
                    <h4>Your Photo</h4>
                    <h5>This will be displayed on your profile</h5>
                </div>
                <div className="yourPhotoPic" onClick={handleButtonClick}>
                    <ProfilePicture admin={admin} />
                </div>
                <div className="yourPhotoControls flexRow">
                    <h3 className="grey" onClick={handleImageDelete}>
                        Delete
                    </h3>
                    <h3 className="blue" onClick={handleProfilePic}
                    >
                        Update
                    </h3>
                    <input
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Profile;
