import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import slide1 from "../../images/img29.jpg";
import slide2 from "../../images/aadhar.jpg";
import slide3 from "../../images/birthcert.jpg";
import features from "../../images/sur.jfif";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="jumbotron color-grey-light mt-70 mb-0">
          <div className="d-flex align-items-center ">
            <div className="container text-center py-5">
              {/*Grid row*/}
              <h2 className="font-weight-bold dark-grey-text mb-0 text-center text-md-left">
                Profile
              </h2>
              {/*Grid row*/}
            </div>
          </div>
        </div>
        {/* Main layout */}
        <main>
          <div className="container">
            {/*Section: Block Content*/}
            <section className="mb-5">
              <div className="row">
                <div className="col-md-5 mb-4 mb-md-0">
                  <div className="view zoom z-depth-2 rounded">
                    <img
                      className="img-fluid w-100"
                      src={slide1}
                      alt="Sample"
                    />
                    <a href="#!">
                      <div className="mask waves-effect waves-light" />
                    </a>
                  </div>
                </div>
                <div className="col-md-7">
                  <h5>John Doe</h5>
                  <p className="mb-2 text-muted text-uppercase small">
                    Age: 35
                  </p>
                  <div className="table-responsive">
                    <table className="table table-sm table-borderless mb-0">
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
                    <table className="table table-sm table-borderless mb-0">
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
                    className="btn btn-light btn-md mr-1 mb-2 waves-effect waves-light"
                  >
                    <i className="fas fa-heart pr-2" />
                    Request Organs
                  </button>
                </div>
              </div>
            </section>
            {/*Section: Block Content*/}
            {/*Section: New products*/}
            <section>
              <h3 className="text-center pt-5 mb-0">Your Documents</h3>
              {/* Grid row */}
              <div className="row mt-5 mb-4">
                {/* Grid column */}
                <div className="col-sm-6 col-md-4 mb-4">
                  {/* Card */}
                  <div className>
                    <div className="view zoom z-depth-2 rounded">
                      <img
                        className="img-fluid w-100 img-height"
                        src={slide2}
                        alt="Sample"
                      />
                      <a href="#!">
                        <div className="mask waves-effect waves-light" />
                      </a>
                    </div>
                    <div className="text-center pt-4">
                      <h5>Aadhar Card</h5>
                      <h6 className="mb-3">Upload Date: 5th March 2018</h6>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm mr-1 waves-effect waves-light"
                      >
                        <i className="fas fa-pencil-alt pr-2" />
                        Update
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm px-3 material-tooltip-main waves-effect waves-light"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Delete this Document"
                      >
                        <i className="fas fa-trash" />
                      </button>
                    </div>
                  </div>
                  {/* Card */}
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-sm-6 col-md-4 mb-4">
                  {/* Card */}
                  <div className>
                    <div className="view zoom z-depth-2 rounded">
                      <img
                        className="img-fluid w-100 img-height"
                        src={slide3}
                        alt="Sample"
                      />
                      <a href="#!">
                        <div className="mask waves-effect waves-light" />
                      </a>
                    </div>
                    <div className="text-center pt-4">
                      <h5>Birth Certificate</h5>
                      <h6 className="mb-3">Upload Date: 5th March 2018</h6>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm mr-1 waves-effect waves-light"
                      >
                        <i className="fas fa-eye pr-2" />
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm px-3 material-tooltip-main waves-effect waves-light"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Delete this Document"
                      >
                        <i className="fas fa-trash" />
                      </button>
                    </div>
                  </div>
                  {/* Card */}
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-sm-6 col-md-4 mb-4">
                  {/* Card */}
                  <div className>
                    <div className="view zoom z-depth-2 rounded">
                      <img
                        className="img-fluid w-100 img-height"
                        src={features}
                        alt="Sample"
                      />
                      <a href="#!">
                        <div className="mask waves-effect waves-light" />
                      </a>
                    </div>
                    <div className="text-center pt-4">
                      <h5>Liver Surgery</h5>
                      <h6 className="mb-3">Upload Date: 15th March 2019</h6>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm mr-1 waves-effect waves-light"
                      >
                        <i className="fas fa-eye pr-2" />
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm px-3 material-tooltip-main waves-effect waves-light"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Delete this Document"
                      >
                        <i className="fas fa-trash" />
                      </button>
                    </div>
                  </div>
                  {/* Card */}
                </div>
                {/* Grid column */}
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </section>
            {/*Section: New products*/}
          </div>
        </main>
        {/* Main layout */}
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
