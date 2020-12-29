import React from "react";
import Doctor_Patient from "../../images/e854f17df9f12cf177e2e610b951df59.jpg"

const Complain = () => {
  return (
    <div className="complain-form flex-grow-1 bg-light">
      <div className="row m-0 h-100">
        <div className="col-12 col-md-5">
          <div className="p-3 pb-0">
            <h3 className="mb-1">Report Breach of Conduct</h3>
            <p className="fw-light pt-1 text-muted me-3">
              Fill this form and our team will get back to you within the next
              24 hours.
            </p>
            <form>
              <div className="row me-0 mt-0 mb-0 gy-3">
                <div className="col-lg-6">
                  <label htmlFor="name" className="d-block">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                  />
                </div>
                <div className="col-lg-6">
                  <label htmlFor="aadhaar-number" className="d-block">
                    Aadhaar Number
                  </label>
                  <input
                    id="aadhaar-number"
                    name="aadhaar-number"
                    type="text"
                    placeholder="444 333 222"
                  />
                </div>
                <div className="col-lg-6">
                  <label htmlFor="email" className="d-block">
                    Mail Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@mymail.com"
                  />
                </div>
                <div className="col-lg-6">
                  <label htmlFor="phone-number" className="d-block">
                    Phone Number
                  </label>
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="text"
                    placeholder="+(CC) 9876547860"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="incident" className="d-block">
                    Incident
                  </label>
                  <textarea
                    id="incident"
                    name="incident"
                    placeholder="Write your message..."
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="mt-5 text-center pe-4">
                <button
                  className="btn shadow-none btn-lg me-lg-3 text-light"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-7 p-2 d-none d-md-block">
          <div className="form-img-container">
            <img src={Doctor_Patient} alt="doctor-patient" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complain;
