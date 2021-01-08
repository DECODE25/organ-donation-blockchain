import React, {useState} from "react";
import Tabs from "./Tabs";
import ProgressBar from "./ProgressBar";
import ProgressIcons from "./ProgressIcons";
import Doctor from "../../images/doctor.svg";
import Donor from "../../images/man.svg";
import Recipient from "../../images/worker.svg";

const Track = () => {  
  const [selectedTabNum, setSelectedTabNum] = useState(1);
  const [stepsCompleted, setStepsCompleted] = useState(0);
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
                <ProgressIcons stepsCompleted={stepsCompleted} />
                <ProgressBar stepsCompleted={stepsCompleted} />
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
