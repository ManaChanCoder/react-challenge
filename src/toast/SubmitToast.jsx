import React from "react";

const SubmitToast = ({ show }) => {
  return (
    <div
      id="liveToast"
      className={`toast position-fixed toast-position p-3 text-white  ${
        show ? "show" : ""
      }`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="d-flex align-items-center gap-2 ">
        <img
          src="../../public/icon-success-check.svg"
          className="rounded me-2"
          alt=""
        />

        <p className="m-0">Message Sent!</p>
      </div>
      <div className="toast-body fw-light">
        thanks for completing the form. We'll be in touch soon!
      </div>
    </div>
  );
};

export default SubmitToast;
