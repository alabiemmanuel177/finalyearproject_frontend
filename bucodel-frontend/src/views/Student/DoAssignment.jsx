import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import config from '../../config';
import "./css/doassignment.css";
import moment from 'moment';
import { GrDocumentPdf } from "react-icons/gr";
import CreateAssignment from '../../components/Student/modal/CreateAssignment';

const DoAssignment = ({ student }) => {
  let { id } = useParams();

  const [assignment, setAssignment] = useState(null)
  const [submitted, setSubmitted] = useState(true)
  useEffect(() => {
    const fetchAssignment = async () => {
      const res = await axios.get(`${config.baseURL}/assignment/${id}/${student._id}`);
      setAssignment(res.data)
      setformattedDate(moment(res.data.dueDate).format("Do MMM, h:mm a"))
      if (!res.data.answer) {
        setSubmitted(false)
      }

    };
    fetchAssignment();
  }, [student._id, id]);
  console.log(assignment);
  const [formattedDate, setformattedDate] = useState(null)
  return (
    <div className='doAssignment flexColumn'>
      <div className="assignmentType ">
        <h3>Assignment  / Assigned</h3>
      </div>
      <div className="assignmentContent flexrow jcsb">
        {assignment &&
          <>
            <div className="assignmentContentText">
              <div className="assignmentContentTextHead">
                <h3>{assignment.title}</h3>
                <h4>{`${assignment.courseabrev} : ${assignment.courseTitle}`}</h4>
              </div>
              <div className="assignmentContentTextInfo flexrow jcsb">
                {!submitted ?
                  <><h3 className='blue'>{`Due, ${formattedDate} `}</h3></>
                  :
                  <><h3 className='green'>Done</h3></>
                }

                <h3 className='blue'>{`${assignment.grade} mark(s)`}</h3>
              </div>
              <hr className='blue' />
              <h4>{assignment.description}</h4>
              <hr />
            </div>

            <div className="assignmentYourWork flexColumn">
              <h3>Your Work</h3>
              {!submitted ?
                <AssignmentNotSubmitted />
                :
                <AssignmentSubmitted />
              }
            </div>
          </>
        }
      </div>

    </div>
  )
}

export default DoAssignment


const AssignmentSubmitted = () => {

  return (
    <>
      <hr />
      <div className="files">
        <div className="submittedFile">
          <GrDocumentPdf className='icon8 red1' />
          <div className="filename" >
            <h2>Assignment 1</h2>
            <h4>PDF</h4>
          </div>
        </div>
      </div>
      <button className="addFile2">Unsubmit</button>
    </>
  )
}

const AssignmentNotSubmitted = () => {
  const [open, setOpen] = useState(false)
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
    <>
      <hr />
      {!file ?
        <>
          <input type="file" accept=".pdf,.ppt,.pptx,.doc,.docx" onChange={handleFileChange} ref={fileInputRef} style={{ display: 'none' }} />
          <button className="addFile" onClick={handleButtonClick}>+ Add File</button>
          <button className="Create" onClick={() => setOpen(true)}>Create</button>
          <CreateAssignment open={open} setOpen={setOpen} />
        </>
        :
        <>
          <p>Selected file: {file.name}</p>
          <button className="remove-file Create" onClick={handleRemoveFile}>Remove File</button>
          <button className="Create" onClick={handleSubmit}>Submit</button>
        </>
      }

    </>
  )
}