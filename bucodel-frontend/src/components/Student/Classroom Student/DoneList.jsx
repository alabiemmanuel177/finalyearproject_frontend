import React, { useEffect, useState } from 'react'
import '../css/assignmentList.css'
import { Link } from 'react-router-dom';
import { BsRecordCircleFill } from "react-icons/bs";

const DoneList = ({ doneAssignments }) => {
    return (
        <div className="assignmentList">
            {doneAssignments.map((p) => (
                <Assignment doneAssignment={p} key={p._id} />
            ))}

        </div>
    )
}

export default DoneList

export const Assignment = ({ doneAssignment }) => {
    return (<>
        {doneAssignment && (<Link to={`/doassignment/${doneAssignment._id}`} style={{ textDecoration: 'none' }}>
            <div className="assignment">
                <div className="top">
                    <button disabled="disabled">{doneAssignment.grade} Marks</button>
                    <BsRecordCircleFill className='icon7 green' />
                </div>
                <h3>{`${doneAssignment.courseId.courseabrev}: ${doneAssignment.title}`}</h3>
                <h5>{doneAssignment.description}</h5>
                <h4><span className='green'>Done</span></h4>

            </div>
        </Link>)}
    </>
    )
}