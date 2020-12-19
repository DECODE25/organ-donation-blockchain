import React, {useState} from "react";
import ProgressIcons from "./ProgressIcons";
import ProgressBar from "./ProgressBar";
import TabSection from "./TabSection";

const Tracking = () => {
  const [stepsCompleted, setStepsCompleted] = useState(2);
  return (
    <div id="tracking">
      <div id="header" className="w-100 shadow pb-5">
        <div className="container">
          <h1 className="text-center mb-5 text-dark font-weight-bold pt-5 pb-4 ">
            PX09345571
          </h1>
          <ProgressIcons stepsCompleted={stepsCompleted}/>
          <ProgressBar stepsCompleted={stepsCompleted}/>
        </div>
      </div>
      <div id="main" class="container bg-light shadow my-4 p-4 rounded">
        <TabSection />
      </div>
    </div>
  );
};

export default Tracking;
