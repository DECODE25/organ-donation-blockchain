import React from "react";
import Logo from "../../images/codebeat.svg";

const Navbar = ({setShowSidebar, showSidebar, brandStyle, menuStyle}) => {
  return (
    <div className="d-flex align-items-center m-3 mt-4 pr-3">
      <div className="brand d-flex align-items-center px-4 py-2 shadow-sm rounded-3" style={brandStyle}>
        <img src={Logo} className="img-fluid logo" alt="logo" />
        <p className="d-inline-block mb-0 brand-name">Mario Hospital</p>
      </div>
      {/*ADD ACTIVE CLASS WHEN BUTTON IS CLICKED*/}
      <div className={showSidebar ? "menu rounded-3 active" : "menu rounded-3"} style={menuStyle}>
        <button className="btn shadow-none" onClick={()=>{setShowSidebar(!showSidebar)}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </div>
      <div className="notification-icons">
        <button className="btn position-relative shadow-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            fill="currentColor"
            className="bi bi-envelope"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
            />
          </svg>
          <span className="position-absolute badge border border-light rounded-circle p-1">
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
        <button className="btn position-relative shadow-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="bi bi-bell"
            viewBox="0 0 16 16"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z" />
            <path
              fillRule="evenodd"
              d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
            />
          </svg>
          <span className="position-absolute badge border border-light rounded-circle p-1">
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
