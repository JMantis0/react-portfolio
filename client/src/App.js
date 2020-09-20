import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  const [tabState, setTabState] = useState("/");

  useEffect(() => {
    console.log("the tab state has changed to: ", tabState);
    
  }, [tabState]);

  return (
    <div className="App">
      <CssBaseline />
      <Header tabState={tabState} setTabState={setTabState} />
      <Router>
        <Route path="/" />
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Router>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>This is your react portfolio</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
