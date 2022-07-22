import React from "react";
import { ClassroomUtil } from "../components/ClassroomUtil";
import { ClassroomMain } from "../components/ClassroomMain";

export const Dashboard = () => {
  return (
    <>
      <div className="classroom_main_container">
        <ClassroomMain />
      </div>
      <div className="classroom_util_container">
        <ClassroomUtil />
      </div>
    </>
  );
};
