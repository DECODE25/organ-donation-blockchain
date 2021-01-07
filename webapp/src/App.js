import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import TopBarLoggedIn from "./components/Navbar/TopbarLoggedIn";
import Sidebar from "./components/Navbar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Complain from "./components/Complain/Complain";
import Track from "./components/Track/Track";
import useCurrentWidth from "./custom-hooks/useCurrentWidth";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [menuStyle, setMenuStyle] = useState({});
  const [brandStyle, setBrandStyle] = useState({});
  let width = useCurrentWidth();
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setMenuStyle({
        position: "fixed",
        left: "11.4rem",
      });
      setShowBackdrop(true);
      setBrandStyle({
        position: "fixed",
      });
    } else {
      setMenuStyle({});
      setShowBackdrop(false);
      setBrandStyle({});
    }
  }, [width]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route>
          {showSidebar && showBackdrop && (
            <div
              style={{
                width: "calc(100vw - 16.5rem)",
                height: "100vh",
                backgroundColor: "grey",
                opacity: 0.5,
                position: "fixed",
                left: "16.5rem",
                top: 0,
              }}
            ></div>
          )}
          <div className="logged-in-bg">
            <TopBarLoggedIn
              setShowSidebar={setShowSidebar}
              showSidebar={showSidebar}
              menuStyle={menuStyle}
              brandStyle={brandStyle}
            />
            <div class="d-flex p-3">
              {showSidebar && <Sidebar />}
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
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
