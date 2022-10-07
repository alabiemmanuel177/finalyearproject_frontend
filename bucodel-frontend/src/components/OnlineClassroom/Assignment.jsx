import React from "react";
import { MdOutlineAssignment } from "react-icons/md";

export const Assignment = () => {
  return (
    <div className="course_assignment">
      <div className="assignment-body">
        <div className="assignment_content">
          <div className="assignment_head">
            <div className="icon_ass">
              <MdOutlineAssignment />
            </div>
            <div className="ass_head_text">
              <h2>Assignment 2</h2>
              <h5>COCS 302: Data structures and Algorithm</h5>

              <h6>10 marks</h6>
              <h6>Due 1 August 2022, 11:59PM</h6>
            </div>
          </div>
          <hr className="hr"/>
          <div className="assignment_question">
            <h6>The Project is accompanied by its answers. Your Task will be to
            replicate exactly what is given. The Project is Additional Practice
            questions. The image is a guide as to wher to find your work. Good
            Luck.</h6>
          </div>
          <hr />
        </div>
        <div className="assignment_submit">
          <h3>Your Work</h3>
          <button className="btn-1">+ Add File</button>
          <button className="btn-2"> Mark as done</button>
        </div>
      </div>
    </div>
  );
};
