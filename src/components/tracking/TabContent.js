import React from "react";

const TabContent = () => {
  return (
    <div className="row p-3">
      <div className="col-md-12">
        <h5 class="text-center tr-h-fs">John Doe</h5>
        <p className="mb-2 text-muted text-uppercase small text-center py-2">Age: 35</p>
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
    </div>
  );
};

export default TabContent;
