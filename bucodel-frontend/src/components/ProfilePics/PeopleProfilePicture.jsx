import React from "react";
import { FaUserCircle } from "react-icons/fa";

export const PeopleProfilePicture = ({ fileUrl }) => {
    return (
        <div className="profile-picture">
            {fileUrl ? (
                <div className="post-profile-picture-container icon4 mt15">
                    <img src={fileUrl} alt="" />
                </div>
            ) : (
                <FaUserCircle className="icon4 mt15" />
            )}
        </div>
    );
};

export default PeopleProfilePicture;
