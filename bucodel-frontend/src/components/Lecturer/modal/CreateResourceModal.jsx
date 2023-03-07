import React from 'react'
import { Modal, Button } from '@mui/material'
import './css/createassignmentmodal.css'
import { MdOutlineCancel } from 'react-icons/md';

function CreateResourceModal({ open, setOpen }) {
  return (
    <div>
        <Modal
            open={open}
            onClose={() => setOpen(false)}
        >
            <div className='assign-modal-root'>
                <div className='assign-modal-header'>
                    <div className='assign-modal-title'>Assignment</div>
                    <div className='assign-modal-cancel'>
                        <MdOutlineCancel className='assign-modal-cancel'/>
                    </div>
                </div>
                <div className='assign-modal-body'>
                    <div className='assign-modal-input'>
                        <label className='assign-modal-input-label'>
                            Title
                        </label>
                        <input className='assign-modal-input-tag' type={'text'}/>
                    </div>
                    <div className='assign-modal-input'>
                        <label className='assign-modal-input-label'>
                            Description
                        </label>
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={3}
                            className='assign-modal-input-tag'
                        />
                    </div>
                    <div className='assign-modal-input'>
                        <div className='assign-add-file'>
                            <Button sx={{ textTransform: 'none' }} variant='contained' className='assign-add-file-btn'>Add file</Button>
                        </div>
                    </div>
                    <div className='assign-bottom-btn'>
                        <Button onClick={() => setOpen(false)} className='assign-main-btn' sx={{ textTransform: 'none' }} variant='outlined'>Cancel</Button>
                        <Button className='assign-main-btn' sx={{ textTransform: 'none' }} variant='contained'>Post</Button>
                    </div>
                </div>
            </div>
        </Modal>
    </div>
  )
}

export default CreateResourceModal