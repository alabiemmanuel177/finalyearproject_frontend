import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";

export const Actions = () => {
  return (
    <div className="action">
      <div className="action_icon">
        <div>
          <Avatar sx={{ bgcolor: deepPurple[500] }} variant="circle">
            O
          </Avatar>
        </div>
        <div className="action_text">
          <h6>Operation Research</h6> <h6 className="grey">10 marks</h6>
        </div>
      </div>
      <div className="action_opt">
        <HiDotsVertical className="opt-icon" />
      </div>
    </div>
  );
};
