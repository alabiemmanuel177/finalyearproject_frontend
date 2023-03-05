import React, { useState } from 'react'
import "../css/classpost.css"
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import axios from 'axios';
import config from '../../../config';

const ClassPost = ({ posts, course, student }) => {
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${config.baseURL}/classpost/`, {
                content,
                course: course,
                student_id: student._id,
            });
            res.data && window.location.reload();
        } catch (err) {
        }
    };

    return (
        <div className="classpost">
            <div className="post" >
                <div className="newPost">
                    <FaRegUserCircle className='icon1' />
                    <input
                        placeholder='Post a message to your class'
                        onChange={(e) => setContent(e.target.value)}>
                    </input>
                    <button onClick={handleSubmit}>Post</button>
                </div>
                <div className="postContainer">
                    {posts.map((p) => (
                        <ExistingPost post={p} key={p._id} />
                    ))}
                </div>
            </div>
            <div className="noticeboard">
                <h3>Noticeboard</h3>
                <hr />
                <div className='noticeList'>
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
                </div>
                <hr />

            </div>
        </div>
    )
}

export default ClassPost

export const ExistingPost = ({ post }) => {
    return (
        <div className="existingPost">
            <div className='postInfo'>
                <FaRegUserCircle className='icon4 mt15' />
                <div>
                    <h3>{post.author.name}</h3>
                    <h5>Dec 5 8:00pm</h5>
                </div>
            </div>
            <h4>{post.content}</h4>
            <hr />
            <div className="newComment">
                <FaRegUserCircle className='icon4' />
                <input
                    placeholder='Add Comment '>
                </input>
                <IoMdSend className='icon4' type='submit' />
            </div>
        </div>
    )
}