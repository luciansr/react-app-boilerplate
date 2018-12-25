import React from "react";
import { HashRouter as Router, Route /*, Redirect*/ } from "react-router-dom";

import Index from '../index/Index';
import Login from '../login/Login';
import Home from '../home/Home';

const indexUrl = "/index";

const AppRouter = () => (
  <Router>
    <div>
      {/* <Redirect exact from="/" to="login" /> */}
      <Route exact path="/" component={Home} />
      <Route path={indexUrl} component={Index} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
);

export default AppRouter;