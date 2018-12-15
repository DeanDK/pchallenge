import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/home";
import Edit from "./components/Edit/edit.js";
import NoRoute from "./components/404/error.js";
import Layout from "./hoc/layout.js";
import Add from "./components/Add/add.js";

const Routes = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/add" exact component={Add} />
      <Route path="/edit/:id" exact component={Edit} />
      <Route component={NoRoute} />
    </Switch>
  </Layout>
);

export default Routes;
