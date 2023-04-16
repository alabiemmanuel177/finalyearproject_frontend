import { Send } from '@mui/icons-material';
import { OutlinedInput } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { PeopleCardG } from './People';
import { InputAdornment } from '@mui/material';
import EmptyGroup from './EmptyGroup';
import axios from 'axios';
import config from '../../../config';
import { GrDocumentPdf } from 'react-icons/gr';
import { FaFilePowerpoint, FaFileWord } from 'react-icons/fa';
import { AiFillFileUnknown } from 'react-icons/ai';
import CommentProfilePicture from '../../ProfilePics/CommentProfilePicture';
import moment from 'moment';
import { SkgroupCont } from '../../Skeleton Loader/dasboardMetrics';

function Groups({ group, empty, leader, student, isGroup }) {
    const [groupPost, setGroupPost] = useState([])
    const [isGroupPost, setIsGroupPost] = useState(true)
    useEffect(() => {
        const fetchGroup = async () => {
            if (group && group._id) { // Add this conditional check
                const res = await axios.get(`${config.baseURL}/grouppost/group/${group._id}`);
                setGroupPost(res.data);
                setIsGroupPost(false)
            }
        };
        fetchGroup();
    }, [group]); // Update the dependency array to include 'group'

    const shouldRenderSkeletons = isGroupPost || isGroup;


    return (
        <> {shouldRenderSkeletons ? <SkgroupCont /> : <>{empty ? (
            <div style={{ height: '', overflow: 'hidden auto', display: 'grid', gridTemplateColumns: '70% 30%', padding: '20px' }}>
                <div className="groupContainer">
                    <div style={{ marginRight: '10px', border: '1px solid lightgray', borderRadius: '10px' }}>
                        {groupPost.map((p) => (<GroupContent key={p._id} post={p} student={student} />))}

                    </div>
                </div>
                <div style={{ marginRight: '25px' }}>
                    <div style={{ borderBottom: '2px solid #0a3697' }}>
                        <h5>Group 1</h5>
                    </div>
                    <GroupMembers group={group} leader={leader} />
                </div>
            </div>
        ) : (<EmptyGroup />)} </>}
        </>
    )
}

export default Groups

export const GroupContent = ({ post, student }) => {
    const formattedDate = moment(post.createdAt).format("Do MMM, h:mm a");

    const lecturer = post.lecturer_id.name
    const content = post.content

    const [comments, setComments] = useState([])
    useEffect(() => {
        const fetchComments = async () => {
            const res = await axios.get(`${config.baseURL}/grouppost/${post._id}/comments`);
            setComments(res.data);
        };
        fetchComments();
    }, [post.content._id]);

    const [comment, setComment] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${config.baseURL}/groupcomment/`, {
                groupPost: post._id,
                comment,
                student_id: student._id,
            });
            res.data && window.location.reload();
        } catch (err) {
        }
    };

    return (
        <>
            <div style={{ borderBottom: '1px solid lightgray', }}>
                <div style={{ display: 'flex', alignItems: 'center', padding: '10px 10px 0px 10px' }}>
                    <div style={{ height: '30px', width: '30px', marginRight: '10px' }}>
                        <img style={{ height: '100%', width: '100%' }} src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="AVATAR" />
                    </div>
                    <div>
                        <h6 style={{ fontSize: '0.85rem', margin: 0, fontWeight: 'bold' }}>{lecturer}</h6>
                        <p style={{ fontSize: '0.75rem', margin: 0, }}>{formattedDate}</p>
                    </div>
                </div>
                <div style={{ padding: '10px 10px 0 10px' }}>
                    <p style={{ fontSize: '0.9rem' }}>{content}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', padding: '0px 10px 15px 10px', justifyContent: 'space-between' }}>
                    {post.files.map((p) => (
                        <File file={p} key={p._id} id={post._id} />
                    ))}
                </div>
            </div>
            <p style={{ margin: '0px 0 5px 10px', fontSize: '0.9rem', fontWeight: 'bold', color: 'gray' }}>Comments</p>

            {comments.map((p) => (
                <GroupComment comment={p} key={p.content._id} />
            ))}
            <div style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                <CommentProfilePicture className='icon4 mt15' />

                <OutlinedInput
                    sx={{ height: '35px', outline: 'none', width: '100%' }}
                    id="outlined-adornment-amount"
                    onChange={(e) => setComment(e.target.value)}
                    endAdornment={<InputAdornment onClick={handleSubmit} style={{ cursor: "pointer" }} position="start"><Send /></InputAdornment>}
                />
            </div>
        </>)
}

export const GroupMembers = ({ group, leader }) => {

    return (
        <div>
            {group.students.map((p) => (
                <PeopleCardG key={p._id} name={`${p.lastname} ${p.firstname} ${p.matricno}`} leader={leader} p={p} />
            ))}
        </div>
    )
}

export const File = ({ file }) => {

    const handleDownload = async () => {
        const fileUrl = file.fileUrl
        const fileName = file.fileName
        const res = await axios.get(fileUrl, {
            responseType: 'blob'
        });
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = url;
        const fileExt = fileUrl.substring(fileUrl.lastIndexOf('.') + 1);
        link.setAttribute('download', `${fileName}.${fileExt}`);
        document.body.appendChild(link);
        link.click();
    };

    const getFileIcon = (fileExt) => {
        switch (fileExt) {
            case "pdf":
                return <GrDocumentPdf className="icon4 mgr5 " />;
            case "doc":
            case "docx":
                return <FaFileWord className="icon4 mgr5 word" />;
            case "ppt":
            case "pptx":
                return <FaFilePowerpoint className="icon4 mgr5 ppt" />;
            default:
                return <AiFillFileUnknown className="icon4 mgr5 " />;
        }
    };
    return (
        <div style={{ width: '45%', height: '55px', border: '1px solid lightgray', display: 'flex', alignItems: 'center' }} onClick={handleDownload}>
            {file && <><div style={{ borderRight: '1px solid lightgray', height: '100%', width: '20%', marginRight: '10px', padding: '5px' }}>
                {getFileIcon(file.fileUrl.substring(file.fileUrl.lastIndexOf('.') + 1))}
            </div>
                <div style={{ padding: '5px' }}>
                    <h6 style={{ margin: 0, fontSize: '0.9rem' }}>{file.fileName}</h6>
                    <p style={{ margin: 0, fontSize: '0.9rem' }}>{file.fileUrl.substring(file.fileUrl.lastIndexOf('.') + 1)}</p>
                </div>
            </>}
        </div>


    )
}

export const GroupComment = ({ comment }) => {
    const { profilePic: { fileUrl } = {} } = comment.author;
    const formattedDate = moment(comment.content.createdAt).format("Do MMM, h:mm a");

    return (
        <div>
            <div style={{ padding: '10px 10px 0px 10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', }}>
                    <div style={{ marginRight: '10px' }}>
                        <CommentProfilePicture fileUrl={fileUrl} className='icon4 mgbm10' />
                    </div>
                    <div>
                        <h6 style={{ fontSize: '0.85rem', margin: 0, fontWeight: 'bold' }}>{comment.author.name}</h6>
                        <p style={{ fontSize: '0.75rem', margin: 0, }}>{formattedDate}</p>
                    </div>
                </div>
            </div>
            <div style={{ padding: '10px 10px 0px 10px', borderBottom: '1px solid lightgray' }}>
                <p style={{ fontSize: '0.9rem' }}>{comment.content.comment}</p>
            </div>

        </div>
    )
}