import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/css/material-dashboard-react.css?v=1.3.0";

import LoginContainer from "../src/layouts/Login/LoginContainer";
import Dashboard from "../src/layouts/Dashboard/Dashboard";

import indexRoutes from "routes/index.jsx";
  
const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path='/' component={LoginContainer} />;
      <Route path='/dashboard' component={Dashboard} />;
    </Switch>
  </Router>,
  document.getElementById("root")
);
