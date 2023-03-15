import React, { useState } from 'react'
import CreateResourceModal from '../modal/CreateResourceModal';

const EmptyResources = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);

    return (
        <div className="emptyGroup flexColumn">
            <div className="groupsSvg">
                <img src="https://res.cloudinary.com/manlikeemma/image/upload/v1674133403/BUCODEL/profile-2user_wwjzfy.svg" alt='' />
            </div>
            <h3>No Resourses have been Posted</h3>
            <button onClick={handleOpen}>Upload Resources</button>
            <CreateResourceModal open={open} setOpen={setOpen} />
        </div>
    )
}

export default EmptyResources
