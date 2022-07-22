import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export const Notice = () => {
  return (
    <div className="notice">
      <div className="notice_icon">
        <Stack direction="row" spacing={2}>
          <Avatar alt="Lecturer" src="/static/images/avatar/1.jpg" />{" "}
        </Stack>
        <div className="lectr_notice"><h6>Dr. Adekola O</h6></div>
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
