import React from "react";
import { AiFillVideoCamera } from "react-icons/ai";

export const Stream = () => {
  return (
    <div className="Stream">
      <div className="streamHead">
        <h2>COSC 302</h2>
        <h5>Data Structures and Algorithms</h5>
        <button className="onlineClass-btn">
          <AiFillVideoCamera className="video-icon" />
          Join Virtual Class
        </button>
      </div>
      <div className="streamBody">
        <div className="streamUpcoming">
            <h5>Upcoming</h5>
            <hr />
            <h6>A short report on computer and information threats</h6>
            <h6 className="blue">Due 1 August</h6>

        </div>
        <div className="streamPost">
            <div className="addPost"></div>
            <div className="text-post"></div>
            <div className="assignment-post"></div>
        </div>
      </div>
    </div>
  );
};
