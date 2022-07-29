import React from "react";

export const AssignmentModal = () => {
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
              <h1>Are you sure you want to Logout ?</h1>
            </div>
            <button id="LogoutBTN" className="modalLogout-Btn">
              LogOut
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};
