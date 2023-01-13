import React from 'react'
import "./css/doassignment.css";


const DoAssignment = () => {
  return (
    <div className='doAssignment flexColumn'>
      <div className="assignmentType ">
        <h3>Assignment  / Assigned</h3>
      </div>
      <div className="assignmentContent flexrow jcsb">
        <div className="assignmentContentText">
          <div className="assignmentContentTextHead">
            <h3>Assignment 1 </h3>
            <h4>COSC 302: Data Structures and Algorithm</h4>
          </div>
          <div className="assignmentContentTextInfo flexrow jcsb">
            <h3>Due, Dec 5    :<span className='blue'>  8:00 PM</span></h3>
            <h3 className='blue'>10 Marks</h3>
          </div>
          <hr className='blue' />
          <h4>Can you write about the Oracle database 12C Multitenant architecture?</h4>
          <hr />
        </div>

        <div className="assignmentYourWork flexColumn">
          <h3>Your Work</h3>
          <hr />
          <button className='addFile'>+ Add File</button>
          <button className='Create'>Create</button>
        </div>
      </div>

    </div>
  )
}

export default DoAssignment
