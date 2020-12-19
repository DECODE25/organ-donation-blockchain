import React from "react";

const ProgressBar = ({ stepsCompleted }) => {
  let progress = [];
  let i = 5;
  let progressArrayItems = 0;
  while ((i !== 0)&&(stepsCompleted<=5)) {
    if (stepsCompleted > 0) {
      progress.push(
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
      );
      if (i !== 1) progress.push(<div className="stepper-div probing" />);
      if (stepsCompleted <= 4)
        progress[progressArrayItems - 1] = (
          <div className="stepper-div active" />
        );
    } else {
      progress.push(<span className="circle align-middle">!</span>);
      if (i !== 1) progress.push(<div className="stepper-div" />);
    }
    stepsCompleted--;
    i--;
    progressArrayItems += 2;
  }

  return (
    <div className="mx-4 mt-2 d-flex align-items-center justify-content-center">
      {/* Add class 'active' to progress & 'probing' class */}
      {progress}
    </div>
  );
};

export default ProgressBar;
