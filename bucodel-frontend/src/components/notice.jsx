import React from "react";
import Avatar from "@mui/material/Avatar";

export const Notice = () => {
  return (
    <div className="notice">
      <div className="notice_head">
        <div className="notice_icon">
          <Avatar
            alt="Lecturer"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 30, height: 30 }}
          />{" "}
        </div>{" "}
        <div className="lectr_notice">
          <h5>Dr. Adekola O</h5>
          <p>15 mins ago</p>
        </div>
      </div>

      <div className="notice_text">
        <h5>
          All registraions fot the semester ends on the 20th pf May 2022. Ensure
          to register before deadline day.
        </h5>
      </div>
    </div>
  );
};
