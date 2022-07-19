import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import Avatar from "@mui/material/Avatar";
import "./css/classroomUtil.css";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


export const ClassroomUtil = () => {
  const [value, onChange] = React.useState(new Date());
  return (
    <div className="ClassroomUtil">
      <div className="utilheadicons">
        <AiOutlineMail className="mailicon" />
        <BsBell className="mailicon" />
        <Avatar
          className="studentProfile"
          alt="Cindy Baker"
          src="/static/images/avatar/3.jpg"
        />
        <h3 className="blue">Preye Izu</h3>
      </div>
      <div className="utilbody">
        <div className="classroomCal">
          <Calendar className="Calendar" onChange={onChange} value={value} />
        </div>
        <div className="classroomTask">
          <h3 className="blue">Tasks</h3>
        </div>
      </div>
    </div>
  );
};
