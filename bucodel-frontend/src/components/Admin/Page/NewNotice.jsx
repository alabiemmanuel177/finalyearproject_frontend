import { TextareaAutosize, Modal, Button, IconButton } from '@mui/material'
import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import config from '../../../config';
import axios from 'axios';

function NewNotice({ open, setOpen, author }) {
    const handleClose = () => setOpen(false);
    const [description, setDescription] = useState()
    const [setError] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${config.baseURL}/notice`,
                {
                    description: description,
                    authorType: "Admin",
                    author
                }
            );
            window.location.reload()
            console.log(response);
        } catch (err) {
            console.log(err);
            alert("Failed to add notice");
            setError(err.response.data.message);
        }
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className='assign-modal-root'>
                    <div className='assign-modal-header'>
                        <div className='assign-modal-title'>New Notice</div>
                        <div className='assign-modal-cancel'>
                            <IconButton onClick={() => setOpen(false)}>
                                <GrClose className='assign-modal-cancel' />
                            </IconButton>
                        </div>
                    </div>
                    <div className='assign-modal-body'>
                        <div className='assign-modal-input'>
                            <label className='assign-modal-input-label'>
                                Notice
                            </label>
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={5}
                                placeholder={'Your mid semester test would be on 1 August by 11am at WRA come with all necessary tool. Assignments would also be submitted. Goodluck!'}
                                className='assign-modal-input-tag'
                                onChange={(e) => setDescription(e.target.value)}

                            />
                        </div>
                        <div className='assign-bottom-btn'>
                            <Button onClick={handleClose} className='assign-main-btn' sx={{ textTransform: 'none' }} variant='outlined'>Cancel</Button>
                            <Button className='assign-main-btn' sx={{ textTransform: 'none' }} variant='contained' onClick={handleSubmit}>Add +</Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default NewNotice