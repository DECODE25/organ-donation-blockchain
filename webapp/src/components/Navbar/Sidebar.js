import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <p className="mb-4">Menu</p>
      <div className="row justify-content-center m-0">
        <div className="col-6">
          {/*ADD ACTIVE AND SHADOW CLASSES WHEN BUTTON IS CLICKED*/}
          <div className="mx-auto position-relative rounded-3 sidebar-button shadow active">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              fill="currentColor"
              className="bi bi-house"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
              />
              <path
                fillRule="evenodd"
                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
              />
            </svg>
            <span className="position-absolute top-0 start-100 translate-middle h-100 w-100 rounded-circle" />
          </div>
          {/*ADD ACTIVE CLASS WHEN BUTTON IS CLICKED*/}
          <p className="button-label pt-2 text-center active">Dashboard</p>
        </div>
        <div className="col-6">
          <div className="mx-auto position-relative rounded-3 sidebar-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              fill="currentColor"
              className="bi bi-clipboard-check"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
              />
              <path
                fillRule="evenodd"
                d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3zm4.354 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
              />
            </svg>
            <span className="position-absolute top-0 start-100 translate-middle h-100 w-100 rounded-circle" />
          </div>
          <p className="button-label pt-2 text-center">Appointments</p>
        </div>
        <div className="col-6">
          <div className="mx-auto position-relative rounded-3 sidebar-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              fill="currentColor"
              className="bi bi-briefcase"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z"
              />
              <path
                fillRule="evenodd"
                d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"
              />
            </svg>
            <span className="position-absolute top-0 start-100 translate-middle h-100 w-100 rounded-circle" />
          </div>
          <p className="button-label pt-2 text-center">Doctors</p>
        </div>
        <div className="col-6">
          <div className="mx-auto position-relative rounded-3 sidebar-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              fill="currentColor"
              className="bi bi-info-circle"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" />
              <circle cx={8} cy="4.5" r={1} />
            </svg>
            <span className="position-absolute top-0 start-100 translate-middle h-100 w-100 rounded-circle" />
          </div>
          <p className="button-label pt-2 text-center">Staff</p>
        </div>
        <div className="col-6">
          <div className="mx-auto position-relative rounded-3 sidebar-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              fill="currentColor"
              className="bi bi-door-open"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 15.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM11.5 2H11V1h.5A1.5 1.5 0 0 1 13 2.5V15h-1V2.5a.5.5 0 0 0-.5-.5z"
              />
              <path
                fillRule="evenodd"
                d="M10.828.122A.5.5 0 0 1 11 .5V15h-1V1.077l-6 .857V15H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117z"
              />
              <path d="M8 9c0 .552.224 1 .5 1s.5-.448.5-1-.224-1-.5-1-.5.448-.5 1z" />
            </svg>
            <span className="position-absolute top-0 start-100 translate-middle h-100 w-100 rounded-circle" />
          </div>
          <p className="button-label pt-2 text-center">Room Allotment</p>
        </div>
        <div className="col-6">
          <div className="mx-auto position-relative rounded-3 sidebar-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              fill="currentColor"
              className="bi bi-wallet2"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"
              />
            </svg>
            <span className="position-absolute top-0 start-100 translate-middle h-100 w-100 rounded-circle" />
          </div>
          <p className="button-label pt-2 text-center">Payment</p>
        </div>
      </div>
      <p className="mt-1 mb-4">Appearance</p>
      <div className="row justify-content-center m-0">
        <div className="col-6">
          <div className="mx-auto position-relative rounded-3 sidebar-button shadow active">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              fill="currentColor"
              className="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
              />
            </svg>
            <span className="position-absolute top-0 start-100 translate-middle h-100 w-100 rounded-circle" />
          </div>
          <p className="button-label pt-2 text-center active">Profile</p>
        </div>
        <div className="col-6">
          <div className="mx-auto position-relative rounded-3 sidebar-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              fill="currentColor"
              className="bi bi-sliders"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"
              />
            </svg>
            <span className="position-absolute top-0 start-100 translate-middle h-100 w-100 rounded-circle" />
          </div>
          <p className="button-label pt-2 text-center">Settings</p>
        </div>
        <div className="col-6">
          <div className="mx-auto position-relative rounded-3 sidebar-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              fill="currentColor"
              className="bi bi-exclamation-triangle"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M7.938 2.016a.146.146 0 0 0-.054.057L1.027 13.74a.176.176 0 0 0-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 0 0 .066-.017.163.163 0 0 0 .055-.06.176.176 0 0 0-.003-.183L8.12 2.073a.146.146 0 0 0-.054-.057A.13.13 0 0 0 8.002 2a.13.13 0 0 0-.064.016zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"
              />
              <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
            </svg>
            <span className="position-absolute top-0 start-100 translate-middle h-100 w-100 rounded-circle" />
          </div>
          <p className="button-label pt-2 text-center">Support</p>
        </div>
        <div className="col-6">
          <div className="mx-auto position-relative rounded-3 sidebar-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              fill="currentColor"
              className="bi bi-power"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M5.578 4.437a5 5 0 1 0 4.922.044l.5-.866a6 6 0 1 1-5.908-.053l.486.875z"
              />
              <path fillRule="evenodd" d="M7.5 8V1h1v7h-1z" />
            </svg>
            <span className="position-absolute top-0 start-100 translate-middle h-100 w-100 rounded-circle" />
          </div>
          <p className="button-label pt-2 text-center">Log Out</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
