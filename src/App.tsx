import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "../src/containers/Layout/Layout";
import AuthLayout from "../src/containers/Layout/AuthLayout";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/dashboard" component={Layout} />
          <Route path="/" component={AuthLayout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
