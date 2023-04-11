import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import config from "../../config";
import axios from "axios";

export const PostProfilePicture = ({ fileUrl, student, lecturer }) => {
    const [userData, setUserData] = useState({});
    const [image, setImage] = useState();

    useEffect(() => {
        const getUserDetails = async () => {
            if (student && student._id) { // check if student and _id are defined
                const res = await axios.get(`${config.baseURL}/student/${student.id}`);
                setUserData(res.data);
            }
            else if (lecturer && lecturer._id) {
                const res = await axios.get(`${config.baseURL}/lecturer/${lecturer._id}`);
                setUserData(res.data);

            }
        };
        getUserDetails();
    }, []);

    useEffect(() => {
        if (fileUrl) {
            setImage(fileUrl);
        } else {
            setImage(userData?.profilePic?.fileUrl);
        }
    }, [fileUrl, userData?.profilePic?.fileUrl]);

    return (
        <div className="profile-picture" id="profile-picture">
            {image ? (
                <div className="post-profile-picture-container icon4">
                    <img src={image} alt="" />
                </div>
            ) : (
                <FaUserCircle className="icon4 mt15" />
            )}
        </div>
    );
};

export default PostProfilePicture;
