import { TextareaAutosize, Modal, Button, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import axios from 'axios';
import config from '../../../config';
import moment from 'moment';

function EditAssignmentModal({ open, setOpen, lecturer, assignment }) {
    const handleClose = () => setOpen(false)
    const [selectedCourse, setSelectedCourse] = useState(assignment?.courseId || "");

    const [title, setTitle] = useState(assignment?.title || "");
    const [description, setDescription] = useState(assignment?.description || "");
    const [grade, setGrade] = useState(assignment?.grade || "");
    const momentObj = moment(assignment?.dueDate);
    const Adate = momentObj?.format('YYYY-MM-DD') || ""; // get the date string in the format of "YYYY-MM-DD"
    const Atime = momentObj?.format('HH:mm') || "";
    const [date, setDate] = useState(Adate);
    const [time, setTime] = useState(Atime);

    const handleDropdownChange = (e) => {
        setSelectedCourse(e.target.value);
    };

    const [courses, setCourses] = useState([])
    useEffect(() => {
        const fetchCourses = async () => {
            const res = await axios.get(`${config.baseURL}/lecturer/${lecturer}/courses`);
            setCourses(res.data);
        };
        fetchCourses();
    }, [lecturer]);

    useEffect(() => {
        setSelectedCourse(assignment?.courseId || "");
        setTitle(assignment?.title || "");
        setDescription(assignment?.description || "");
        setGrade(assignment?.grade || "");
        const momentObj = moment(assignment?.dueDate);
        const Adate = momentObj?.format('YYYY-MM-DD') || "";
        const Atime = momentObj?.format('HH:mm') || "";
        setDate(Adate);
        setTime(Atime);
    }, [assignment]);



    const handleSubmit = async (e) => {
        e.preventDefault();
        const timeValue = time || "00:00";
        const combinedDateTime = new Date(`${date}T${timeValue}`);
        if (isNaN(combinedDateTime.getTime())) {
            console.error("Invalid date or time value");
            return;
        }
        const duedate = combinedDateTime.toISOString();
        try {
            const res = await axios.put(`${config.baseURL}/assignment/${assignment._id}`, {
                creatorId: lecturer,
                courseId: selectedCourse,
                title: title,
                description: description,
                grade: grade,
                dueDate: duedate,
            });
            res.data && window.location.reload();
        } catch (err) {
        }
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className='assign-modal-root'>
                    <div className='assign-modal-header'>
                        <div className='assign-modal-title'>Assignment</div>
                        <div className='assign-modal-cancel'>
                            <IconButton onClick={() => setOpen(false)}>
                                <GrClose className='assign-modal-cancel' />
                            </IconButton>
                        </div>
                    </div>
                    <div className='assign-modal-body'>
                        <div className='assign-modal-input'>
                            <label className='assign-modal-input-label'>
                                Course
                            </label>
                            <select className='assign-modal-input-tag' id="courses" value={selectedCourse} onChange={handleDropdownChange}>
                                <option value="">--Please select a course--</option>
                                {courses.map((course) => (
                                    <option key={course._id} value={course._id}>
                                        {course.courseabrev}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='assign-modal-input'>
                            <label className='assign-modal-input-label'>
                                Title
                            </label>
                            <input className='assign-modal-input-tag' value={title} type={'text'} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className='assign-modal-input'>
                            <label className='assign-modal-input-label'>
                                Date
                            </label>
                            <input className='assign-modal-input-tag' value={date} type={'date'} onChange={(e) => setDate(e.target.value)} />
                        </div>
                        <div className='assign-modal-input'>
                            <label className='assign-modal-input-label'>
                                Time
                            </label>
                            <input className='assign-modal-input-tag' value={time} type={'time'} onChange={(e) => setTime(e.target.value)} />
                        </div>
                        <div className='assign-modal-input'>
                            <label className='assign-modal-input-label'>
                                Marks
                            </label>
                            <input className='assign-modal-input-tag' type={'number'} defaultValue={grade} min={1} max={100} onChange={(e) => setGrade(e.target.value)} />
                            <span className='assign-input-description'>Select the amount you want to assign</span>
                        </div>
                        <div className='assign-modal-input'>
                            <label className='assign-modal-input-label'>
                                Description
                            </label>
                            <TextareaAutosize
                                value={description}
                                aria-label="minimum height"
                                minRows={3}
                                className='assign-modal-input-tag'
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className='assign-bottom-btn'>
                            <Button onClick={handleClose} className='assign-main-btn' sx={{ textTransform: 'none' }} variant='outlined'>Cancel</Button>
                            <Button className='assign-main-btn' sx={{ textTransform: 'none' }} variant='contained' onClick={handleSubmit}>Edit</Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default EditAssignmentModal