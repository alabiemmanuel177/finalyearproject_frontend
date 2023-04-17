import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import config from '../../config';
import "./css/doassignment.css";
import moment from 'moment';
import { GrDocumentPdf } from "react-icons/gr";
import CreateAssignment from '../../components/Student/modal/CreateAssignment';
import UnsubmitAssignment from '../../components/Student/modal/UnsubmitAssignmnet';
import io from "socket.io-client";
import { FaFilePowerpoint, FaFileWord } from 'react-icons/fa';
import { AiFillFileUnknown } from 'react-icons/ai';
const socket = io(`${config.baseURL}`);

socket.on('ASSIGNMENT_UPDATED', (message) => {
  console.log(message)
  window.location.reload();
});

socket.on('ASSIGNMENT_ANSWER_GRADED', (message) => {
  console.log(message)
  window.location.reload();
});

const DoAssignment = ({ student }) => {
  let { id } = useParams();

  const [assignment, setAssignment] = useState(null)
  const [isAssignment, setIsAssignment] = useState(true)
  const [submitted, setSubmitted] = useState(true)
  useEffect(() => {
    const fetchAssignment = async () => {
      const res = await axios.get(`${config.baseURL}/assignment/${id}/${student._id}`);
      setAssignment(res.data)
      setIsAssignment(false)
      setformattedDate(moment(res.data.dueDate).format("Do MMM, h:mm a"))
      if (!res.data.answer) {
        setSubmitted(false)
      }
    };
    fetchAssignment();
  }, [student._id, id]);
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
                <AssignmentSubmitted answer={assignment.answer} assignmentId={id} />
              }
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default DoAssignment

const AssignmentSubmitted = ({ answer, assignmentId }) => {
  const [open, setOpen] = useState(false)
  const fileId = answer.file
  const answerId = answer._id

  const [fileDets, setFileDets] = useState(null)
  useEffect(() => {
    const fetchFileDets = async () => {
      const res = await axios.get(`${config.baseURL}/assignment-answerfile/${fileId}/`);
      setFileDets(res.data);
    };
    fetchFileDets();
  }, [fileId]);

  const handleDownload = async () => {
    const fileUrl = fileDets.fileUrl
    const fileName = fileDets.fileName
    const res = await axios.get(fileUrl, {
      responseType: 'blob'
    });
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement('a');
    link.href = url;
    const fileExt = fileUrl.substring(fileUrl.lastIndexOf('.') + 1);
    link.setAttribute('download', `${fileName}.${fileExt}`);
    document.body.appendChild(link);
    link.click();
  };
  const getFileIcon = (fileExt) => {
    switch (fileExt) {
      case "pdf":
        return <GrDocumentPdf className="icon8 " />;
      case "doc":
      case "docx":
        return <FaFileWord className="icon8 word" />;
      case "ppt":
      case "pptx":
        return <FaFilePowerpoint className="icon8 ppt" />;
      default:
        return <AiFillFileUnknown className="icon8 " />;
    }
  };

  const handleUnsubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.delete(
        `${config.baseURL}/assignment-answer/unsubmit/${answerId}`)
      res.data && window.location.reload()

    } catch (err) {
      alert("Failed to unsubmit assignment");
    }
  };
  return (
    <>
      <hr />
      <div className="files">
        {fileDets && <>
          <div className="submittedFile">
            {getFileIcon(fileDets.fileUrl.substring(fileDets.fileUrl.lastIndexOf('.') + 1))}
            <div className="filename" onClick={handleDownload}>
              <h2 style={{
                overflow: "hidden",
                textOverflow: "ellipsis", maxHeight: "40px"
              }}>{fileDets.fileName}</h2>
              <h4 style={{ textTransform: "uppercase" }}>{fileDets.fileUrl.substring(fileDets.fileUrl.lastIndexOf('.') + 1)}</h4>
            </div>
          </div>
        </>}
      </div>
      <button className="addFile2" onClick={() => setOpen(true)}>Unsubmit</button>
      <UnsubmitAssignment open={open} setOpen={setOpen} handleUnsubmit={handleUnsubmit} />
    </>
  )
}

const AssignmentNotSubmitted = ({ studentId, assignmentId }) => {
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
  const [error, setError] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("studentId", studentId);
      const response = await axios.post(
        `${config.baseURL}/assignment-answer/${assignmentId}/${studentId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      ); console.log(response);
      alert("Assignment answer submitted successfully");
      setFile(null);
      window.location.reload()
    } catch (err) {
      console.log(err);
      alert("Failed to submit assignment answer");
      setError(err.response.data.message);
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
          <CreateAssignment open={open} setOpen={setOpen} handleSubmit={handleSubmit} />
        </>
        :
        <>
          <p>Selected file: {file.name}</p>
          <button className="remove-file Create" onClick={handleRemoveFile}>Remove File</button>
          <button className="Create" onClick={handleSubmit}>Submit</button>
          {error && <p className="error">{error}</p>}
        </>
      }
    </>
  )
}