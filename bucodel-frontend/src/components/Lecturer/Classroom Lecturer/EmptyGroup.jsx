import React, { useState } from 'react'
import CreateGroupModal from '../modal/CreateGroupModal';

const EmptyGroup = ({ course, clazz }) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="emptyGroup flexColumn">
            <div className="groupsSvg">
                <img src="https://res.cloudinary.com/manlikeemma/image/upload/v1674133403/BUCODEL/profile-2user_wwjzfy.svg" alt='' />
            </div>
            <h3>You have not created any student groups</h3>
            <h4>Click on create group in order to create a group</h4>
            <button onClick={handleOpen}>Create Groups</button>
            <CreateGroupModal open={open} setOpen={setOpen} handleClose={handleClose} course={course} clazz={clazz} />
        </div>
    )
}

export default EmptyGroup