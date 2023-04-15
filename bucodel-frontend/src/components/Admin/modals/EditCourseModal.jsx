import { TextareaAutosize, Modal, Button, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import axios from 'axios';
import config from '../../../config';

function CreateCourseModal({ open, setOpen, course }) {
    const handleClose = () => setOpen(false)
    const [selectedDepartment, setSelectedDepartment] = useState(course.department ? course.department._id : "");
    const [selectedLecturer, setSelectedLecturer] = useState(course.lecturer ? course.lecturer[0]._id : "");

    const handleDropdownChangeDept = (e) => {
        setSelectedDepartment(e.target.value);
    };
    const handleDropdownChangeLect = (e) => {
        setSelectedLecturer(e.target.value);
    };

    const [departments, setDepartments] = useState([])
    useEffect(() => {
        const fetchDepartments = async () => {
            const res = await axios.get(`${config.baseURL}/department`);
            setDepartments(res.data);
        };
        fetchDepartments();
    }, []);

    const [lecturers, setLecturers] = useState([])
    useEffect(() => {
        const fetchLecturers = async () => {
            const res = await axios.get(`${config.baseURL}/lecturer`);
            setLecturers(res.data);
        };
        fetchLecturers();
    }, []);

    const [title, setTitle] = useState(course.title)
    const [courseabrev, setCourseabrev] = useState(course.courseabrev)
    const [unit, setUnit] = useState(course.unit)
    const [department, setDepartment] = useState(course.department ? course.department._id : "")
    const [lecturer, setLecturer] = useState(course.lecturer ? course.lecturer._id : "")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`${config.baseURL}/course/${course._id}`, {
                title,
                courseabrev,
                unit,
                department: setSelectedDepartment,
                lecturer: setSelectedLecturer,
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
                                Department
                            </label>
                            <select className='assign-modal-input-tag' id="courses" onChange={handleDropdownChangeDept}>
                                {/* <option value="">--Please select a Department--</option> */}
                                {departments.map((item) => (
                                    <option key={item._id} value={item._id}>
                                        {item.name}
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
                                Abbrevation
                            </label>
                            <input className='assign-modal-input-tag' value={courseabrev} type={'text'} onChange={(e) => setCourseabrev(e.target.value)} />
                        </div>
                        <div className='assign-modal-input'>
                            <label className='assign-modal-input-label'>
                                Lecturer
                            </label>
                            <select className='assign-modal-input-tag' id="courses" value={selectedLecturer} onChange={handleDropdownChangeLect}>
                                {/* <option value="">--Please select a Department--</option> */}
                                {lecturers.map((item) => (
                                    <option key={item._id} value={item._id}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='assign-modal-input'>
                            <label className='assign-modal-input-label'>
                                Unit(s)
                            </label>
                            <input className='assign-modal-input-tag' value={unit} type={'number'} min={1} max={6} onChange={(e) => setUnit(e.target.value)} />
                            <span className='assign-input-courseabrev'>Course Units</span>
                        </div>
                        <div className='assign-bottom-btn'>
                            <Button onClick={handleClose} className='assign-main-btn' sx={{ textTransform: 'none' }} variant='outlined'>Cancel</Button>
                            <Button className='assign-main-btn' sx={{ textTransform: 'none' }} variant='contained' onClick={handleSubmit}>Post</Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default CreateCourseModal