import React from "react";
import { Classroom_sidebar } from "../components/Classroom_sidebar";
import "./css/Classroom.css"

export const Classroom = () => {
  return (
    <div>
      <div className="classroom_sidebar">
        <Classroom_sidebar />
      </div>
      <div className="classroom_main">

      </div>
      <div className="classroom_util">

      </div>
    </div>
  );
};
