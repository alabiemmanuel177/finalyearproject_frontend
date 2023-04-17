import { TextareaAutosize, Modal, Button, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react';
import './css/createassignmentmodal.css'
import { GrClose } from 'react-icons/gr';
import axios from 'axios';
import config from '../../../config';

function CreateAssignmentModal({ open, setOpen, lecturer }) {
    const handleClose = () => setOpen(false)
    const [selectedCourse, setSelectedCourse] = useState("");

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

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [grade, setGrade] = useState()
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [isLoading, setIsLoading] = useState(false); // Add isLoading state
    const handleSubmit = async (e) => {
        setIsLoading(true); // Set isLoading to true when submitting
        e.preventDefault();
        const timeValue = time || "00:00";
        const combinedDateTime = new Date(`${date}T${timeValue}`);
        if (isNaN(combinedDateTime.getTime())) {
            console.error("Invalid date or time value");
            return;
        }
        const duedate = combinedDateTime.toISOString();
        try {
            const res = await axios.post(`${config.baseURL}/assignment`, {
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
                            <input className='assign-modal-input-tag' type={'text'} onChange={(e) => setTitle(e.target.value)} />
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
                            <input className='assign-modal-input-tag' type={'number'} defaultValue={50} min={1} max={100} onChange={(e) => setGrade(e.target.value)} />
                            <span className='assign-input-description'>Select the amount you want to assign</span>
                        </div>
                        <div className='assign-modal-input'>
                            <label className='assign-modal-input-label'>
                                Description
                            </label>
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={3}
                                className='assign-modal-input-tag'
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className='assign-bottom-btn'>
                            <Button onClick={handleClose} className='assign-main-btn' sx={{ textTransform: 'none' }} variant='outlined'>Cancel</Button>
                            <Button className='assign-main-btn' sx={{ textTransform: 'none' }} disabled={isLoading} variant='contained' onClick={handleSubmit}>{isLoading ? 'Posting...' : 'Post'}</Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default CreateAssignmentModal