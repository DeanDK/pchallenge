import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/home";
import Layout from "./hoc/layout.js";

const Routes = () => (
  <Switch>
    <Layout>
      <Route path="/" exact component={Home} />
    </Layout>
  </Switch>
);

export default Routes;
