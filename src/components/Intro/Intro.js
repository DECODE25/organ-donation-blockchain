import React, { useState } from "react";
import {connect} from "react-redux";
import img29 from "../../images/img29.jpg";
import doc from "../../images/doc.jpg";

const Intro = () => {
  const [userType, setUserType] = useState("");
  const handleClick = (e) => {
      setUserType(e.target.id);
  }
  return (
    <div class="skin-light">
      {/* Main Navigation */}
      <div className="view zoom z-depth-2 split left">
        <img className="img-fluid w-100" src={img29} alt="Sample" />
        <a href="#!" onClick={handleClick} id="User">
          <div className="mask waves-effect waves-light" />
          <div className="overlay centered text-white">
            <h1>User</h1>
          </div>
        </a>
      </div>
      <div className="view zoom z-depth-2 split right">
        <img className="img-fluid w-100" src={doc} alt="Sample" />
        <a href="#!" onClick={handleClick} id="Doctor">
          <div className="mask waves-effect waves-light" />
          <div className="overlay centered text-white">
            <h1>Doctor</h1>
          </div>
        </a>
      </div>
    </div>
  );
};

export default connect()(Intro);
