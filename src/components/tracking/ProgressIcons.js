import React from "react";

const ProgressIcons = ({ stepsCompleted }) => {
  let contentForDiv = [
    <div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={40}
          height={40}
          fill="currentColor"
          className="bi bi-journal-bookmark-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
          <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
          <path
            fillRule="evenodd"
            d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8V1z"
          />
        </svg>
      </div>
      <p className="mt-2 fw-light">Order Processed</p>
    </div>,
    <div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={40}
          height={40}
          fill="currentColor"
          className="bi bi-file-easel"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"
          />
          <path d="M8.5 5a.5.5 0 1 0-1 0h1zm1.527 5H8.973l.553 1.658a.5.5 0 1 0 .948-.316L10.027 10zM8.5 10h-1v1a.5.5 0 0 0 1 0v-1zm-1.473 0H5.973l-.447 1.342a.5.5 0 1 0 .948.316L7.027 10z" />
          <path
            fillRule="evenodd"
            d="M4 6.5A1.5 1.5 0 0 1 5.5 5h5A1.5 1.5 0 0 1 12 6.5v2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 8.5v-2zM5.5 6a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-5z"
          />
        </svg>
      </div>
      <p className="mt-2 fw-light">Order Designing</p>
    </div>,
    <div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={40}
          height={40}
          fill="currentColor"
          className="bi bi-box-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
          />
          <path
            fillRule="evenodd"
            d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
          />
        </svg>
      </div>
      <p className="mt-2 fw-light">Order Shipped</p>
    </div>,
    <div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={40}
          height={40}
          fill="currentColor"
          className="bi bi-truck"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
          />
        </svg>
      </div>
      <p className="mt-2 fw-light">Order Enroute</p>
    </div>,
    <div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={40}
          height={40}
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
      </div>
      <p className="mt-2 fw-light">Order Arrived</p>
    </div>,
  ];
  let progress = [];
  let i = 5;
  while (i != 0) {
    if (stepsCompleted > 0) {
      if (i == 5)
        progress.push(
          <div className="col-2 text-center progress-icon active">
            {contentForDiv[5 - i]}
          </div>
        );
      else
        progress.push(
          <div className="col-2 col-half-offset text-center progress-icon active">
            {contentForDiv[5 - i]}
          </div>
        );
    } else {
      progress.push(
        <div className="col-2 col-half-offset text-center progress-icon">
          {contentForDiv[5 - i]}
        </div>
      );
    }
    stepsCompleted--;
    i--;
  }
  return (
    <div className="row mx-4">
      {/* Add class 'active' to progress */}
      {progress}
    </div>
  );
};

export default ProgressIcons;
