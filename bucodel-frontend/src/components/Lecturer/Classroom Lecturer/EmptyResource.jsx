import React, { useState } from 'react'

const EmptyResources = () => {
    return (
        <div className="emptyGroup flexColumn">
            <div className="groupsSvg">
                <img src="https://res.cloudinary.com/manlikeemma/image/upload/v1674133403/BUCODEL/profile-2user_wwjzfy.svg" alt='' />
            </div>
            <h3>No Resourses have been Posted</h3>
        </div>
    )
}

export default EmptyResources