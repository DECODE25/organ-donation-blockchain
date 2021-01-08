import React from "react";
import Rocket from "../../images/logo_white.png";
import Logo from "../../images/codebeat.svg";
import Delivery from "../../images/delivery.svg";
import Money from "../../images/money.svg";
import ReturnOfInvestment from "../../images/return-of-investment.svg";
import Line from "../../images/line.svg";
import Conversation from "../../images/conversation.svg";
import BadReview from "../../images/bad-review.svg";

const Landing = () => {
  return (
    <div>
      <div
        className="modal fade"
        id="registerModal"
        tabIndex={-1}
        aria-labelledby="registerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <ul
                className="nav nav-pills mb-3 nav-justified gap-3"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active border border-primary border-rounded fill"
                    id="registerLogin-tab"
                    data-bs-toggle="pill"
                    href="#login"
                    role="tab"
                    aria-controls="login"
                    aria-selected="true"
                  >
                    Login
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link border border-primary border-rounded fill"
                    id="registerRegister-tab"
                    data-bs-toggle="pill"
                    href="#register"
                    role="tab"
                    aria-controls="register"
                    aria-selected="false"
                  >
                    Register
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="login"
                  role="tabpanel"
                  aria-labelledby="login-tab"
                >
                  <div className="row">
                    <div className="col-md-7 col-lg-6 align-self-center">
                      <img
                        src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg"
                        className="img-fluid mb-3 d-none d-md-block"
                        alt="showpiece"
                      />
                    </div>
                    <div className="col-12 col-md-5 col-lg-6">
                      <div className="text-center">
                        <ul
                          className="nav rounded-pill nav-pills bg-primary d-inline-flex"
                          id="account-type"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <a
                              className="nav-link active"
                              id="pills-home-tab"
                              data-bs-toggle="pill"
                              href="#pills-home"
                              role="tab"
                              aria-controls="pills-home"
                              aria-selected="true"
                            >
                              USER
                            </a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a
                              className="nav-link"
                              id="pills-profile-tab"
                              data-bs-toggle="pill"
                              href="#pills-profile"
                              role="tab"
                              aria-controls="pills-profile"
                              aria-selected="false"
                            >
                              DOCTOR
                            </a>
                          </li>
                        </ul>
                      </div>
                      <form className="form-signin">
                        <div className="align-items-center d-flex form-label-group my-3">
                          <label htmlFor="#inputEmail" className="me-2">
                            <i className="fas fa-envelope fs-6" />
                          </label>
                          <input
                            type="email"
                            id="inputEmail"
                            className="form-control rounded-pill"
                            placeholder="Email"
                            required
                          />
                        </div>
                        <div className="align-items-center d-flex form-label-group my-3">
                          <label htmlFor="#inputPassword" className="me-2">
                            <i className="fa-key fas fs-6" />
                          </label>
                          <input
                            type="password"
                            id="inputPassword"
                            className="form-control rounded-pill"
                            placeholder="Password"
                            required
                          />
                        </div>
                        <div className="custom-control custom-checkbox mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            Remember password
                          </label>
                        </div>
                        <div className="text-center">
                          <button
                            className="btn btn-lg btn-primary text-uppercase w-50 "
                            type="submit"
                          >
                            Sign in
                          </button>
                          <button
                            className="btn btn-lg btn-google rounded-circle d-none d-md-inline"
                            type="submit"
                          >
                            <i className="fab fa-google " />{" "}
                          </button>
                          <button
                            className="my-2 btn btn-lg btn-facebook  text-uppercase raise d-none d-md-inline"
                            type="submit"
                          >
                            <i className="fab fa-facebook-f " />{" "}
                          </button>
                        </div>
                        <hr className="mt-4 mb-2 d-md-none" />
                        <div className="text-center d-md-none">
                          <button
                            className="btn btn-lg btn-google btn-block text-uppercase my-2"
                            type="submit"
                          >
                            <i className="fab fa-google " />
                            Sign in with Google
                          </button>
                          <button
                            className="my-2 btn btn-lg btn-facebook btn-block text-uppercase raise"
                            type="submit"
                          >
                            <i className="fab fa-facebook-f " /> Sign in with
                            Facebook
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="register"
                  role="tabpanel"
                  aria-labelledby="register-tab"
                >
                  <div className="row">
                    <div className="col-md-3 text-center mt-3 align-self-center">
                      <img
                        src={Rocket}
                        className="d-none d-md-block rocket-image mx-auto"
                        alt="Rocket"
                      />
                      <h3 className="text-dark">Welcome</h3>
                      <p className="text-dark">
                        You are 30 seconds away from earning your own money!
                      </p>
                    </div>
                    <div className="col-md-9 register-right px-4">
                      <h3 className="text-center text-grey my-3">
                        Register Yourself
                      </h3>
                      <form>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="validationDefault01">
                              First name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationDefault01"
                              defaultValue="Mark"
                              required
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="validationDefault02">
                              Last name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationDefault02"
                              defaultValue="Otto"
                              required
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-5 text-center mb-3 my-auto">
                            <ul
                              className="nav rounded-pill nav-pills bg-primary d-inline-flex"
                              id="account-type"
                              role="tablist"
                            >
                              <li className="nav-item" role="presentation">
                                <a
                                  className="nav-link active"
                                  id="pills-home-tab"
                                  data-bs-toggle="pill"
                                  href="#pills-home"
                                  role="tab"
                                  aria-controls="pills-home"
                                  aria-selected="true"
                                >
                                  USER
                                </a>
                              </li>
                              <li className="nav-item" role="presentation">
                                <a
                                  className="nav-link"
                                  id="pills-profile-tab"
                                  data-bs-toggle="pill"
                                  href="#pills-profile"
                                  role="tab"
                                  aria-controls="pills-profile"
                                  aria-selected="false"
                                >
                                  DOCTOR
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-5 text-center mb-3 my-auto">
                            <ul
                              className="nav rounded-pill nav-pills bg-primary d-inline-flex"
                              id="account-type"
                              role="tablist"
                            >
                              <li className="nav-item" role="presentation">
                                <a
                                  className="nav-link active"
                                  id="pills-home-tab"
                                  data-bs-toggle="pill"
                                  href="#pills-home"
                                  role="tab"
                                  aria-controls="pills-home"
                                  aria-selected="true"
                                >
                                  Male
                                </a>
                              </li>
                              <li className="nav-item" role="presentation">
                                <a
                                  className="nav-link"
                                  id="pills-profile-tab"
                                  data-bs-toggle="pill"
                                  href="#pills-profile"
                                  role="tab"
                                  aria-controls="pills-profile"
                                  aria-selected="false"
                                >
                                  Female
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-2 mb-3 form-group">
                            <label htmlFor="inputAddress">Age</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputAddress"
                              placeholder
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-3 form-group">
                            <label htmlFor="inputAddress">Address</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputAddress"
                              placeholder="1234 Main St"
                            />
                          </div>
                          <div className="col-md-6 mb-3 form-group">
                            <label htmlFor="inputAddress2">Address 2</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputAddress2"
                              placeholder="Apartment, studio, or floor"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-5 mb-3">
                            <label htmlFor="validationDefault03">City</label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationDefault03"
                              required
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="validationDefault04">State</label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationDefault04"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-3">
                            <label htmlFor="validationDefault05">Zip</label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationDefault05"
                              required
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-md-9 form-check my-auto">
                            <input
                              className="form-check-input me-2 ms-0"
                              type="checkbox"
                              defaultValue
                              id="invalidCheck2"
                              required
                            />
                            <label
                              className="form-check-label"
                              htmlFor="invalidCheck2"
                            >
                              Agree to terms and conditions
                            </label>
                          </div>
                          <input
                            type="submit"
                            className=" col-md-3 btn btn-primary float-end mb-2"
                            defaultValue="Register"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*navbar*/}
      <div className="position-relative d-flex align-items-center m-3 mt-4 pr-3">
        <div className="brand d-flex align-items-center px-4 py-2 shadow-sm rounded-3">
          <img src={Logo} className="img-fluid logo" alt="logo" />
          <p className="d-inline-block mb-0 brand-name">Mario Hospital</p>
        </div>
        <div className="notification-icons">
          <button
            className="btn third"
            data-bs-toggle="modal"
            data-bs-target="#registerModal"
            type="button"
          >
            Login
          </button>
          <button
            className="btn third ms-2"
            data-bs-toggle="modal"
            data-bs-target="#registerModal"
            type="button"
          >
            Register
          </button>
        </div>
      </div>
      {/*navbar*/}
      <div className="position-absolute top-0 w-100 wave-container">
        <svg
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            fill="#d2d7ff"
            fillOpacity="0.7"
            transform="translate(0 -50)"
            d="M0,96L80,96C160,96,320,96,480,112C640,128,800,160,960,154.7C1120,149,1280,107,1360,85.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            fill="#e3e7f1"
            fillOpacity="0.5"
            transform="translate(-32 -20)"
            d="M0,64L48,106.7C96,149,192,235,288,245.3C384,256,480,192,576,154.7C672,117,768,107,864,138.7C960,171,1056,245,1152,229.3C1248,213,1344,107,1392,53.3L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>
      <div className="position-absolute bottom-0 w-100 wave-container mb-n">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            xmlns="http://www.w3.org/2000/svg"
            transform="translate(-520 40)"
            fill="#8b85ff"
            fillOpacity={1}
            d="M0,256L48,250.7C96,245,192,235,288,192C384,149,480,75,576,53.3C672,32,768,64,864,101.3C960,139,1056,181,1152,202.7C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            fill="#3e22ee"
            fillOpacity={1}
            transform="translate(0 30)"
            d="M-50,288L40,272C80,256,160,224,240,181.3C320,139,400,85,480,106.7C560,128,640,224,720,234.7C800,245,880,171,960,144C1040,117,1120,139,1200,154.7C1280,171,1360,181,1400,186.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L-50,320Z"
          />
        </svg>
      </div>
      <section className="pt-5">
        <div className="container pt-4">
          <div className="mb-5 text-center">
            <h3 className=" mt-4 ">Organ Donations Made Easy...</h3>
            <div className="fluid-paragraph mt-3">
              <p className="lead lh-180 ">
                Ecosystem for donors and recipients to interact
                on secure lines to make the process easy and secure❤️
              </p>
            </div>
          </div>
          <div className="row w-75 mx-auto my-4">
            <div className="col-4">
              <div className="text-center">
                <div className="pb-2">
                  <div className="icon bg-white text-primary rounded-circle icon-lg icon-shape shadow">
                    <img class="img-fluid landing-page-icon" src={Delivery} alt="Delivery-img"/>
                  </div>
                </div>
                <h5 className="font-weight-bold">Tracking Procedure Status</h5>
              </div>
            </div>
            <div className="col-4">
              <div className="text-center">
                <div className="pb-2">
                  <div className="icon bg-white text-success rounded-circle icon-lg icon-shape shadow">
                  <img class="img-fluid landing-page-icon" src={Money} alt="Money-img"/>
                  </div>
                </div>
                <h5 className="font-weight-bold">Funding from NGO's</h5>
              </div>
            </div>
            <div className="col-4">
              <div className="text-center">
                <div className="pb-2">
                  <div className="icon bg-white text-danger rounded-circle icon-lg icon-shape shadow">
                  <img class="img-fluid landing-page-icon" src={ReturnOfInvestment} alt="ReturnOfInvestment-img"/>
                  </div>
                </div>
                <h5 className="font-weight-bold">Moneyback Guarantee</h5>
              </div>
            </div>
          </div>
          <div className="row w-75 mx-auto my-4">
            <div className="col-4">
              <div className="text-center">
                <div className="pb-2">
                  <div className="icon bg-white text-primary rounded-circle icon-lg icon-shape shadow">
                  <img class="img-fluid landing-page-icon" src={Line} alt="Line-img"/>
                  </div>
                </div>
                <h5 className="font-weight-bold">Status in Waiting List</h5>
              </div>
            </div>
            <div className="col-4">
              <div className="text-center">
                <div className="pb-2">
                  <div className="icon bg-white text-info rounded-circle icon-lg icon-shape shadow">
                  <img class="img-fluid landing-page-icon" src={Conversation} alt="Conversation-img"/>
                  </div>
                </div>
                <h5 className="font-weight-bold">Direct Contact with Professionals</h5>
              </div>
            </div>
            <div className="col-4">
              <div className="text-center">
                <div className="pb-2">
                  <div className="icon bg-white text-warning rounded-circle icon-lg icon-shape shadow">
                  <img class="img-fluid landing-page-icon" src={BadReview} alt="BadReview-img"/>
                  </div>
                </div>
                <h5 className="font-weight-bold">Grievance Portal</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
