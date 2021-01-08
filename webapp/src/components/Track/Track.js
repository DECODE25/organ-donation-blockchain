import React, {useState} from "react";
import Tabs from "./Tabs";
import Doctor from "../../images/doctor.svg";
import Donor from "../../images/man.svg";
import Recipient from "../../images/worker.svg";

const Track = () => {  
  const [selectedTabNum, setSelectedTabNum] = useState(1);
  return (
    <div className="dashboard flex-grow-1">
      <h5 className="fs-5">Track Procedure</h5>
      <div className="row m-0 g-3">
        <div className="col-lg-4">
          <div className="row gy-3">
            <div className="col-12">
              <div className="info-card px-3 py-4 rounded-3">
                <div className="text-center">
                  <img
                    src={Doctor}
                    className="img-fluid person-img rounded-circle"
                    alt="doctor"
                  />
                  <h6 className="mt-2 pt-1 fw-bold mb-1">Dr. Ellie Gray</h6>
                  <p className="designation mb-2">Surgeon</p>
                  <button className="btn shadow-none action-button mt-1 text-light">
                    View Profile
                  </button>
                </div>
                <hr className="my-4" />
                <h5 className="heading fw-bold mb-2 pb-1">Hash Details</h5>
                <div className="border px-2 py-3 text-center rounded">
                  <p className="desc mb-2">Hash #1</p>
                  <p className="hash fw-light">
                    0x7f5d26f7d630f115bad74fd8db00df246b05555e7de284b
                    5dbf6594b15dc4a6c
                  </p>
                  <p className="desc mb-2">Hash #2</p>
                  <p className="hash fw-light">
                    0x7f5d26f7d630f115bad74fd8db00df246b05555e7de284b
                    5dbf6594b15dc4a6c
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="info-card px-3 py-4 rounded-3">
                <div className="text-center">
                  <img
                    src={Donor}
                    className="img-fluid person-img rounded-circle"
                    alt="Donor"
                  />
                  <h6 className="mt-2 pt-1 fw-bold mb-1">Stephen Jackson</h6>
                  <p className="designation mb-2">Donor</p>
                  <button className="btn shadow-none action-button mt-1 text-light">
                    View Profile
                  </button>
                </div>
                <hr className="my-4" />
                <h5 className="heading fw-bold mb-2 pb-1">Hash Details</h5>
                <div className="border px-2 py-3 text-center rounded">
                  <p className="desc mb-2">Hash #1</p>
                  <p className="hash fw-light">
                    0x7f5d26f7d630f115bad74fd8db00df246b05555e7de284b
                    5dbf6594b15dc4a6c
                  </p>
                  <p className="desc mb-2">Hash #2</p>
                  <p className="hash fw-light">
                    0x7f5d26f7d630f115bad74fd8db00df246b05555e7de284b
                    5dbf6594b15dc4a6c
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="info-card px-3 py-4 rounded-3">
                <div className="text-center">
                  <img
                    src={Recipient}
                    className="img-fluid person-img rounded-circle"
                    alt="recipient"
                  />
                  <h6 className="mt-2 pt-1 fw-bold mb-1">You</h6>
                  <p className="designation mb-2">Recipient</p>
                  <button className="btn shadow-none action-button mt-1 text-light">
                    Go To Profile
                  </button>
                </div>
                <hr className="my-4" />
                <h5 className="heading fw-bold mb-2 pb-1">Hash Details</h5>
                <div className="border px-2 py-3 text-center rounded">
                  <p className="desc mb-2">Hash #1</p>
                  <p className="hash fw-light">
                    0x7f5d26f7d630f115bad74fd8db00df246b05555e7de284b
                    5dbf6594b15dc4a6c
                  </p>
                  <p className="desc mb-2">Hash #2</p>
                  <p className="hash fw-light">
                    0x7f5d26f7d630f115bad74fd8db00df246b05555e7de284b
                    5dbf6594b15dc4a6c
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row gy-3">
            <div className="col-12">
              <div className="info-card p-3 rounded-3">
                <h3 className="text-center mt-2 mb-3 pb-4">Kidney Donation</h3>
                <div className="row mx-4">
                  {/* Add class 'active' to progress */}
                  <div className="col-2 text-center progress-icon active">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={25}
                      height={25}
                      fill="currentColor"
                      className="bi bi-box-arrow-in-down-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.364 2.5a.5.5 0 0 1 .5-.5H13.5A1.5 1.5 0 0 1 15 3.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 2 13.5V6.864a.5.5 0 1 1 1 0V13.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H6.864a.5.5 0 0 1-.5-.5z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M11 10.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h3.793L1.146 1.854a.5.5 0 1 1 .708-.708L10 9.293V5.5a.5.5 0 0 1 1 0v5z"
                      />
                    </svg>
                    <p className="mt-3">Recipient Request</p>
                  </div>
                  <div className="col-2 col-half-offset text-center progress-icon active">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={25}
                      height={25}
                      fill="currentColor"
                      className="bi bi-box-arrow-up-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.364 3.5a.5.5 0 0 1 .5-.5H14.5A1.5 1.5 0 0 1 16 4.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 3 14.5V7.864a.5.5 0 1 1 1 0V14.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H7.864a.5.5 0 0 1-.5-.5z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 0 1H1.707l8.147 8.146a.5.5 0 0 1-.708.708L1 1.707V5.5a.5.5 0 0 1-1 0v-5z"
                      />
                    </svg>
                    <p className="mt-3">Donor Agreement</p>
                  </div>
                  <div className="col-2 col-half-offset text-center progress-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={25}
                      height={25}
                      fill="currentColor"
                      className="bi bi-clipboard-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"
                      />
                      <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                      <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                    </svg>
                    <p className="mt-3">Compatibility Test</p>
                  </div>
                  <div className="col-2 col-half-offset text-center progress-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={25}
                      height={25}
                      fill="currentColor"
                      className="bi bi-bookmark-star"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z" />
                      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                    </svg>
                    <p className="mt-3">Government Permission</p>
                  </div>
                  <div className="col-2 col-half-offset text-center progress-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={25}
                      height={25}
                      fill="currentColor"
                      className="bi bi-bookmarks"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z" />
                      <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z" />
                    </svg>
                    <p className="mt-3">Final Checks</p>
                  </div>
                </div>
                {/* Add class 'active' to progress & 'probing' class */}
                <div className="mx-4 d-flex align-items-center justify-content-center">
                  <span className="circle active">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-check2"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                      />
                    </svg>
                  </span>
                  <div className="stepper-div active" />
                  <span className="circle align-middle active">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-check2"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                      />
                    </svg>
                  </span>
                  <div className="stepper-div probing" />
                  <span className="circle align-middle">!</span>
                  <div className="stepper-div" />
                  <span className="circle align-middle">!</span>
                  <div className="stepper-div" />
                  <span className="circle align-middle">!</span>
                </div>
                <div className="text-center mt-4 pt-2 mb-2">
                  <button className="btn shadow-none action-button text-light mx-2">
                    Acknowledge Step
                  </button>
                  <button className="btn shadow-none action-button bg-danger text-light mx-3">
                    Report Discrepancy
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="info-card rounded px-3 py-4">
              <Tabs selectedTabNum={selectedTabNum} setSelectedTabNum={setSelectedTabNum}/>
                <div className="tab-content mx-auto">
                  <p className="mt-4 text-center fs-6 mb-2">Kidney Donor</p>
                  <p className="designation text-center mb-4">Age: 35</p>
                  <div className="px-3">
                    <table className="table table-borderless table-sm">
                      <tbody>
                        <tr>
                          <td className="table-heading">Address</td>
                          <td className="table-content">
                            3636 Saint James Drive Carlisle, PA 17013
                          </td>
                        </tr>
                        <tr>
                          <td className="table-heading">Father's Name</td>
                          <td className="table-content">Jackie Doe</td>
                          <td className="table-heading">Spouse</td>
                          <td className="table-content">N/A</td>
                        </tr>
                        <tr>
                          <td className="table-heading">Gender</td>
                          <td className="table-content">Male</td>
                          <td className="table-heading">Blood Group</td>
                          <td className="table-content">O+</td>
                        </tr>
                        <tr>
                          <td className="table-heading">Height</td>
                          <td className="table-content">5'3"</td>
                          <td className="table-heading">Weight</td>
                          <td className="table-content">68kg</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <hr className="normal-hr mb-3" />
                  <div className="row px-3 mb-3">
                    <div className="col-6">
                      <p className="fs-5 mb-0">Documents</p>
                    </div>
                    <div className="col-6 text-end">
                      <label
                        htmlFor="file-upload"
                        className="btn shadow-none action-button"
                      >
                        Upload Document
                      </label>
                      <input id="file-upload" type="file" hidden />
                    </div>
                  </div>
                  <div className="row g-2 pt-2">
                    <div className="col-sm-6 col-xl-4 col-xxl-3">
                      <div className="card w-100">
                        <img
                          src="https://images.hu-production.be/post/post_93603add57d74e7b8c6e33ae6f97c2b3_636444654677178000.jpg"
                          className="card-img-top img-fluid"
                          style={{ height: "20rem" }}
                          alt="..."
                        />
                        <div className="card-body text-center">
                          <button className="btn action-button text-light">
                            View Report
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xl-4 col-xxl-3">
                      <div className="card w-100">
                        <img
                          src="https://media.cheggcdn.com/media%2Fb83%2Fb83fbec7-2e7b-4579-8900-653c71a16092%2Fimage.png"
                          className="card-img-top img-fluid"
                          style={{ height: "20rem" }}
                          alt="..."
                        />
                        <div className="card-body text-center">
                          <button className="btn action-button text-light">
                            View Report
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xl-4 col-xxl-3">
                      <div className="card w-100">
                        <img
                          src="https://image.slidesharecdn.com/laboratory-observationreportprinting-150502033730-conversion-gate01/95/laboratory-observation-report-printing-1-638.jpg?cb=1430537949"
                          className="card-img-top img-fluid"
                          style={{ height: "20rem" }}
                          alt="..."
                        />
                        <div className="card-body text-center">
                          <button className="btn action-button text-light">
                            View Report
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xl-4 col-xxl-3">
                      <div className="card w-100">
                        <img
                          src="https://www.healthunit.com/uploads/img/sample-immunization-record.gif"
                          className="card-img-top img-fluid"
                          style={{ height: "20rem" }}
                          alt="..."
                        />
                        <div className="card-body text-center">
                          <button className="btn action-button text-light">
                            View Report
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
