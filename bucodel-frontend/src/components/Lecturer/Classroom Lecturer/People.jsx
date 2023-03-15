import React, { useEffect, useState } from 'react'
import "./css/people.css"
import { FaRegUserCircle } from "react-icons/fa";
import axios from 'axios';
import config from '../../../config';
import EmptyPeople from './Empty People';

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
      console.log(members, message);
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
          {lecturers.map((p) => (
            <Lecturer lecturer={p} key={p._id} />
          ))}

        </div>
        <div className="peopleTitle">
          <h3>Student</h3>
          <hr className='blue' />
        </div>
        <div className="peopleLecturer">
          {students.map((p) => (
            <Student student={p} key={p._id} />
          ))}

        </div>
      </> : (<EmptyPeople />)}
    </div>
  )
}
const Lecturer = ({ lecturer }) => {
  return (
    <div className="peopleList flexrow jcsb ac">
      <div className='flexrow ac'>
        <FaRegUserCircle className='icon4' />
        <h3>{lecturer.name}</h3>
      </div>
      <button disabled>{lecturer.type}</button>
    </div>
  )
}

const Student = ({ student }) => {
  return (
    <div className="peopleList flexrow jcsb ac">
      <div className='flexrow ac'>
        <FaRegUserCircle className='icon4' />
        <h3>{`${student.lastname} ${student.firstname} ${student.matricno}`}</h3>
      </div>
    </div>
  )
}
export default People