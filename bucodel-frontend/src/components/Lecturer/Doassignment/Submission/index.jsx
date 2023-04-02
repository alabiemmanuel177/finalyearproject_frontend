import { Button, Checkbox, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import './index.css'
import StudentCard from './StudentCard'
import io from "socket.io-client";
import config from '../../../../config';
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
const socket = io(`${config.baseURL}`);

socket.on('ASSIGNMENT_ANSWER_DELETED', (message) => {
    console.log(message)
    window.location.reload();
});

export default function Sub({ submissions }) {
    const docs = [
        { uri: "https://res.cloudinary.com/manlikeemma/raw/upload/v1678733885/BUCODEL/Assignments/gzs7nec7v08hku4iysrp.docx" },
    ];

    const [selectedSubmission, setSelectedSubmission] = useState(null);

    const handleSelectSubmission = (submission) => {
        setSelectedSubmission(submission);
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
                            <StudentCard submission={p} selected={p === selectedSubmission} />
                        </div>
                    ))}
                </div>
                <div className='submission-content-body'>
                    <div className='sub-content-head'>
                        <h6 className='sub-content-head-mark'>8/10</h6>
                    </div>
                    <DocViewer {...(selectedSubmission ? { documents: [{ uri: selectedSubmission.file.fileUrl }], pluginRenderers: DocViewerRenderers, style: { width: "100%", height: "60%" } } : { documents: docs, pluginRenderers: DocViewerRenderers, style: { width: "100%", height: "60%" } })} />
                </div>
            </div>
        </div>
    )
}
