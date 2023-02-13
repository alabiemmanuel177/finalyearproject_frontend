import React from 'react'

const EmptyGroup = () => {
    return (
        <div className="emptyGroup flexColumn">
            <div className="groupsSvg">
                <img src="https://res.cloudinary.com/manlikeemma/image/upload/v1674133403/BUCODEL/profile-2user_wwjzfy.svg" alt=''/>
            </div>
            <h3>You have not created any student groups</h3>
            <h4>Click on create group in order to create a group</h4>
            <button>Create Groups</button>

        </div>
    )
}

export default EmptyGroup