import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignUp } from "./components/SignUp";

export function App() {
  return (
    <>
      <Router>
        <SignUp />
      </Router>
    </>
  );
}
