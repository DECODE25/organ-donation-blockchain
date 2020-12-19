import React from "react";

const ProgressBar = ({stepsCompleted}) => {
  let progress = [];
  let i = 5;
  while(i!=0){
    if(stepsCompleted>0)
    {

    }
    stepsCompleted--;
    i--;
  }

  return (
    <div className="mx-4 mt-2 d-flex align-items-center justify-content-center">
      {/* Add class 'active' to progress & 'probing' class */}
      <span className="circle active">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          className="bi bi-check2"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </span>
      <div className="stepper-div active" />
      <span className="circle align-middle active">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          className="bi bi-check2"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </span>
      <div className="stepper-div probing" />
      <span className="circle align-middle">!</span>
      <div className="stepper-div" />
      <span className="circle align-middle">!</span>
      <div className="stepper-div" />
      <span className="circle align-middle">!</span>
    </div>
  );
};

export default ProgressBar;
