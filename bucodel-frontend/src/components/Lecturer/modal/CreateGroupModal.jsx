import { Modal, Button } from '@mui/material'
import React from 'react'
import './css/createassignmentmodal.css'
import { MdOutlineCancel } from 'react-icons/md';


function CreateGroupModal({ open, setOpen }) {
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
                            Group Size
                        </label>
                        <input className='assign-modal-input-tag' type={'number'} defaultValue={5} min={'2'} max={'20'} />
                    </div>
                    <div className='assign-modal-input'>
                        <label className='assign-modal-input-label'>
                            Group Number
                        </label>
                        <input className='assign-modal-input-tag' type={'number'} defaultValue={5} />
                    </div>
                    <div className='assign-modal-input'>
                        <label className='assign-modal-input-label'>
                            Group Number
                        </label>
                        <p>The system will create 4 groups with 5 students each, and any remaining students will be added to the last group(s) to create a minimum group size of 5</p>
                    </div>
                    <div className='assign-bottom-btn'>
                        <Button onClick={() => setOpen(false)} className='assign-main-btn' sx={{ textTransform: 'none' }} variant='outlined'>Cancel</Button>
                        <Button className='assign-main-btn' sx={{ textTransform: 'none' }} variant='contained'>Create</Button>
                    </div>
                </div>

            </div>
        </Modal>
    </div>
  )
}

export default CreateGroupModal