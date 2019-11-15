/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Switch, Redirect } from "react-router-dom";
import RouteWithLayout from "./components/RouteWithLayout";

import { Main as MainLayout } from "./layouts";
import { Dashboard as DashboardView } from "./views";

const Routes = () => {
  console.log("routesss");

  return (
    <Switch>
      <Redirect exact from="/" to="/dasboard" />
      <RouteWithLayout
        component={DashboardView}
        layout={MainLayout}
        exact
        path="/dashboard"
      />
    </Switch>
  );
};

export default Routes;
