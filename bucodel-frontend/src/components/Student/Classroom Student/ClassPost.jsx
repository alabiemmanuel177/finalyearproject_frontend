import React, { useEffect, useState } from 'react'
import "../css/classpost.css"
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import axios from 'axios';
import config from '../../../config';
import moment from 'moment';

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

    const [notices, setNotices] = useState([]);
    useEffect(() => {
        const fetchNotices = async () => {
            const res = await axios.get(`${config.baseURL}/notice`);
            setNotices(res.data);
        };
        fetchNotices();
    });

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
                <div className="noticeContainer">
                    {notices.map((p) => (
                        <Notice notice={p} key={p._id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ClassPost

export const ExistingPost = ({ post }) => {
    const formattedDate = moment(post.content.createdAt).format("Do MMM, h:mm a");

    return (
        <div className="existingPost">
            <div className='postInfo'>
                <FaRegUserCircle className='icon4 mt15' />
                <div>
                    <h3>{post.author.name}</h3>
                    <h5>{formattedDate}</h5>
                </div>
            </div>
            <h4>{post.content.content}</h4>
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

const Notice = ({ notice }) => {
    // console.log(notice);
    const formattedDate = moment(notice.createdAt).format("Do MMM, h:mm a");
    return (
        <div className="dashboardNoticeContent">
            <div className="noticeHead flexrow">
                <div ><FaRegUserCircle className='icon13' /></div>
                <div className="NameandTime">
                    <h4>{notice.author.name}</h4>
                    <h5>{formattedDate}</h5>
                </div>
            </div>
            <div className="noticeContent">
                <h5>{notice.description}</h5>
            </div>
        </div>
    )
}