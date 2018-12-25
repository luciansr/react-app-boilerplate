import React from "react";
import { HashRouter as Router, Route, Link /*, Redirect*/ } from "react-router-dom";

import Index from '../index/Index';
import Login from '../login/Login';

const indexUrl = "/index";

const Empty = () => <div>
  <h2>Empty</h2>
  <Link to={indexUrl}>Home</Link>
</div>;

const AppRouter = () => (
  <Router>
    <div>
      {/* <Redirect exact from="/" to="login" /> */}
      <Route exact path="/" component={Empty} />
      <Route path={indexUrl} component={Index} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
);

export default AppRouter;