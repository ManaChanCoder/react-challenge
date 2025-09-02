import React, { useState } from "react";

// components
import SubmitToast from "./toast/submitToast";

const App = () => {
  const [validation, setValidation] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [showMessage, setShowMessage] = useState("");
  const [toast, setToast] = useState(false);
  const [consent, setConsent] = useState(false);
  const [queryType, setQueryType] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setValidation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleFocus = (fieldName) => {
    setShowMessage(fieldName);
  };
  const showToast = (e) => {
    e.preventDefault();
    setToast(true);

    setValidation({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
    setConsent(false);
    setQueryType("");
    setTimeout(() => {
      setToast(false);

      window.location.reload();
    }, 2000);
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-screen bg-light-green">
      <form
        onSubmit={showToast}
        className="bg-white p-4 rounded-3 d-flex flex-column gap-1 "
      >
        <h3>Contact Us</h3>

        <div className="d-flex flex-column flex-md-row gap-3">
          <div className="form-container-size">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              First Name *
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              name="firstName"
              value={validation.firstName}
              onChange={handleOnChange}
              onFocus={() => handleFocus("firstName")}
              required
            />
            {showMessage === "firstName" && !validation.firstName && (
              <p className="text-danger">First name is required</p>
            )}
          </div>
          <div className="form-container-size">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Last Name *
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              name="lastName"
              value={validation.lastName}
              onChange={handleOnChange}
              onFocus={() => handleFocus("lastName")}
              required
            />
            {showMessage === "lastName" && !validation.lastName && (
              <p className="text-danger">Last name is required</p>
            )}
          </div>
        </div>

        <div className="">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address *
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            name="email"
            value={validation.email}
            onChange={handleOnChange}
            onFocus={() => handleFocus("email")}
          />
          {showMessage === "email" && !validation.email && (
            <p className="text-danger">Email is required</p>
          )}
        </div>

        <div className="">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Query Type *
          </label>
          <div className="d-flex flex-column flex-md-row gap-3">
            <div className="form-check form-container-size border d-flex justify-content-center gap-2 py-2">
              <input
                className="form-check-input"
                type="radio"
                name="radioDefault"
                id="radioDefault1"
                value="General Enquiry"
                checked={queryType === "General Enquiry"}
                onChange={(e) => setQueryType(e.target.value)}
              />
              <label className="form-check-label" htmlFor="radioDefault1">
                General Enquiry
              </label>
            </div>
            <div className="form-check form-container-size border d-flex justify-content-center gap-2 py-2">
              <input
                className="form-check-input"
                type="radio"
                name="radioDefault"
                id="radioDefault2"
                value="Support Request"
                checked={queryType === "Support Request"}
                onChange={(e) => setQueryType(e.target.value)}
              />
              <label className="form-check-label" htmlFor="radioDefault2">
                Support Request
              </label>
            </div>
          </div>
        </div>

        <div className="">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Message *
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="message"
            value={validation.message}
            onChange={handleOnChange}
            onFocus={() => handleFocus("message")}
            required
          ></textarea>
          {showMessage === "message" && !validation.message && (
            <p className="text-danger">Message is required</p>
          )}
        </div>

        <div className="form-check">
          <input
            className="form-check-input "
            type="checkbox"
            value=""
            id="checkDefault"
            onChange={(e) => setConsent(e.target.checked)}
            checked={consent}
          />
          <label
            className="form-check-label fs-small fw-normal"
            htmlFor="checkDefault"
          >
            I consent to being contracted by the team *
          </label>
        </div>
        <button type="submit" className="btn btn-success mt-2">
          Submit
        </button>
      </form>
      <SubmitToast show={toast} />
    </div>
  );
};

export default App;
