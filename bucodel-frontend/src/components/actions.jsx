import React from "react";
import { IoIosOptions } from "react-icons/io";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, green } from "@mui/material/colors";

export const Actions = () => {
  return (
    <div className="action">
      <div className="action_icon">
        <div>
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
              O
            </Avatar>
          </Stack>
        </div>
        <div className="action_text">
          <h4>Operation research</h4>
        </div>
      </div>
      <div className="action_opt">
        <IoIosOptions className="opt-icon" />
      </div>
    </div>
  );
};
