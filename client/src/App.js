import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  const [tabState, setTabState] = useState("/");

  useEffect(() => {
    console.log("the tab state has changed to: ", tabState);
  }, [tabState]);

  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <Header tabState={tabState} setTabState={setTabState} />
        <Route path="/" />
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Router>
    </div>
  );
}

export default App;
