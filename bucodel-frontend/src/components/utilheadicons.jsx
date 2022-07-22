import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import Avatar from "@mui/material/Avatar";

export const Utilheadicons = () => {
  return (
    <>
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
    </>
  );
};
