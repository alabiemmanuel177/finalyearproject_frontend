import React, { useState } from 'react'
import { Modal, Button, TextareaAutosize } from '@mui/material'
import './css/createassignmentmodal.css'
import { MdOutlineCancel } from 'react-icons/md';
import axios from 'axios';
import config from '../../../config';
import { useParams } from 'react-router-dom';

function CreateResourceModal({ open, setOpen }) {
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [files, setFiles] = useState([]);
    const [selectedFileNames, setSelectedFileNames] = useState([]);
    let { id } = useParams();
    const [isLoading, setIsLoading] = useState(false); // Add isLoading state
    const handleFileChange = (event) => {
        setFiles([...files, ...event.target.files]);
        const fileNames = Array.from(event.target.files).map((file) => file.name);
        setSelectedFileNames([...selectedFileNames, ...fileNames]);
    };

    const handleButtonClick = () => {
        document.querySelector('input[type="file"]').click();
    };

    const [setError] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Set isLoading to true when submitting
        try {
            const formData = new FormData();
            for (let i = 0; i < files.length; i++) {
                formData.append('files', files[i]);
            }
            formData.append("title", title);
            formData.append("description", description);
            formData.append("course", id);
            const response = await axios.post(
                `${config.baseURL}/coursematerial`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            if (response) {
                console.log(!response);
            }

            alert("Resource upload successful");
            setFiles(null);
            window.location.reload()
        } catch (err) {
            console.log(err);
            alert("Failed to upload resources");
            setError(err.response.data.message);
        }
    };
    return (
        <div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <div className='assign-modal-root'>
                    <div className='assign-modal-header'>
                        <div className='assign-modal-title'>Resources</div>
                        <div className='assign-modal-cancel' onClick={() => setOpen(false)}>
                            <MdOutlineCancel className='assign-modal-cancel' />
                        </div>
                    </div>
                    <div className='assign-modal-body'>
                        <div className='assign-modal-input'>
                            <label className='assign-modal-input-label'>
                                Title
                            </label>
                            <input className='assign-modal-input-tag' type={'text'} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className='assign-modal-input'>
                            <label className='assign-modal-input-label'>
                                Description
                            </label>
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={3}
                                className='assign-modal-input-tag'
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className='assign-modal-input'>
                            {files.length === 0 ?
                                <>
                                    <div className='assign-add-file'>
                                        <form onSubmit={handleSubmit}>
                                            <input type="file" accept=".pdf,.ppt,.pptx,.doc,.docx,.jpg,.jpeg,.png" onChange={handleFileChange} style={{ display: 'none' }} multiple />
                                        </form>
                                        <Button sx={{ textTransform: 'none' }} variant='contained' className='assign-add-file-btn' onClick={handleButtonClick}>Add file</Button>
                                    </div>
                                </> : <div className='assign-modal-input'>
                                    <div className='assign-selected-files'>
                                        <ul>
                                            {selectedFileNames.map((fileName, index) => (
                                                <li key={index}>{fileName}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>}
                        </div>
                        <div className='assign-bottom-btn'>
                            <Button onClick={() => setOpen(false)} className='assign-main-btn' sx={{ textTransform: 'none' }} variant='outlined'>Cancel</Button>
                            <Button className='assign-main-btn' sx={{ textTransform: 'none' }} variant='contained' onClick={handleSubmit}>{isLoading ? 'Posting...' : 'Post'}</Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default CreateResourceModal