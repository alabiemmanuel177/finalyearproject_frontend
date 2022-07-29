import React from "react";
import BsFillCheckCircleFill from "react-icons/bs";

export const SubmitCF = () => {
  return (
    <>
      {showModal ? (
        <div className="logoutModal">
          <div className="modalWrapper" showModal={showModal}>
            <div className="modalContent">
              <MdClose
                className="closeModal-btn"
                aria-label="Close Modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
              <BsFillCheckCircleFill />
              <h4>Your course form has been submitted for approval</h4>
            </div>
            <button id="LogoutBTN" className="modalLogout-Btn">
              Ok
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};
