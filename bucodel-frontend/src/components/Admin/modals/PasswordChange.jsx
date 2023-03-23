import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TbAlertOctagon } from "react-icons/tb";

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

const PasswordChange = ({ open, setOpen, handleSubmit, error }) => {
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
                    <div className="passwordChangeModal flexColumn">
                        <div className="moadlIcon flexRow">
                            <TbAlertOctagon className='icon10' />

                        </div>
                        <div className="modalText">
                            <h3>Password Change</h3>
                            <h4>We're about to change your password. Please confirm this action before we proceed.</h4>
                        </div>
                        <div className="modalButton flexrow">
                            <button className='cancelBTN' onClick={handleClose}>Cancel</button>
                            <button className='changePasswordBTN' onClick={handleSubmit}>ChangePassword</button>
                            {error && <p className="error">{error}</p>}
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default PasswordChange