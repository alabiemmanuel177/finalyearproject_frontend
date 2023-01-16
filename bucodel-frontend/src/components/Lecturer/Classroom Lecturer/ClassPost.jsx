import React from 'react'
import "../css/classpost.css"
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

const ClassPost = () => {
    return (
        <div className="classpost">
            <div className="post">
                <div className="newPost">
                    <FaRegUserCircle className='icon1' />
                    <input
                        placeholder='Post a message to your class'>
                    </input>
                    <button>Post</button>
                </div>
                <div className="existingPost">
                    <div className='postInfo'>
                        <FaRegUserCircle className='icon4 mt15' />
                        <div>
                            <h3>Dr. Adetofunmi Adetunji</h3>
                            <h5>Dec 5 8:00pm</h5>
                        </div>
                    </div>
                    <h4>Your mid semester test would be on 1 August by 11am at WRA come with all necessary tools. Assignments would also be submitted. Goodluck!</h4>
                    <hr />
                    <div className="newComment">
                        <FaRegUserCircle className='icon4' />
                        <input
                            placeholder='Add Comment '>
                        </input>
                        <IoMdSend className='icon4' type='submit' />
                    </div>
                </div>
                <div className="existingPost">
                    <div className='postInfo'>
                        <FaRegUserCircle className='icon4 mt15' />
                        <div>
                            <h3>Dr. Adetofunmi Adetunji</h3>
                            <h5>Dec 5 8:00pm</h5>
                        </div>
                    </div>
                    <h4>Your mid semester test would be on 1 August by 11am at WRA come with all necessary tools. Assignments would also be submitted. Goodluck!</h4>
                    <hr />
                    <div className="newComment">
                        <FaRegUserCircle className='icon4' />
                        <input
                            placeholder='Add Comment'>
                        </input>
                        <IoMdSend className='icon4' type='submit' />
                    </div>
                </div>
            </div>
            <div className="noticeboard">
                <h3>Noticeboard</h3>
                <hr />
                <div className="notice">
                    <div className='noticeInfo'>
                        <FaRegUserCircle className='icon5 mt15' />
                        <div>
                            <h3>Dr. Adetofunmi Adetunji</h3>
                        </div>
                    </div>
                    <h4>New Assignment Posted: Assignment 1</h4>
                    <h5>Dec 5 8:00pm</h5>
                </div>
                <hr />
                <div className="notice">
                    <div className='noticeInfo'>
                        <FaRegUserCircle className='icon5 mt15' />
                        <div>
                            <h3>Dr. Adetofunmi Adetunji</h3>
                        </div>
                    </div>
                    <h4>New Assignment Posted: Assignment 1</h4>
                    <h5>Dec 5 8:00pm</h5>
                </div>
                <hr />
                <div className="notice">
                    <div className='noticeInfo'>
                        <FaRegUserCircle className='icon5 mt15' />
                        <div>
                            <h3>Dr. Adetofunmi Adetunji</h3>
                        </div>
                    </div>
                    <h4>New Assignment Posted: Assignment 1</h4>
                    <h5>Dec 5 8:00pm</h5>
                </div>
                <hr />

            </div>
        </div>
    )
}

export default ClassPost