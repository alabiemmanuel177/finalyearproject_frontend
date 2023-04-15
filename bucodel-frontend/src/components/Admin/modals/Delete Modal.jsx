import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TbAlertOctagon } from "react-icons/tb";
import axios from 'axios';
import config from '../../../config';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 353,
    height: 291,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    outline: 0
};
const DeleteModal = ({ open, setOpen, course }) => {

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.delete(`${config.baseURL}/course/${course._id}`, {
            });
            window.location.reload();
        } catch (err) {
        }
    };

    const handleClose = () => setOpen(false);
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="logoutModal">
                        <div className="modalIcon">
                            <TbAlertOctagon className='icon10' />
                        </div>
                        <div className="modalText">
                            <h4>Log Out</h4>
                            <h5>Are you sure you would like to delete {course.courseabrev} ?</h5>
                        </div>
                        <div className="modalButton">
                            <button className="logOutCancel" onClick={handleClose}>Cancel</button>
                            <button className="logOutOut" onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                </Box>
            </Modal></div>
    )
}

export default DeleteModal