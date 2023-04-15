import React from 'react'
import { MdAssignment } from "react-icons/md";


const EmptyAssignment = () => {
    return (
        <div className="emptyGroup flexColumn" style={{ width: "100%", height: "100%", marginTop: "100px" }}>
            <div className="groupsSvg">
                <MdAssignment className='icon1' />
            </div>
            <h3>No Assignment Yet</h3>
        </div>
    )
}

export default EmptyAssignment

