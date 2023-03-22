import React from 'react'
import '../../Lecturer/modal/css/createassignmentmodal.css'
import { GrClose } from 'react-icons/gr';
import { Modal, Button, IconButton } from '@mui/material'
import Tiptap from './Tiptap';

function CreateAssignment({ open, setOpen, handleSubmit }) {
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className='assign-modal-root' style={{ width: '60%' }}>
                    <div className='assign-modal-header'>
                        <div className='assign-modal-title'>Create</div>
                        <div className='assign-modal-cancel'>
                            <IconButton onClick={() => setOpen(false)}>
                                <GrClose className='assign-modal-cancel' />
                            </IconButton>
                        </div>
                    </div>
                    <div className='assign-modal-body' style={{ padding: '20px', height: '100%' }}>
                        <Tiptap />
                        <div className='assign-bottom-btn'>
                            <Button onClick={handleClose} className='assign-main-btn' sx={{ textTransform: 'none' }} variant='outlined'>Cancel</Button>
                            <Button className='assign-main-btn' sx={{ textTransform: 'none' }} variant='contained' onClick={handleSubmit}>Submit</Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default CreateAssignment