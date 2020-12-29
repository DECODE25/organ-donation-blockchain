import "./App.css";
import { Route, Switch} from "react-router-dom";
import Landing from "./components/Landing/Landing";
import TopBarLoggedIn from "./components/Navbar/TopbarLoggedIn";
import Sidebar from "./components/Navbar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Complain from "./components/Complain/Complain";
import Track from "./components/Track/Track";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route>
          <TopBarLoggedIn />
          <div class="d-flex p-3">
            <Sidebar />
            <Switch>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/complain">
                <Complain />
              </Route>
              <Route path="/track">
                <Track />
              </Route>
            </Switch>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
