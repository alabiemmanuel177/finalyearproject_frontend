import React, { useEffect, useState } from 'react'
import "./css/people.css"
import { FaRegUserCircle } from "react-icons/fa";
import axios from 'axios';
import config from '../../../config';

const People = ({ course }) => {
  const [members, setMemebers] = useState();
  const [lecturers, setLecturers] = useState([]);
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const fetchMembers = async () => {
      const res = await axios.get(`${config.baseURL}/course/${course}/members`);
      setMemebers(res.data);
      setLecturers(res.data.lecturer)
      setStudents(res.data.students)
    };
    fetchMembers();
  });
  return (
    <div className="people">
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