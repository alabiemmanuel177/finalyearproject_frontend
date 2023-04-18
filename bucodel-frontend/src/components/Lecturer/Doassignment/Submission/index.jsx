import { Button, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import './index.css'
import StudentCard from './StudentCard'
import io from "socket.io-client";
import config from '../../../../config';
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import axios from 'axios';

const socket = io(`${config.baseURL}`);

socket.on('ASSIGNMENT_ANSWER_DELETED', (message) => {
    console.log(message)
    window.location.reload();
});

export default function Sub({ submissions, assignment }) {

    const [selectedSubmission, setSelectedSubmission] = useState(null);
    const [grade, setGrade] = useState();
    const [answer, setAnswer] = useState();

    const handleSelectSubmission = (submission) => {
        setSelectedSubmission(submission);
        setGrade(submission.grade);
        setAnswer(submission._id);
    };

    const handleGradeChange = (e) => {
        setGrade(e.target.value);
    };
    const [isLoading, setIsLoading] = useState(false); // Add isLoading state

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Set isLoading to true when submitting
        try {
            const res = await axios.post(`${config.baseURL}/assignment/${answer}`, {
                grade
            });
            if (res.data) {
                window.location.reload();
            }
        } catch (err) {
        }
    };

    return (
        <div className='submission-root'>
            <div className='submission-header'>
                <div>

                </div>
                <Select size='small' defaultValue={10} sx={{ width: '100px' }}>
                    <MenuItem>Unmarked</MenuItem>
                    <MenuItem>Marked</MenuItem>
                </Select>
            </div>
            <div className='submission-content'>
                <div className='submission-studentlist'>
                    {submissions.map((p) => (
                        <div key={p._id} onClick={() => handleSelectSubmission(p)}>
                            <StudentCard submission={p} />
                        </div>
                    ))}
                </div>
                <div className='submission-content-body'>
                    {selectedSubmission && (
                        <div className='sub-content-head'>
                            <input type={"text"} value={grade} style={{ width: "30px", marginRight: "5px" }} className='sub-content-head-mark' onChange={handleGradeChange} />
                            <h6 className='sub-content-head-mark'> /{assignment.grade}</h6>
                            <Button onClick={handleSubmit} sx={{ p: '3px 8px', textTransform: 'none', fontWeight: 'bold' }} style={{ marginLeft: "50px" }} disabled={isLoading} variant='contained' >{isLoading ? 'Grading...' : 'Grade'}</Button>

                        </div>
                    )}
                    {selectedSubmission && (
                        <DocViewer
                            documents={[{ uri: selectedSubmission.file.fileUrl }]}
                            pluginRenderers={DocViewerRenderers}
                            style={{ width: "100%", height: "60%" }}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}
