import { Modal, Button } from '@mui/material'
import React, { useState } from 'react'
import './css/createassignmentmodal.css'
import { MdOutlineCancel } from 'react-icons/md';
import axios from 'axios';
import config from '../../../config';


function CreateGroupModal({ open, setOpen, course, clazz }) {
    const [groupCapacity, setGroupCapacity] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${config.baseURL}/group/${course}/${clazz}/${groupCapacity}`, {
            });
            res.data && window.location.reload();
        } catch (err) {
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
                        <div className='assign-modal-title'>Assignment</div>
                        <div className='assign-modal-cancel'>
                            <MdOutlineCancel className='assign-modal-cancel' />
                        </div>
                    </div>
                    <div className='assign-modal-body'>
                        <div className='assign-modal-input'>
                            <label className='assign-modal-input-label'>
                                Group Size
                            </label>
                            <input className='assign-modal-input-tag' type={'number'} defaultValue={5} min={'2'} max={'20'}
                                onChange={(e) => setGroupCapacity(e.target.value)} />
                        </div>
                        <div className='assign-modal-input'>
                            <label className='assign-modal-input-label'>
                                Group Number
                            </label>
                            <input className='assign-modal-input-tag' type={'number'} defaultValue={4} min={'2'} max={'20'} />
                        </div>
                        <div className='assign-modal-input' style={{ marginBottom: '40px' }}>
                            <label className='assign-modal-input-label'>
                                Leftover Students
                            </label>
                            <p style={{fontSize: '0.8rem', color: 'grey'}}>{`The system will create groups with ${groupCapacity} students each, and any remaining students will be added to the last group(s) to complete the group`}</p>
                        </div>
                        <div className='assign-bottom-btn'>
                            <Button onClick={() => setOpen(false)} className='assign-main-btn' sx={{ textTransform: 'none' }} variant='outlined'>Cancel</Button>
                            <Button className='assign-main-btn' sx={{ textTransform: 'none' }} variant='contained' onClick={handleSubmit}>Create</Button>
                        </div>
                    </div>

                </div>
            </Modal>
        </div>
    )
}

export default CreateGroupModal