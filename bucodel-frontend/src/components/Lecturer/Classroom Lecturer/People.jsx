import React, { useEffect, useState } from 'react'
import "./css/people.css"
import axios from 'axios';
import config from '../../../config';
import EmptyPeople from './Empty People';
import { PeopleCard, PeopleCardS } from '../../Student/Classroom Student/People';

const People = ({ course }) => {
  const [members, setMemebers] = useState();
  const [message, setMessage] = useState();
  const [lecturers, setLecturers] = useState([]);
  const [students, setStudents] = useState([]);
  const [empty, setEmpty] = useState(false);
  useEffect(() => {
    const fetchMembers = async () => {
      const res = await axios.get(`${config.baseURL}/course/${course}/members`);
      if (res.data.message) {
        setMessage(res.data.message)
        setEmpty(true)
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
    <div className="people">
      {!empty ? <>
        <div className="peopleTitle">
          <h3>Lecturer</h3>
          <hr className='blue' />
        </div>
        <div className="peopleLecturer">
          {lecturers?.map((p) => (
            <PeopleCard name={p.name} role={p.type} key={p._id} lecturer={p} />
          ))}

        </div>
        <div className="peopleTitle">
          <h3>Student</h3>
          <hr className='blue' />
        </div>
        <div className="peopleLecturer">
          {students?.map((p) => (
            <PeopleCardS name={`${p.lastname} ${p.firstname} ${p.matricno}`} key={p._id} student={p} k={p._id} user={p} isStudent={false} />
          ))}

        </div>
      </> : (<EmptyPeople />)}
    </div>
  )
}

export default People