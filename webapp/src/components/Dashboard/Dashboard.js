import React from "react";
import Tree from "../../images/undraw_my_password_d6kg.svg";
import Doctor from "../../images/undraw_medicine_b1ol.svg";
import Woman from "../../images/woman.svg";
import Blood from "../../images/water-drops.svg";
import Cardiogram from "../../images/cardiogram.svg";
import Drip from "../../images/intravenous-saline-drip.svg";
import Rbc from "../../images/erythrocytes.svg";
import Doc from "../../images/document.svg";

const Dashboard = () => {
  return (
    <div className="dashboard flex-grow-1">
      <h5 className="fs-5">Dashboard</h5>
      <div className="row m-0 g-3 justify-content-center">
        <div className="col-lg-8">
          <div className="rounded-3 position-relative overflow-hidden purple-card">
            <img
              className="img-fluid w-25 position-absolute start-0 translate-middle top-100"
              src={Tree}
              alt="doctor"
            />
            <div className="position-absolute translate-middle">
              <h5>Welcome Neri Kwang!</h5>
              <p className="w-75">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                magni suscipit molestiae vero optio vitae alias tenetur
              </p>
              <button className="btn btn-sm px-2 py-1 shadow-none rounded-3 action-button">
                Connect To Doctor
              </button>
            </div>
            <img
              className="img-fluid position-absolute img-doctor"              
              src={Doctor}
              alt="doctor"
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="info-card rounded-3 p-3">
            <p className="heading">Profile</p>
            <div className="text-center mt-3">
              <img
                src={Woman}
                className="img-fluid avatar rounded-circle shadow"
                alt="woman"
              />
              <h6 className="heading mt-3 fw-bold">Dr. Neri Kwang</h6>
              <p className="desc mt-2 pt-1 mb-0">Heart Specialist</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="info-card rounded-3 p-3">
            <img src={Blood} className="img-fluid card-img" alt="blood"/>
            <p className="heading mt-3 mb-0">Blood Pressure</p>
            <p className="additional-info pt-1 mb-2">110/70</p>
            <p className="desc pt-1 mb-2">
              <span className="positive">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={17}
                  fill="currentColor"
                  className="bi bi-graph-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </span>
              10% Higher Than Last Month
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="info-card rounded-3 p-3">
            <img src={Cardiogram} className="img-fluid card-img" alt="cardiogram"/>
            <p className="heading mt-3 mb-0">Heart Rate</p>
            <p className="additional-info pt-1 mb-2">85 BPM</p>
            <p className="desc pt-1 mb-2">
              <span className="negative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={17}
                  fill="currentColor"
                  className="bi bi-graph-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 0h1v15h15v1H0V0zm10 11.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.6l-3.613-4.417a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61L13.445 11H10.5a.5.5 0 0 0-.5.5z"
                  />
                </svg>
              </span>
              5% Less Than Last Month
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="info-card rounded-3 p-3">
            <img
              src={Drip}
              className="img-fluid card-img"
              alt="drip"
            />
            <p className="heading mt-3 mb-0">Glucose Level</p>
            <p className="additional-info pt-1 mb-2">75-90</p>
            <p className="desc pt-1 mb-2">
              <span className="positive">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={17}
                  fill="currentColor"
                  className="bi bi-graph-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </span>
              20% Higher Than Last Month
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-12 col-xl-3">
          <div className="info-card rounded-3 p-3 text-lg-center text-xl-start">
            <img src={Rbc} className="img-fluid card-img" alt="rbc"/>
            <p className="heading mt-3 mb-0">RBC Count</p>
            <p className="additional-info pt-1 mb-2">9,456/mL</p>
            <p className="desc pt-1 mb-2">
              <span className="negative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={17}
                  fill="currentColor"
                  className="bi bi-graph-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 0h1v15h15v1H0V0zm10 11.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.6l-3.613-4.417a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61L13.445 11H10.5a.5.5 0 0 0-.5.5z"
                  />
                </svg>
              </span>
              25% Less Than Last Month
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="info-card rounded-3 p-3">
            <div className="d-flex">
              <div className="flex-fill">
                <p className="heading mb-1">Performance Heart Rate</p>
                <button className="btn shadow-none p-0 desc fw-bold dropdown-toggle">
                  1-7 December 2020
                </button>
              </div>
              <div className="flex-fill text-end">
                <p className="important-info d-inline-block rounded-3">
                  72 bpm <span className="desc">Average</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="info-card rounded-3 p-3">
            <p className="heading mb-1">Health Reports Document</p>
            <div className="d-flex align-items-center mb-3">
              <div className="flex-fill">
                <button className="btn shadow-none p-0 desc fw-bold dropdown-toggle">
                  1-7 December 2020
                </button>
              </div>
              <div className="flex-fill text-end">
                <a className="text-decoration-none" href="!#">
                  VIEW MORE
                </a>
              </div>
            </div>
            <div className="d-flex my-2 pt-2">
              <img
                className="img-fluid card-img list-icon"
                src={Doc}
                alt="document"
              />
              <div className="flex-fill">
                <p className="mb-1">Medical Check Up Report.pdf</p>
                <span className="desc">2MB</span>
              </div>
              <div className="flex-fill text-end">
                <button className="btn shadow-none list-button p-2 mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fillRule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </button>
                <button className="btn shadow-none list-button p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-box-arrow-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="d-flex my-2 pt-2">
              <img
                className="img-fluid card-img list-icon"
                src={Doc}
                alt="document"
              />
              <div className="flex-fill">
                <p className="mb-1">Blood Count Report.docx</p>
                <span className="desc">4MB</span>
              </div>
              <div className="flex-fill text-end">
                <button className="btn shadow-none list-button p-2 mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fillRule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </button>
                <button className="btn shadow-none list-button p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-box-arrow-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="d-flex my-2 pt-2">
              <img
                className="img-fluid card-img list-icon"
                src={Doc}
                alt="document"
              />
              <div className="flex-fill">
                <p className="mb-1">Glucose Level Report.docx</p>
                <span className="desc">12MB</span>
              </div>
              <div className="flex-fill text-end">
                <button className="btn shadow-none list-button p-2 mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fillRule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </button>
                <button className="btn shadow-none list-button p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-box-arrow-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="d-flex my-2 pt-2">
              <img
                className="img-fluid card-img list-icon"
                src={Doc}
                alt="document"
              />
              <div className="flex-fill">
                <p className="mb-1">Heart Rate Report.pdf</p>
                <span className="desc">2.5MB</span>
              </div>
              <div className="flex-fill text-end">
                <button className="btn shadow-none list-button p-2 mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fillRule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </button>
                <button className="btn shadow-none list-button p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-box-arrow-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
