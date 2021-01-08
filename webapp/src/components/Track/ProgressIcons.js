import React from "react";

const ProgressIcons = ({ stepsCompleted }) => {
  const stepIcon = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="currentColor"
      className="bi bi-box-arrow-in-down-right"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M6.364 2.5a.5.5 0 0 1 .5-.5H13.5A1.5 1.5 0 0 1 15 3.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 2 13.5V6.864a.5.5 0 1 1 1 0V13.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H6.864a.5.5 0 0 1-.5-.5z"
      />
      <path
        fillRule="evenodd"
        d="M11 10.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h3.793L1.146 1.854a.5.5 0 1 1 .708-.708L10 9.293V5.5a.5.5 0 0 1 1 0v5z"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="currentColor"
      className="bi bi-box-arrow-up-left"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M7.364 3.5a.5.5 0 0 1 .5-.5H14.5A1.5 1.5 0 0 1 16 4.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 3 14.5V7.864a.5.5 0 1 1 1 0V14.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H7.864a.5.5 0 0 1-.5-.5z"
      />
      <path
        fillRule="evenodd"
        d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 0 1H1.707l8.147 8.146a.5.5 0 0 1-.708.708L1 1.707V5.5a.5.5 0 0 1-1 0v-5z"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="currentColor"
      className="bi bi-clipboard-plus"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"
      />
      <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
      <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="currentColor"
      className="bi bi-bookmark-star"
      viewBox="0 0 16 16"
    >
      <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z" />
      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="currentColor"
      className="bi bi-bookmarks"
      viewBox="0 0 16 16"
    >
      <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z" />
      <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z" />
    </svg>,
  ];

  const stepDescription = [
    <p className="mt-3">Recipient Request</p>,
    <p className="mt-3">Donor Agreement</p>,
    <p className="mt-3">Compatibility Test</p>,
    <p className="mt-3">Government Permission</p>,
    <p className="mt-3">Final Checks</p>,
  ];

  let progress = [];
  let i = 5;
  while (i !== 0 && stepsCompleted <= 5) {
    if (stepsCompleted > 0) {
      if (i === 5)
        progress.push(
          <div className="col-2 text-center progress-icon active">
            {stepIcon[5 - i]}
            {stepDescription[5 - i]}
          </div>
        );
      else
        progress.push(
          <div className="col-2 col-half-offset text-center progress-icon active">
            {stepIcon[5 - i]}
            {stepDescription[5 - i]}
          </div>
        );
    } else {
      if (i === 5)
        progress.push(
          <div className="col-2 text-center progress-icon">
            {stepIcon[5 - i]}
            {stepDescription[5 - i]}
          </div>
        );
      else
        progress.push(
          <div className="col-2 col-half-offset text-center progress-icon">
            {stepIcon[5 - i]}
            {stepDescription[5 - i]}
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
