import React from "react";
import "../OnlineClassroom/css/Classes.css";

export const Classes = ({ active, setActive }) => {
  return (
    <>
      <div className="classContainer">
        <div class="coursecards" onClick={() => setActive("OnlineClass")}>
          <div className="coursehead">
            <h3>COSC 302</h3>
            <h6>Data Structures And Algorithms</h6>
          </div>
          <div className="coursedets">
            <h6>Dr. Seun Ebesuwa</h6>
            <p>3 Credit Hours</p>
          </div>
        </div>

        <div class="coursecards" onClick={() => setActive("OnlineClass")}>
          <div className="coursehead">
            <h3>COSC 302</h3>
            <h6>Data Structures And Algorithms</h6>
          </div>
          <div className="coursedets">
            <h6>Dr. Seun Ebesuwa</h6>
            <p>3 Credit Hours</p>
          </div>
        </div>

        <div class="coursecards" onClick={() => setActive("OnlineClass")}>
          <div className="coursehead">
            <h3>COSC 302</h3>
            <h6>Data Structures And Algorithms</h6>
          </div>
          <div className="coursedets">
            <h6>Dr. Seun Ebesuwa</h6>
            <p>3 Credit Hours</p>
          </div>
        </div>

        <div class="coursecards" onClick={() => setActive("OnlineClass")}>
          <div className="coursehead">
            <h3>COSC 302</h3>
            <h6>Data Structures And Algorithms</h6>
          </div>
          <div className="coursedets">
            <h6>Dr. Seun Ebesuwa</h6>
            <p>3 Credit Hours</p>
          </div>
        </div>

        <div class="coursecards" onClick={() => setActive("OnlineClass")}>
          <div className="coursehead">
            <h3>COSC 302</h3>
            <h6>Data Structures And Algorithms</h6>
          </div>
          <div className="coursedets">
            <h6>Dr. Seun Ebesuwa</h6>
            <p>3 Credit Hours</p>
          </div>
        </div>

        <div class="coursecards" onClick={() => setActive("OnlineClass")}>
          <div className="coursehead">
            <h3>COSC 302</h3>
            <h6>Data Structures And Algorithms</h6>
          </div>
          <div className="coursedets">
            <h6>Dr. Seun Ebesuwa</h6>
            <p>3 Credit Hours</p>
          </div>
        </div>

        <div class="coursecards" onClick={() => setActive("OnlineClass")}>
          <div className="coursehead">
            <h3>COSC 302</h3>
            <h6>Data Structures And Algorithms</h6>
          </div>
          <div className="coursedets">
            <h6>Dr. Seun Ebesuwa</h6>
            <p>3 Credit Hours</p>
          </div>
        </div>

        <div class="coursecards" onClick={() => setActive("OnlineClass")}>
          <div className="coursehead">
            <h3>COSC 302</h3>
            <h6>Data Structures And Algorithms</h6>
          </div>
          <div className="coursedets">
            <h6>Dr. Seun Ebesuwa</h6>
            <p>3 Credit Hours</p>
          </div>
        </div>
      </div>
    </>
  );
};
