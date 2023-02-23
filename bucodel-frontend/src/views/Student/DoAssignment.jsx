import React, { useState, useRef } from 'react';
import "./css/doassignment.css";

const DoAssignment = () => {

  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const fileType = selectedFile.type;
    if (fileType === 'application/pdf' || file.mimetype === "application/vnd.openxmlformats-officedocument.presentationml.presentation" || file.mimetype === "application/msword" || fileType === 'application/vnd.ms-powerpoint' || fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      setFile(selectedFile);
    } else {
      alert('Invalid file type. Please select a PDF, PowerPoint or Word document.');
    }
  };
  const handleRemoveFile = () => {
    setFile(null);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  }

  const handleSubmit = () => {
    // do something with the selected file
    console.log('Selected file:', file);
  };
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
          {!file ?
            <>
              <input type="file" accept=".pdf,.ppt,.pptx,.doc,.docx" onChange={handleFileChange} ref={fileInputRef} style={{ display: 'none' }} />
              <button className="addFile" onClick={handleButtonClick}>+ Add File</button>
              <button className="Create" disabled>Create</button>
            </>
            :
            <>
              <p>Selected file: {file.name}</p>
              <button className="remove-file Create" onClick={handleRemoveFile}>Remove File</button>
              <button className="Create" onClick={handleSubmit}>Submit</button>
            </>
          }
        </div>
      </div>

    </div>
  )
}

export default DoAssignment
