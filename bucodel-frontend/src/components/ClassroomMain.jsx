import React from "react";
import "./css/classroomMain.css";
import { Actions } from "./actions";
import { Notice } from "./notice";

export const ClassroomMain = () => {
  return (
    <div className="ClassroomMain">
      <div className="main_searchbar ">
        <input type="search" placeholder="      Search for anything" />
      </div>
      <div className="classroom_maincard">
        <div className="cm_card">
          <div className="cm_card_svg">
            <img src="https://res.cloudinary.com/manlikeemma/image/upload/v1659024083/BUCODEL/Reading_Time_jllnrk.svg" alt="" />
          </div>
          <div className="cm_card_text">
            <h3>Hello,</h3>
            <h1>Preye Izu</h1>
            <buttton className="btn-viewsch">View Schedule</buttton>
          </div>
        </div>
      </div>
      <div className="classroomActions">
        <div className="assignment_Card">
          <div className="actionhead">
            <h3>Assignment</h3>
            <h5>See all</h5>
          </div>
          <Actions />
          <Actions />
          <Actions />
          <Actions />
          <Actions />
        </div>
        <div className="noticeBoard_card">
          <div className="actionhead">
            <h3>Notice Board</h3>
            <h5>See all</h5>
          </div>
          <Notice />
          <Notice />
        </div>
      </div>
    </div>
  );
};
