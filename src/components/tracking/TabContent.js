import React from "react";

const TabContent = () => {
  return (
    <div className="row p-3">
      <div className="col-md-12">
        <h5 class="text-center tr-h-fs">Heart</h5>
        <div className="table-responsive">
          <table className="table table-borderless mb-0">
            <tbody>
              <tr>
                <th className="pl-0 w-25" scope="row">
                  <strong>Address</strong>
                </th>
                <td>
                  <strong>Twitter, Inc.</strong>
                  1355 Market St, Suite 900
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-responsive">
          <table className="table table-borderless mb-0">
            <tbody>
              <tr>
                <th className="pl-0 w-25" scope="row">
                  <strong>Father's Name</strong>
                </th>
                <td>Jakie Doe</td>
                <th className="pl-0 w-25" scope="row">
                  <strong>Spouse</strong>
                </th>
                <td>-</td>
              </tr>
              <tr>
                <th className="pl-0 w-25" scope="row">
                  <strong>Gender</strong>
                </th>
                <td>Male</td>
                <th className="pl-0 w-25" scope="row">
                  <strong>Blood Group</strong>
                </th>
                <td>O+</td>
              </tr>
              <tr>
                <th className="pl-0 w-25" scope="row">
                  <strong>Height</strong>
                </th>
                <td>5'3"</td>
                <th className="pl-0 w-25" scope="row">
                  <strong>Weight</strong>
                </th>
                <td>68kg</td>
              </tr>
              <tr>
                <th className="pl-0 w-25" scope="row">
                  <strong>Email</strong>
                </th>
                <td>john_doe@gmail.com</td>
                <th className="pl-0 w-25" scope="row">
                  <strong>Aadhar Number</strong>
                </th>
                <td>xxxxxxxx2047</td>
              </tr>
              <tr>
                <th className="pl-0 w-25" scope="row">
                  <strong>Employment Status</strong>
                </th>
                <td>Part-time</td>
                <th className="pl-0 w-25" scope="row">
                  <strong>Occupation</strong>
                </th>
                <td>Maintainance</td>
              </tr>
              <tr>
                <th className="pl-0 w-25" scope="row">
                  <strong>Company</strong>
                </th>
                <td>Twitter</td>
                <th className="pl-0 w-25" scope="row">
                  <strong>Company's Address</strong>
                </th>
                <td>
                  <strong>Twitter, Inc.</strong>
                  1355 Market St, Suite 900
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <div class="text-center">
          <button
            type="button"
            className="btn btn-primary btn-md mr-1 mb-2 waves-effect waves-light"
            data-toggle="modal"
            data-target="#modaledit"
          >
            Update Profile
          </button>
          <button
            type="button"
            className="btn btn-light btn-md mr-1 mb-2 waves-effect waves-light ml-5"
          >
            <i className="fas fa-heart pr-2" />
            Request Organs
          </button>
        </div>
      </div>
      <div className="col-12">
        <hr />
        <div className="row align-items-center">
          <div className="col-6">
            <h3>Documents</h3>
          </div>
          <div className="col-6 text-right">
              <label htmlFor="file-upload" className="btn btn-primary">
                Upload Document
              </label>
              <input id="file-upload" type="file" hidden/>
          </div>
        </div>
        <div className="row pt-3 jusify-content-center">
          <div className="col-md-3">
            <div className="card w-100">
              <img
                src="https://images.hu-production.be/post/post_93603add57d74e7b8c6e33ae6f97c2b3_636444654677178000.jpg"
                className="card-img-top img-fluid"
                style={{ height: "20rem" }}
                alt="..."
              />
              <div className="card-body">
                <a href="#" className="btn btn-primary">
                  View Report
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card w-100">
              <img
                src="https://media.cheggcdn.com/media%2Fb83%2Fb83fbec7-2e7b-4579-8900-653c71a16092%2Fimage.png"
                className="card-img-top img-fluid"
                style={{ height: "20rem" }}
                alt="..."
              />
              <div className="card-body">
                <a href="#" className="btn btn-primary">
                  View Report
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card w-100">
              <img
                src="https://image.slidesharecdn.com/laboratory-observationreportprinting-150502033730-conversion-gate01/95/laboratory-observation-report-printing-1-638.jpg?cb=1430537949"
                className="card-img-top img-fluid"
                style={{ height: "20rem" }}
                alt="..."
              />
              <div className="card-body">
                <a href="#" className="btn btn-primary">
                  View Report
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card w-100">
              <img
                src="https://www.healthunit.com/uploads/img/sample-immunization-record.gif"
                className="card-img-top img-fluid"
                style={{ height: "20rem" }}
                alt="..."
              />
              <div className="card-body">
                <a href="#" className="btn btn-primary">
                  View Report
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabContent;
