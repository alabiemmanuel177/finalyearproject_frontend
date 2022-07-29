import React from "react";
import AiFillCloseCircle from 'react-icons/ai'

export const CannotSubmitOverLoad = () => {
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
              <AiFillCloseCircle/>
              <h4>You have to drop some courses in order to submit</h4>
            </div>
            <button id="LogoutBTN" className="modalLogout-Btn">
              Back
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};
