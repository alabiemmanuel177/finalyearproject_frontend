import React, { useState } from 'react'

const EmptyGroup = ({ course, clazz }) => {
    
    return (
        <div className="emptyGroup flexColumn">
            <div className="groupsSvg">
                <img src="https://res.cloudinary.com/manlikeemma/image/upload/v1674133403/BUCODEL/profile-2user_wwjzfy.svg" alt='' />
            </div>
            <h3>No group has been created</h3>
        </div>
    )
}

export default EmptyGroup