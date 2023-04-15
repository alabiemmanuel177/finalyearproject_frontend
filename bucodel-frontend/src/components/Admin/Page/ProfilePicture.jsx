import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
import config from "../../../config";

export const ProfilePicture = ({ admin }) => {
    const [userData, setUserData] = useState(null);
    const [image, setImage] = useState(null);

    useEffect(() => {
        const getUserDetails = async () => {
            const res = await axios.get(`${config.baseURL}/admin/${admin._id}`);
            setUserData(res.data);
            if (res.data.profilePic) {
                setImage(res.data.profilePic.fileUrl);
            }
        };
        getUserDetails();
    }, [admin._id]);

    return (
        <div className="profile-picture">
            {image ? (
                <div className="profile-picture-container">
                    <img src={image} alt="" />
                </div>
            ) : (
                <FaUserCircle className="icon9" />
            )}
        </div>
    );
};

export default ProfilePicture;
