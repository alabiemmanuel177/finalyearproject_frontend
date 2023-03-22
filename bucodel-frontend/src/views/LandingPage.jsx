import React from 'react'
import './css/landingpage.css'
import { NavLink } from 'react-router-dom';

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
                        <NavLink to='/login' style={{ textDecoration: 'none' }}>
                            <h3 className='mg64'>Student</h3>
                        </NavLink>
                        <NavLink to='/lecturerlogin' style={{ textDecoration: 'none' }}>
                            <h3 className='mg64'>Lecturer</h3>
                        </NavLink>
                    </div>
                    <div className="loginBtn1">
                        <NavLink to='/adminlogin' style={{ textDecoration: 'none' }}>
                            <button>Log In</button>
                        </NavLink>

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
            <div className="aboutUs vh100 flexrow">
                <div className="aboutUsImg">
                    <img src="https://res.cloudinary.com/manlikeemma/image/upload/v1673857785/BUCODEL/image_2_ww4wae.png" alt="" />
                </div>
                <div className="aboutUsText flexColumn">
                    <div className="auText">
                        <h2>About US</h2>
                        <h3>Babcock University Centre for Open Distance and e-Learning (BUCODeL) is poised to harness innovative approaches to provide the missing links in traditional methodologies of teaching and learning in contemporary times. The lacuna in face-to face teaching is undebatable, thus, the need to outstrip digitizing traditional materials is imperative. Accordingly, our robust learning experience integrates and embeds e-learning at the pedagogical, technological and organizational levels to deliver a world class education, that integrates faith and learning for post-secondary and lifelong learners with least disruption to their daily economic and workplace routine.</h3>
                    </div>
                    <div className="auStatement flexrow">
                        <div className="ourVision">
                            <h2>Our Vision</h2>
                            <h3>To be a first-class institution that builds servant-leaders for a better world through faith-based education driven by ICT.</h3>
                        </div>
                        <div className="ourMission">
                            <h2>Our Mission</h2>
                            <h3>To be a first-class institution that builds servant-leaders for a better world through faith-based education driven by ICT.</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Admissions vh70 flexrow">
                <div className="admisText">
                    <h2>Admissions</h2>
                    <h3>Candidates must have obtained five (5) credits at not more than two sittings in five subjects including English Language, Mathematics, Economics, and any other two subjects at SSCE, GCE and other recognized O’Level examinations of recognized bodies. A pass in Economics may be considered provided the candidate has a credit pass either in accounting or Commerce.

                        For Direct Entry into the 200 Level , in addition to the O’Level requirements above, candidates must possess passes in 3 WAEC/GCE/Cambridge Advanced Level (A ‘Level) Certificate with a Minimum of C, which must include Accounting, Mathematics and Economics. In addition, ATS 3/ATSWA 3/Fundamental Level of Professional Examination/ACCA passes in F1, F2, F3, F4/OND-Minimum of Upper Credit/HND-Minimum of Lower Credit may be admitted into 200L of our accounting programme.</h3>
                </div>
                <div className="admisImg">
                    <img src="https://res.cloudinary.com/manlikeemma/image/upload/v1673857786/BUCODEL/image_5_lyfqdz.png" alt="" />
                </div>

            </div>
            <div className="careerNextLevel vh30">
                <div className="admissionBtn flexColumn">
                    <h3>Ready To Take Your Life And Career To The Next Level?</h3>
                    <button>Apply now</button>
                </div>
            </div>
            <div className="footer vh60 flexColumn">
                <div className="footerContainer">
                    <div className="BULogo">
                        <div className="logoImg">
                            <img src="https://res.cloudinary.com/manlikeemma/image/upload/v1669629509/BUCODEL/Babcock_Logo_c46jjo.jpg" alt="Babcock Logo" />
                        </div>
                    </div>
                    <hr className='LPhr' />
                    <div className="footerFlex flexrow">
                        <div className='CopyRight'>
                            <h3>Copyright © 2020. Babcock University <br />
                                All rights reserved.</h3>
                        </div>
                        <div className='RMI flexColumn'>
                            <h3>Request More Information</h3>
                            <input type="text" placeholder='Full Name' />
                            <input type="text" placeholder='Desired Program' />
                            <input type="email" placeholder='Email' />
                            <button>Request</button>
                        </div>
                        <div className='quicklinks flexColumn'>
                            <h3>Quick Links</h3>
                            <h4>Home</h4>
                            <h4>Admissions</h4>
                            <h4>About Us</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage