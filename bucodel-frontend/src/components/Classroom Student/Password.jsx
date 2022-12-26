import React from 'react'
import '../css/settings.css'


const Password = () => {
    return (
        <div className="password ">
            <div className="passwordForm flexrow">
                <div className='passwordFormLabel'>
                    <h4 className="label">Current Password</h4>
                    <h4 className="label">New Password</h4>
                    <h4 className="label">Confirm New Password</h4>
                </div>
                <div className='passwordFormInput'>
                    <input type="password" className='passwordinput' />
                    <input type="password" className='passwordinput' />
                    <input type="password" className='passwordinput' />
                    <div className="passwordControls">
                        <button className='passwordCancelButton'>Cancel</button>
                        <button className='passwordCancelUpdate'>Update</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Password