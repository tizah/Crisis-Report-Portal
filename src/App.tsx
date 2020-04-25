import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "../src/containers/Layout/Layout";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Layout />
      </Router>
    </div>
  );
}

export default App;
