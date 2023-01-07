import React from 'react'
import './css/landingpage.css'

const LandingPage = () => {
    return (
        <div className='landingPage'>
            <div className='vh100'>
                <div className="navbar flexrow">
                    <div className="BULogo flexrow">
                        <div className="logoImg">
                            <img src="https://res.cloudinary.com/manlikeemma/image/upload/v1669629509/BUCODEL/Babcock_Logo_c46jjo.jpg" alt="Babcock Logo" />
                        </div>
                        <div className="logoText">
                            <h3>BUCODeL</h3>
                        </div>
                    </div>
                    <div className="userOptions flexRow">
                        <h3 className='mg64'>Student</h3>
                        <h3 className='mg64'>Lecturer</h3>
                        <h3>Admin</h3>
                    </div>
                    <div className="loginBtn1">
                        <button>Log In</button>
                    </div>

                </div>
                <hr className='LPhr' />
                <div className="applyBody flexrow">
                    <div className="applyText">
                        <h2>Welcome To Babcock University Centre for Open Distance and e-Learning (BUCODeL)</h2>
                        <h3>Start your application into Babcock University, Centre for Open Distance and e-Learning here. We are available to answer all your questions and support you.</h3>
                        <div className="meter flexrow">
                            <div className='coursesMeter'>
                                <h2>10</h2>
                                <h4>Courses</h4>
                            </div>
                            <div>
                                <h2>10,000+</h2>
                                <h4>Targeted Students</h4>
                            </div>
                        </div>
                    </div>
                    <div className="applyForm flexColumn">
                        <h2>Apply now</h2>
                        <h3>Go through a simple registration to save everything important and not lose anything.</h3>
                        <div className="applicantsForm flexrow">
                            <div className='flexColumn mg30'>
                                <label>First Name</label>
                                <input type="text" />
                                <label>Last Name</label>
                                <input type="text" />
                                <label>Password</label>
                                <input type="password" />
                            </div>
                            <div className='flexColumn'>
                                <label>Middle Name</label>
                                <input type="text" />
                                <label>Email Address</label>
                                <input type="email" />
                                <label>Confirm Password</label>
                                <input type="password" />
                            </div>
                        </div>
                        <button>Create Login Details</button>
                        <h3>By clicking on the "Create log in detail" you are<br /> agreeing to our terms and conditions</h3>
                    </div>
                </div>
            </div>
            <div className="aboutUs vh100">
                
            </div>
            <div className="Admissions vh100"></div>
            <div className="careerNextLevel vh40"></div>
            <div className="footer vh60"></div>
        </div>
    )
}

export default LandingPage