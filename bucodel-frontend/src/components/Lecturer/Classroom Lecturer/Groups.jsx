import React from 'react'
import EmptyGroup from './EmptyGroup';
import {
  useState,
  // useEffect
} from "react";
import "./css/group.css"

import { FaRegUserCircle } from "react-icons/fa";

const Groups = () => {
  const [empty] = useState(false);
  return (
    <div className='group'>
      {empty ? (<div>
        <div className="groupTitle mgt20">
          <h3>Group 1</h3>
          <hr className='blue' />
        </div>
        <div className="groupMembers">
          <div className="peopleList flexrow jcsb ac">
            <div className='flexrow ac'>
              <FaRegUserCircle className='icon4' />
              <h3>Dr. Adetofunmi Adetunji</h3>
            </div>
            <button>Leader</button>
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
        <div className="groupTitle mg20">
          <h3>Group 2</h3>
          <hr className='blue' />
        </div>
        <div className="groupMembers">
          <div className="peopleList flexrow jcsb ac">
            <div className='flexrow ac'>
              <FaRegUserCircle className='icon4' />
              <h3>Dr. Adetofunmi Adetunji</h3>
            </div>
            <button>Leader</button>
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
        <div className="groupTitle mg20">
          <h3>Group 3</h3>
          <hr className='blue' />
        </div>
        <div className="groupMembers">
          <div className="peopleList flexrow jcsb ac">
            <div className='flexrow ac'>
              <FaRegUserCircle className='icon4' />
              <h3>Dr. Adetofunmi Adetunji</h3>
            </div>
            <button>Leader</button>
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
        <div className="groupTitle mg20">
          <h3>Group 4</h3>
          <hr className='blue' />
        </div>
        <div className="groupMembers">
          <div className="peopleList flexrow jcsb ac">
            <div className='flexrow ac'>
              <FaRegUserCircle className='icon4' />
              <h3>Dr. Adetofunmi Adetunji</h3>
            </div>
            <button>Leader</button>
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
      ) : (<EmptyGroup />)}
    </div>
  )
}

export default Groups