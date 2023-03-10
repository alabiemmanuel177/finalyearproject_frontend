import React from 'react'
import EmptyGroup from './EmptyGroup';
import "./css/group.css"

import { FaRegUserCircle } from "react-icons/fa";

const Groups = ({ groups, empty, course, clazz }) => {
  return (
    <div className='group'>
      {empty ? (
        <div>
          {groups.map((p) => (
            <Group group={p} key={p._id} />
          ))}
        </div>
      ) : (<EmptyGroup course={course} clazz={clazz} />)}
    </div>
  )
}

const Group = ({ group }) => {
  return (
    <div>
      <div className="groupTitle mgt20">
        <h3>{group.name}</h3>
        <hr className='blue' />
      </div>
      <div className="groupMembers">
        {group.students.map((p) => (
          <Members member={p} key={p._id} leader={group.leader} />
        ))}


      </div>
    </div>
  )
}

const Members = ({ member, leader }) => {
  return (
    <div className="peopleList flexrow jcsb ac">
      <div className='flexrow ac'>
        <FaRegUserCircle className='icon4' />
        <h3>{`${member.lastname} ${member.firstname} ${member.matricno}`}</h3>
      </div>
      {leader === member._id ? <><button disabled="disabled">Leader</button></> : <></>}

    </div>
  )
}

export default Groups