import React from "react";

export const SubmitCourse = () => {
  return (
    <>
      {showModal ? (
        <div className="submitCourseModal">
          <div className="modalWrapper" showModal={showModal}>
            <div className="modalContent">
              <MdClose
                className="closeModal-btn"
                aria-label="Close Modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
              <h1>Course Submission</h1>
              <h4>
                You're about to submit your course form ensure you've got your
                selection right
              </h4>
              <table>
                <tr>
                  <td>Semester</td>
                  <td>2021/2022.1</td>
                </tr>
                <tr>
                  <td>Matric Number</td>
                  <td>19/1845</td>
                </tr>
                <tr>
                  <td>Student Name</td>
                  <td>Izu, Onisokumen Preye</td>
                </tr>
                <tr>
                  <td>Study Level</td>
                  <td>300</td>
                </tr>
                <tr>
                  <td>Credit Hours</td>
                  <td>24</td>
                </tr>
              </table>
            </div>
            <button id="canceltBTN" className="modalLogout-Btn">
              Cancel
            </button>
            <button id="submitBTN" className="modalLogout-Btn">
              Submit
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};
