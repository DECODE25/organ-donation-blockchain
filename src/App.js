import logo from './logo.svg';
import './App.css';

import {Route, Switch} from "react-router-dom";
import Tracking from "./components/tracking/Tracking";
 
function App() {
  return (
    <div className="App">
      <Tracking />
    </div>
  );
}

export default App;
