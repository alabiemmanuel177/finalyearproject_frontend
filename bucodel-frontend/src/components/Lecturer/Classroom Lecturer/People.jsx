import React from 'react'
import "./css/people.css"
import { FaRegUserCircle } from "react-icons/fa";

const People = () => {
  return (
    <div className="people">
      <div className="peopleTitle">
        <h3>Lecturer</h3>
        <hr className='blue' />
      </div>
      <div className="peopleLecturer">
        <div className="peopleList flexrow jcsb ac">
          <div className='flexrow ac'>
            <FaRegUserCircle className='icon4' />
            <h3>Dr. Adetofunmi Adetunji</h3>
          </div>
          <button>Lecturer</button>
        </div>
        <div className="peopleList flexrow jcsb ac">
          <div className='flexrow ac'>
            <FaRegUserCircle className='icon4' />
            <h3>Dr. Adetofunmi Adetunji</h3>
          </div>
          <button>Facilitator</button>
        </div>
      </div>
      <div className="peopleTitle">
        <h3>Student</h3>
        <hr className='blue' />
      </div>
      <div className="peopleLecturer">
        <div className="peopleList flexrow jcsb ac">
          <div className='flexrow ac'>
            <FaRegUserCircle className='icon4' />
            <h3>Dr. Adetofunmi Adetunji</h3>
          </div>
        </div>
        <div className="peopleList flexrow jcsb ac">
          <div className='flexrow ac'>
            <FaRegUserCircle className='icon4' />
            <h3>Dr. Adetofunmi Adetunji</h3>
          </div>
        </div>
        <div className="peopleList flexrow jcsb ac">
          <div className='flexrow ac'>
            <FaRegUserCircle className='icon4' />
            <h3>Dr. Adetofunmi Adetunji</h3>
          </div>
        </div>
        <div className="peopleList flexrow jcsb ac">
          <div className='flexrow ac'>
            <FaRegUserCircle className='icon4' />
            <h3>Dr. Adetofunmi Adetunji</h3>
          </div>
        </div>
        <div className="peopleList flexrow jcsb ac">
          <div className='flexrow ac'>
            <FaRegUserCircle className='icon4' />
            <h3>Dr. Adetofunmi Adetunji</h3>
          </div>
        </div>
        <div className="peopleList flexrow jcsb ac">
          <div className='flexrow ac'>
            <FaRegUserCircle className='icon4' />
            <h3>Dr. Adetofunmi Adetunji</h3>
          </div>
        </div>
      </div>


    </div>
  )
}

export default People