import React, { useEffect, useState } from 'react'
import axios from 'axios';
import config from '../../../config';
import PeopleProfilePicture from '../../ProfilePics/PeopleProfilePicture';

export function PeopleCard({ name, role, lecturer }) {
    let fileUrl;
    if (lecturer && lecturer.profilePic) {
        fileUrl = lecturer.profilePic.fileUrl;
    }
    return (
        <div className='peoplelistcard' style={{ padding: '0 5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '12px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', }}>
                <PeopleProfilePicture fileUrl={fileUrl} className='icon4 mt15' />
                <h6 style={{ margin: 0 }}>{name}</h6>
            </div>
            {
                role && (
                    <div style={{ width: '100px', backgroundColor: 'lightblue', padding: '8px 15px', display: 'grid', placeContent: 'center' }}>
                        <h6 style={{ margin: 0, color: '#0a3697', fontSize: '0.9rem' }}>{role}</h6>
                    </div>
                )
            }
        </div>
    );
}

export function PeopleCardS({ name, student, k, user, isStudent }) {

    let fileUrl;
    if (isStudent) {
        var role = "";
        if (k === student._id) {
            role = "You";
        }
    }
    if (user && user.profilePic) { // check if user.profilePic exists before accessing fileUrl
        fileUrl = user.profilePic.fileUrl;
    }
    return (
        <div className='peoplelistcard' style={{ padding: '0 5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '12px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', }}>
                <PeopleProfilePicture fileUrl={fileUrl} className='icon4 mt15' />
                <h6 style={{ margin: 0 }}>{name}</h6>
            </div>
            {
                role && (
                    <div style={{ width: '100px', backgroundColor: 'lightblue', padding: '8px 15px', display: 'grid', placeContent: 'center' }}>
                        <h6 style={{ margin: 0, color: '#0a3697', fontSize: '0.9rem' }}>{role}</h6>
                    </div>
                )
            }
        </div>
    )
}


export function PeopleCardG({ name, p, leader }) {

    var role = ""
    if (leader === p._id) {
        role = "Leader"
    }
    return (
        <div className='peoplelistcard' style={{ padding: '0 5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '12px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', }}>
                <div style={{ height: '30px', width: '30px', marginRight: '15px' }}>
                    <img style={{ height: '100%', width: '100%' }} src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="AVATAR" />
                </div>
                <h6 style={{ margin: 0 }}>{name}</h6>
            </div>
            {
                role && (
                    <div style={{ width: '100px', backgroundColor: 'lightblue', padding: '8px 15px', display: 'grid', placeContent: 'center' }}>
                        <h6 style={{ margin: 0, color: '#0a3697', fontSize: '0.9rem' }}>{role}</h6>
                    </div>
                )
            }
        </div>
    )
}

function People({ course, student }) {
    const [members, setMemebers] = useState();
    const [message, setMessage] = useState();
    const [lecturers, setLecturers] = useState([]);
    const [students, setStudents] = useState([]);
    useEffect(() => {
        const fetchMembers = async () => {
            const res = await axios.get(`${config.baseURL}/course/${course}/members`);
            if (res.data.message) {
                setMessage(res.data.message)
            }
            else {
                setMemebers(res.data);
                setLecturers(res.data.course.lecturer)
                setStudents(res.data.students)
            }
        };
        fetchMembers();
    });

    return (
        <div className='peoplecontainer' style={{ height: '100%', padding: '15px 20px' }}>
            <div className="peoplelecturercontainer" style={{ margin: ' 0 0 25px 0' }}>
                <div className='pcontainerhead' style={{ padding: '8px 0px', borderBottom: '2px solid #0a3697' }}>
                    <h5 style={{ fontWeight: 'bold' }}>Lecturer</h5>
                </div>
                <div className='pcontainerlist' style={{ paddingLeft: '0px' }}>
                    {lecturers.map((p) => (
                        <PeopleCard name={p.name} role={p.type} key={p._id} lecturer={p} />
                    ))}
                </div>
            </div>
            <div className="peoplestudentcontainer" style={{ padding: '8px 0px', }}>
                <div className='pcontainerhead' style={{ padding: '8px 0px', borderBottom: '2px solid #0a3697' }}>
                    <h5 style={{ fontWeight: 'bold' }}>Students</h5>
                </div>
                <div className='pcontainerlist' style={{ maxHeight: '400px', overflow: 'scroll' }}>
                    {students.map((p) => (
                        <PeopleCardS name={`${p.lastname} ${p.firstname} ${p.matricno}`} key={p._id} k={p._id} student={student} user={p} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default People