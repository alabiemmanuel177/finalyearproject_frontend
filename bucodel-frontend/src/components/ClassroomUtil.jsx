import React from "react";
import "./css/classroomUtil.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Utilheadicons } from "./utilheadicons";

export const ClassroomUtil = () => {
  const [value, onChange] = React.useState(new Date());
  return (
    <div className="ClassroomUtil">
      <Utilheadicons />
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
