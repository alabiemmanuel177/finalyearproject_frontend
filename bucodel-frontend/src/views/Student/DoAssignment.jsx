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
  // console.log(assignment);
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
                <AssignmentNotSubmitted assignmentId={id} studentId={student._id} />
                :
                <AssignmentSubmitted answerId={assignment.answer._id} />
              }
            </div>
          </>
        }
      </div>

    </div>
  )
}

export default DoAssignment


const AssignmentSubmitted = ({ answerId }) => {
  //SiMicrosoftpowerpoint
  //BsFileEarmarkWordFill
  const [fileInfo, setFileInfo] = useState(null);
  useEffect(() => {
    const fetchFile = async () => {
      try {
        const response = await axios.get(`${config.baseURL}/assignment/assignment-answers/${answerId}/file`);
        setFileInfo({
          name: response.data.name,
          type: response.data.type,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchFile();
  }, [answerId]);


  console.log(fileInfo);

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

const AssignmentNotSubmitted = ({studentId , assignmentId}) => {
  const [open, setOpen] = useState(false)
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  const handleButtonClick = () => {
    document.querySelector('input[type="file"]').click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("studentId", studentId);
      const response = await axios.post(
        `${config.baseURL}/assignment/assignment-answer/${assignmentId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      alert("Assignment answer submitted successfully");
      setFile(null);
      window.location.reload()
    } catch (error) {
      console.log(error);
      alert("Failed to submit assignment answer");
    }
  };

  return (
    <>
      <hr />
      {!file ?
        <>
          <form onSubmit={handleSubmit}>
            <input type="file" accept=".pdf,.ppt,.pptx,.doc,.docx" onChange={handleFileChange} style={{ display: 'none' }} />
          </form>
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