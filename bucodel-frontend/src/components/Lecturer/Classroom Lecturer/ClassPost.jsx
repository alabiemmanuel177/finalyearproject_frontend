import React, { useEffect, useState } from 'react'
import "./css/classpost.css"
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import axios from 'axios';
import config from '../../../config';
import moment from 'moment';
import io from "socket.io-client";
import PostProfilePicture from '../../ProfilePics/PostProfilePicture';
import CommentProfilePicture from '../../ProfilePics/CommentProfilePicture';
const socket = io(`${config.baseURL}`);

socket.on('NEW_COMMENT', (message) => {
    console.log(message)
    window.location.reload();
});
socket.on('COMMENT_UPDATED', (message) => {
    console.log(message)
    window.location.reload();
});
socket.on('COMMENT_DELETED', (message) => {
    console.log(message)
    window.location.reload();
});
socket.on('NEW_CLASSPOST_POSTED', (message) => {
    console.log(message)
    window.location.reload();
});
socket.on('CLASSPOST_UPDATED', (message) => {
    console.log(message)
    window.location.reload();
});
socket.on('CLASSPOST_DELETED', (message) => {
    console.log(message)
    window.location.reload();
});

const ClassPost = ({ posts, course, lecturer }) => {
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${config.baseURL}/classpost/`, {
                content,
                course: course,
                lecturer_id: lecturer._id,
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
            <div className="post">
                <div className="newPost">
                    <PostProfilePicture lecturer={lecturer} className='mgb10' />
                    <input
                        placeholder='Post a message to your class'
                        onChange={(e) => setContent(e.target.value)}>
                    </input>
                    <button onClick={handleSubmit}>Post</button>
                </div>
                <div className="postContainer">
                    {posts.map((p) => (
                        <ExistingPost post={p} key={p.content._id} lecturer={lecturer} />
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

export const ExistingPost = ({ post, lecturer }) => {
    const formattedDate = moment(post.content.createdAt).format("Do MMM, h:mm a");

    const [comments, setComments] = useState([])
    useEffect(() => {
        const fetchComments = async () => {
            const res = await axios.get(`${config.baseURL}/classpost/${post.content._id}/comments`);
            setComments(res.data);
        };
        fetchComments();
    }, [post.content._id]);

    const [comment, setComment] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${config.baseURL}/classcomment/`, {
                classPost: post.content._id,
                comment,
                lecturer_id: lecturer._id,
            });
            res.data && window.location.reload();
        } catch (err) {
        }
    };
    const { profilePic: { fileUrl } = {} } = post.author;

    return (
        <div className="existingPost">
            <div className='postInfo'>
                <PostProfilePicture fileUrl={fileUrl} className='icon4 mt15' />
                <div>
                    <h3>{post.author.name}</h3>
                    <h5>{formattedDate}</h5>
                </div>
            </div>
            <h4>{post.content.content}</h4>
            <hr />
            {comments.map((p) => (
                <ExistingComment comment={p} key={p.content._id} />
            ))}
            <div className="newComment">
                <input
                    className='mgl10'
                    placeholder='Add Comment '
                    onChange={(e) => setComment(e.target.value)}>
                </input>
                <IoMdSend className='icon4' onClick={handleSubmit} />
            </div>
        </div>
    )
}

export const ExistingComment = ({ comment }) => {
    const { profilePic: { fileUrl } = {} } = comment.author;

    const formattedDate = moment(comment.content.createdAt).format("Do MMM, h:mm a");
    return (
        <div className="existingComment">
            <div className='postInfo'>
                <CommentProfilePicture fileUrl={fileUrl} className='icon4 mt15' />
                <div>
                    <h3>{comment.author.name}</h3>
                    <h5>{formattedDate}</h5>
                </div>
            </div>
            <h4>{comment.content.comment}</h4>
            <hr />
        </div>
    )
}

const Notice = ({ notice }) => {
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

export default ClassPost