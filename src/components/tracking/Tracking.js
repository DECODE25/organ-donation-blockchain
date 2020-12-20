import React, {useState} from "react";
import ProgressIcons from "./ProgressIcons";
import ProgressBar from "./ProgressBar";
import TabSection from "./TabSection";

const Tracking = () => {
  const [stepsCompleted, setStepsCompleted] = useState(0);
  return (
    <div id="tracking">
      <div id="header" className="w-100 shadow pb-5 mt-5">
        <div className="container">
          <h1 className="text-center mb-5 text-dark font-weight-bold pt-5 pb-4 ">
            PX09345571
          </h1>
          <ProgressIcons stepsCompleted={stepsCompleted}/>
          <ProgressBar stepsCompleted={stepsCompleted}/>          
          <div className="text-center mt-4 mb-0 pb-0">
            <button className="btn btn-primary" onClick={()=>setStepsCompleted(stepsCompleted+1)}>Approve Step</button>
          </div>
        </div>
      </div>
      <div id="main" class="container shadow my-4 p-4 rounded">
        <TabSection />
      </div>
    </div>
  );
};

export default Tracking;
