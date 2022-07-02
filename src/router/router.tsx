import React from "react";

import { HashRouter, Route, Switch } from "react-router-dom";

import { routes } from "../constants";

const Routes: React.FC = () => {
  const mapRoutes = (): Array<JSX.Element> => {
    return routes.map((route: any, key) => (
      <Route
        key={key}
        path={route.path}
        exact={true}
        render={(props) => (
          <route.template>
            <route.component {...props} />
          </route.template>
        )}
      />
    ));
  };

  return (
    <HashRouter>
      <Switch>{mapRoutes()}</Switch>
    </HashRouter>
  );
};

export { Routes };
