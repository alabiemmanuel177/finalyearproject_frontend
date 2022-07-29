import React from "react";
import AiFillCloseCircle from 'react-icons/ai'


export const FinancialClerance = () => {
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
              <h1>Financial Clearance</h1>
              <h4>You need to have financial approval to submit</h4>
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
