import React, { useState } from 'react'
import axios from 'axios';
import config from '../../../config';
import PasswordChange from '../modals/PasswordChange';

const Password = ({ admin }) => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confrirmNewPassword, setConfrirmNewPassword] = useState("");
    const id = admin._id;
    const [error, setError] = useState(null);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        if (newPassword !== confrirmNewPassword) {
            setError('Passwords do not match');
            console.log(error);
        }
        else {
            try {
                const res = await axios.post(`${config.baseURL}/admin/change-password`, {
                    id,
                    oldPassword,
                    newPassword
                });
                res.data && window.location.replace("/settings");
            } catch (err) {
                setError(err);
            }
        }
    };
    return (
        <div className="password ">
            <div className="passwordForm flexrow">
                <div className='passwordFormLabel'>
                    <h4 className="label">Current Password</h4>
                    <h4 className="label">New Password</h4>
                    <h4 className="label">Confirm New Password</h4>
                </div>
                <div className='passwordFormInput'>
                    <input type="password" className='passwordinput' onChange={(e) => setOldPassword(e.target.value)} />
                    <input type="password" className='passwordinput' onChange={(e) => setNewPassword(e.target.value)} />
                    <input type="password" className='passwordinput' onChange={(e) => setConfrirmNewPassword(e.target.value)} />
                    <div className="passwordControls">
                        <button className='passwordCancelButton'>Cancel</button>
                        <button className='passwordCancelUpdate' onClick={handleOpen}>Update</button>
                    </div>
                </div>

            </div>
            <PasswordChange open={open} setOpen={setOpen} handleSubmit={handleSubmit} error={error} />

        </div>
    )
}

export default Password