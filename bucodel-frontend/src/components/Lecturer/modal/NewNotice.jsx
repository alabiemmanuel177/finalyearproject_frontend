import { TextareaAutosize, Modal, Button, IconButton } from '@mui/material'
import React from 'react';
import './css/createassignmentmodal.css'
import { GrClose } from 'react-icons/gr';

function NewNotice({ open, setOpen }) {
    const handleClose = () => setOpen(false);

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
                        />
                    </div>
                    <div className='assign-bottom-btn'>
                        <Button onClick={handleClose} className='assign-main-btn' sx={{ textTransform: 'none' }} variant='outlined'>Cancel</Button>
                        <Button className='assign-main-btn' sx={{ textTransform: 'none' }} variant='contained'>Add +</Button>
                    </div>
                </div>
            </div>
        </Modal>
    </div>
  )
}

export default NewNotice