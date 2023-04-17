import React from 'react'
import EmptyGroup from './EmptyGroup';
import "./css/group.css"
import CommentProfilePicture from '../../ProfilePics/CommentProfilePicture';
import LecturerGroup from './LecturerGroup';

const Groups = ({ groups, empty, course, clazz, lecturer, isGroup }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [activeGroup, setActiveGroup] = React.useState();
  const [activeLeader, setActiveLeader] = React.useState();

  return (
    <div className='group'>
      {empty ? (
        <div>
          {!open ? <>{
            groups.map((p) => (
              <Group group={p} key={p._id} handleOpen={handleOpen} setActiveGroup={setActiveGroup} setActiveLeader={setActiveLeader} />
            ))
          }
          </> : (<LecturerGroup activeGroup={activeGroup} leader={activeLeader} lecturer={lecturer} course={course} isGroup={isGroup} />)}
        </div>
      ) : (<EmptyGroup course={course} clazz={clazz} />)}
    </div>
  )
}

const Group = ({ group, handleOpen, setActiveGroup, setActiveLeader }) => {
  return (
    <div style={{ marginBottom: '35px', }}>
      <div className="groupTitle mgt20">
        <div className="virtualClassButton">
          <button onClick={() => { handleOpen(); setActiveGroup(group); setActiveLeader(group.leader); }}>{group.name}</button>
        </div>
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
        <CommentProfilePicture className='icon4 mt15' />
        <h3>{`${member.lastname} ${member.firstname} ${member.matricno}`}</h3>
      </div>
      {leader === member._id ? <><button disabled="disabled">Leader</button></> : <></>}

    </div>
  )
}

export default Groups