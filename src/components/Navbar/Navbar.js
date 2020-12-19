import React from "react";

const Navbar = () => {
  return (
    <header>
      {/* Modal Contact */}
      <div
        className="modal fade"
        id="modalContactForm"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header py-4">
              <h5 className="modal-title mx-auto">Write to us</h5>
              <button
                type="button"
                className="close p-0 m-0"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body mx-3">
              <div className="md-form md-outline">
                <i className="fas fa-user prefix" />
                <input
                  type="text"
                  id="contactForm-name1"
                  className="form-control"
                />
                <label htmlFor="contactForm-name1">Your name</label>
              </div>
              <div className="md-form md-outline">
                <i className="fas fa-envelope prefix" />
                <input
                  type="email"
                  id="contactForm-email1"
                  className="form-control"
                />
                <label htmlFor="contactForm-email1">Your email</label>
              </div>
              <div className="md-form md-outline">
                <i className="fas fa-tag prefix" />
                <input type="text" id="contact321" className="form-control" />
                <label htmlFor="contact321">Subject</label>
              </div>
              <div className="md-form md-outline">
                <i className="fas fa-pencil-alt prefix" />
                <textarea
                  type="text"
                  id="contact81"
                  className="md-textarea form-control"
                  rows={4}
                  defaultValue={""}
                />
                <label htmlFor="contact81">Your message</label>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center py-4">
              <button className="btn btn-primary waves-effect waves-light">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Contact */}
      {/* Modal Login / Register */}
      <div
        className="modal fade show"
        id="modalLoginRegister"
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              {/* Pills */}
              <ul className="nav md-pills nav-justified pills-primary">
                <li className="nav-item">
                  <a
                    className="nav-link border border-primary border-rounded active show"
                    data-toggle="tab"
                    href="#modalLoginRegister-login"
                    role="tab"
                    aria-selected="true"
                  >
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link border border-primary border-rounded"
                    data-toggle="tab"
                    href="#modalLoginRegister-register"
                    role="tab"
                    aria-selected="false"
                  >
                    Register
                  </a>
                </li>
              </ul>
              {/* Pills */}
              {/* Content */}
              <div className="tab-content py-0">
                {/* First panel */}
                <div
                  className="tab-pane fade in show active"
                  id="modalLoginRegister-login"
                  role="tabpanel"
                >
                  {/* Login form */}
                  <form
                    id="formLoginRegister-login"
                    className="pt-2"
                    action="login"
                    method="post"
                  >
                    <div className="md-form md-outline">
                      <i className="fas fa-envelope prefix" />
                      <input
                        type="email"
                        id="formLoginRegister-email"
                        className="form-control"
                      />
                      <label
                        data-error="wrong"
                        data-success="right"
                        htmlFor="formLoginRegister-email"
                      >
                        Your email
                      </label>
                    </div>
                    <div className="md-form md-outline">
                      <i className="fas fa-lock prefix" />
                      <input
                        type="password"
                        id="formLoginRegiser-password"
                        className="form-control"
                      />
                      <label
                        data-error="wrong"
                        data-success="right"
                        htmlFor="formLoginRegiser-password"
                      >
                        Your password
                      </label>
                    </div>
                    <div className="text-center mt-4 pt-3">
                      <button
                        type="button"
                        className="btn btn-outline-primary mr-1 mb-2 waves-effect waves-light"
                      >
                        Forgot password?
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary mb-2 waves-effect waves-light"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                  {/* Login form */}
                </div>
                {/* First panel */}
                {/* Second panel */}
                <div
                  className="tab-pane fade"
                  id="modalLoginRegister-register"
                  role="tabpanel"
                >
                  {/* Register form */}
                  <form
                    id="formLoginRegister-register"
                    className="pt-2"
                    action="register"
                    method="post"
                  >
                    <div className="md-form md-outline">
                      <i className="fas fa-user prefix" />
                      <input
                        type="text"
                        id="formLoginRegister-name"
                        className="form-control"
                      />
                      <label
                        data-error="wrong"
                        data-success="right"
                        htmlFor="formLoginRegister-name"
                      >
                        Your name
                      </label>
                    </div>
                    <div className="md-form md-outline">
                      <i className="fas fa-pencil-alt prefix" />
                      <input
                        type="text"
                        id="formLoginRegister-username"
                        className="form-control"
                      />
                      <label
                        data-error="wrong"
                        data-success="right"
                        htmlFor="formLoginRegister-username"
                      >
                        Your username
                      </label>
                    </div>
                    <div className="md-form md-outline">
                      <i className="fas fa-envelope prefix" />
                      <input
                        type="email"
                        id="formLoginRegister-email-example"
                        className="form-control"
                      />
                      <label
                        data-error="wrong"
                        data-success="right"
                        htmlFor="formLoginRegister-email-example"
                      >
                        Your email
                      </label>
                    </div>
                    <div className="md-form md-outline">
                      <i className="fas fa-lock prefix" />
                      <input
                        type="password"
                        id="formLoginRegister-password-example"
                        className="form-control"
                      />
                      <label
                        data-error="wrong"
                        data-success="right"
                        htmlFor="formLoginRegister-password-example"
                      >
                        Your password
                      </label>
                    </div>
                    <div className="md-form md-outline">
                      <i className="fas fa-key prefix" />
                      <input
                        type="password"
                        id="formLoginRegister-password-repeat"
                        className="form-control"
                      />
                      <label
                        data-error="wrong"
                        data-success="right"
                        htmlFor="formLoginRegister-password-repeat"
                      >
                        Repeat password
                      </label>
                    </div>
                    <div className="form-check mt-4 mb-3 pl-0 text-left">
                      <input
                        type="checkbox"
                        className="form-check-input filled-in"
                        id="formLoginRegister-newsletter"
                        name="newsletter"
                      />
                      <label
                        className="form-check-label small grey-text"
                        htmlFor="formLoginRegister-newsletter"
                      >
                        I agree to sign up for account notifications and
                        newsletter
                      </label>
                    </div>
                    <div className="text-center">
                      <p className="small grey-text mb-4">
                        Lorem ipsum dolor sit amet{" "}
                        <a target="_blank" href="#!">
                          Privacy Policy
                        </a>
                        .
                      </p>
                      <button
                        type="button"
                        className="btn btn-primary my-2 waves-effect waves-light"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>
                  {/* Register form */}
                </div>
                {/* Second panel */}
              </div>
              {/* Content */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-primary waves-effect waves-light"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Login / Register */}
      {/* Modal Login / Register */}
      <div
        className="modal fade show"
        id="modalLoginRegister2"
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              {/* Pills */}
              <ul className="nav md-pills nav-justified pills-primary">
                <li className="nav-item">
                  <a
                    className="nav-link border border-primary border-rounded"
                    data-toggle="tab"
                    href="#modalLoginRegister-login2"
                    role="tab"
                    aria-selected="true"
                  >
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link border border-primary border-rounded active show"
                    data-toggle="tab"
                    href="#modalLoginRegister-register2"
                    role="tab"
                    aria-selected="false"
                  >
                    Register
                  </a>
                </li>
              </ul>
              {/* Pills */}
              {/* Content */}
              <div className="tab-content py-0">
                {/* First panel */}
                <div
                  className="tab-pane fade"
                  id="modalLoginRegister-login2"
                  role="tabpanel"
                >
                  {/* Login form */}
                  <form
                    id="formLoginRegister-login2"
                    className="pt-2"
                    action="login"
                    method="post"
                  >
                    <div className="md-form md-outline">
                      <i className="fas fa-envelope prefix" />
                      <input
                        type="email"
                        id="formLoginRegister-email2"
                        className="form-control"
                      />
                      <label
                        data-error="wrong"
                        data-success="right"
                        htmlFor="formLoginRegister-email2"
                      >
                        Your email
                      </label>
                    </div>
                    <div className="md-form md-outline">
                      <i className="fas fa-lock prefix" />
                      <input
                        type="password"
                        id="formLoginRegiser-password2"
                        className="form-control"
                      />
                      <label
                        data-error="wrong"
                        data-success="right"
                        htmlFor="formLoginRegiser-password2"
                      >
                        Your password
                      </label>
                    </div>
                    <div className="text-center mt-4 pt-3">
                      <button
                        type="button"
                        className="btn btn-outline-primary mr-1 mb-2 waves-effect waves-light"
                      >
                        Forgot password?
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary mb-2 waves-effect waves-light"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                  {/* Login form */}
                </div>
                {/* First panel */}
                {/* Second panel */}
                <div
                  className="tab-pane fade in show active"
                  id="modalLoginRegister-register2"
                  role="tabpanel"
                >
                  {/* Register form */}
                  <form
                    id="formLoginRegister-register2"
                    className="pt-2"
                    action="register"
                    method="post"
                  >
                    <div className="md-form md-outline">
                      <i className="fas fa-user prefix" />
                      <input
                        type="text"
                        id="formLoginRegister-name2"
                        className="form-control"
                      />
                      <label
                        data-error="wrong"
                        data-success="right"
                        htmlFor="formLoginRegister-name2"
                      >
                        Your name
                      </label>
                    </div>
                    <div className="md-form md-outline">
                      <i className="fas fa-pencil-alt prefix" />
                      <input
                        type="text"
                        id="formLoginRegister-username2"
                        className="form-control"
                      />
                      <label
                        data-error="wrong"
                        data-success="right"
                        htmlFor="formLoginRegister-username2"
                      >
                        Your username
                      </label>
                    </div>
                    <div className="md-form md-outline">
                      <i className="fas fa-envelope prefix" />
                      <input
                        type="email"
                        id="formLoginRegister-email-example2"
                        className="form-control"
                      />
                      <label
                        data-error="wrong"
                        data-success="right"
                        htmlFor="formLoginRegister-email-example2"
                      >
                        Your email
                      </label>
                    </div>
                    <div className="md-form md-outline">
                      <i className="fas fa-lock prefix" />
                      <input
                        type="password"
                        id="formLoginRegister-password-example2"
                        className="form-control"
                      />
                      <label
                        data-error="wrong"
                        data-success="right"
                        htmlFor="formLoginRegister-password-example2"
                      >
                        Your password
                      </label>
                    </div>
                    <div className="md-form md-outline">
                      <i className="fas fa-key prefix" />
                      <input
                        type="password"
                        id="formLoginRegister-password-repeat2"
                        className="form-control"
                      />
                      <label
                        data-error="wrong"
                        data-success="right"
                        htmlFor="formLoginRegister-password-repeat2"
                      >
                        Repeat password
                      </label>
                    </div>
                    <div className="form-check mt-4 mb-3 pl-0 text-left">
                      <input
                        type="checkbox"
                        className="form-check-input filled-in"
                        id="formLoginRegister-newsletter2"
                        name="newsletter"
                      />
                      <label
                        className="form-check-label small grey-text"
                        htmlFor="formLoginRegister-newsletter2"
                      >
                        I agree to sign up for account notifications and
                        newsletter
                      </label>
                    </div>
                    <div className="text-center">
                      <p className="small grey-text mb-4">
                        Lorem ipsum dolor sit amet{" "}
                        <a target="_blank" href="#!">
                          Privacy Policy
                        </a>
                        .
                      </p>
                      <button
                        type="button"
                        className="btn btn-primary my-2 waves-effect waves-light"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>
                  {/* Register form */}
                </div>
                {/* Second panel */}
              </div>
              {/* Content */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-primary waves-effect waves-light"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Login / Register */}
      {/* Modal Edit */}
      <div
        className="modal fade show"
        id="modaledit"
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="text-center">
                <h3>Update Profile</h3>
              </div>
              {/* Content */}
              <div className="tab-content py-0">
                {/* First panel */}
                <div
                  className="tab-pane fade in show active"
                  id="modalupdateprofile"
                  role="tabpanel"
                >
                  {/* Update form */}
                  <form
                    id="formupdateProfile"
                    className="pt-2"
                    action="update"
                    method="post"
                  >
                    <div className="table-responsive">
                      <table className="table table-sm table-borderless mb-0">
                        <tbody>
                          <tr>
                            <th className="pl-0 w-25" scope="row">
                              <strong>Father's Name</strong>
                            </th>
                            <td>Jakie Doe</td>
                            <th
                              className="pl-0 w-25 md-form md-outline"
                              scope="row"
                            >
                              <strong>Spouse</strong>
                            </th>
                            <td>
                              <input
                                type
                                id="formeditProfile-spouse"
                                className="form-control"
                              />
                            </td>
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
                            <th
                              className="pl-0 w-25 md-form md-outline"
                              scope="row"
                            >
                              <strong>Height</strong>
                            </th>
                            <td>
                              <input
                                type
                                id="formeditProfile-height"
                                className="form-control"
                              />
                            </td>
                            <th
                              className="pl-0 w-25 md-form md-outline"
                              scope="row"
                            >
                              <strong>Weight</strong>
                            </th>
                            <td>
                              <input
                                type
                                id="formeditProfile-weight"
                                className="form-control"
                              />
                            </td>
                          </tr>
                          <tr>
                            <th
                              className="pl-0 w-25 md-form md-outline"
                              scope="row"
                            >
                              <strong>Email</strong>
                            </th>
                            <td>
                              <input
                                type="email"
                                id="formeditProfile-email"
                                className="form-control"
                              />
                            </td>
                            <th className="pl-0 w-25" scope="row">
                              <strong>Aadhar Number</strong>
                            </th>
                            <td>xxxxxxxx2047</td>
                          </tr>
                          <tr>
                            <th
                              className="pl-0 w-25 md-form md-outline"
                              scope="row"
                            >
                              <strong>Employment Status</strong>
                            </th>
                            <td>
                              <input
                                type
                                id="formeditProfile-EmploymentStatus"
                                className="form-control"
                              />
                            </td>
                            <th
                              className="pl-0 w-25 md-form md-outline"
                              scope="row"
                            >
                              <strong>Occupation</strong>
                            </th>
                            <td>
                              <input
                                type
                                id="formeditProfile-Occupation"
                                className="form-control"
                              />
                            </td>
                          </tr>
                          <tr>
                            <th
                              className="pl-0 w-25 md-form md-outline"
                              scope="row"
                            >
                              <strong>Company</strong>
                            </th>
                            <td>
                              <input
                                type
                                id="formeditProfile-Company"
                                className="form-control"
                              />
                            </td>
                            <th
                              className="pl-0 w-25 md-form md-outline"
                              scope="row"
                            >
                              <strong>Company Address</strong>
                            </th>
                            <td>
                              <input
                                type
                                id="formeditProfile-CompanyAddress"
                                className="form-control"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </form>
                  {/* Update form */}
                </div>
                {/* First panel */}
              </div>
              {/* Content */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary my-2 waves-effect waves-light"
              >
                Update Profile
              </button>
              <button
                type="button"
                className="btn btn-outline-primary waves-effect waves-light"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Login / Register */}
      {/* Navbar */}
      <nav className="navbar navbar-expand-md navbar-light bg-white fixed-top scrolling-navbar">
        <div className="container-fluid">
          {/* Brand */}
          <a className="navbar-brand" href="https://mdbecommerce.com/">
            <strong>
              <span className="text-grey">Hom</span>
              <span className="text-primary">i</span>
              <span className="text-grey">es</span>
              <span className="text-primary">.</span>
            </strong>
          </a>
          {/* Collapse button */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#basicExampleNav"
            aria-controls="basicExampleNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Links */}
          <div className="collapse navbar-collapse" id="basicExampleNav">
            {/* Right */}
            <ul className="navbar-nav ml-auto">
              <li className="nav-item center-elem">
                <a href="./dashboard.html" className="nav-link waves-effect">
                  Dashboard
                </a>
              </li>
              <li className="nav-item center-elem">
                <a href="./doctors.html" className="nav-link waves-effect">
                  Doctors
                </a>
              </li>
              <li className="nav-item center-elem">
                <a href="./form.html" className="nav-link waves-effect">
                  Contact
                </a>
              </li>
              <li className="nav-item center-elem">
                <a href="./profile.html" className="nav-link waves-effect">
                  Profile
                </a>
              </li>
              <li className="nav-item center-elem">
                <a
                  href="#!"
                  data-toggle="modal"
                  data-target="#modalLoginRegister"
                  className="nav-link waves-effect"
                >
                  Sign in
                </a>
              </li>
              <li className="nav-item pl-2 mb-2 mb-md-0 center-elem">
                <a
                  href="#!"
                  data-toggle="modal"
                  data-target="#modalLoginRegister2"
                  type="button"
                  className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light"
                >
                  Sign up
                </a>
              </li>
            </ul>
          </div>
          {/* Links */}
        </div>
      </nav>
      {/* Navbar */}
    </header>
  );
};

export default Navbar;